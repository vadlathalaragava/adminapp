import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  customers:any;
  ngOnInit() {
    this.adminService.getRemoteBookings().subscribe((result) => {this.customers = result;});
  }

}
