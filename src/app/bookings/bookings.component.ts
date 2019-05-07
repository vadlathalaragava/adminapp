import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings:any;

  


  
  constructor(private adminService:AdminService,private router: Router) { }

  booking:any={
      id:0,
      customer_id:'',
      tickets:'', 
      movie_id:'',
      movie_name:'', 
      movie_time:'', 
      theatre:'', 
      screen:'', 
      city:'', 
      movie_date:'',
      date:'',
      amount:'',
      ticket_price:''  
  };
  ngOnInit() {
    this.adminService.getRemoteBookings().subscribe((result) => {this.bookings = result;});
     
  }


  onDelete(booking){
    console.log(JSON.stringify(booking));
    this.adminService.deleteRemoteBooking(booking).subscribe((e) => {
      this.adminService.getRemoteBookings().subscribe((result) => {this.bookings = result;});
    });
   // this.list = this.customerService.getCustomers();
  }


  onEdit(booking){
    this.router.navigate(['/booking-update/'+booking.id]);
  }

}
