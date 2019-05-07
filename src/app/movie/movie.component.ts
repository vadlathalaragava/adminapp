import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private adminService:AdminService ) { }
  movies:any;
  ngOnInit() {
    this.adminService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }
  onDelete(movie){
    console.log(JSON.stringify(movie));
    this.adminService.deleteRemoteMovie(movie).subscribe((e) => {
      this.adminService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    });
  }
}
