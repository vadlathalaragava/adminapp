import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
   // customers: any = [
  //   {
  //     id:1,
  //     name:'Swathi',
  //     email:'swathi@gmail.com',
  //     phone:'9999999999',
  //     address:'India'
  //   },
  //   {
  //     id:2,
  //     name:'Divya',
  //     email:'divya@gmail.com',
  //     phone:'992343499',
  //     address:'India'
  //   }
  // ];
  booking:any=[];
  bookings:any = [];

customer:any=[];
customers:any =[];
private customerUrl = 'http://localhost:3000/api/customers';


private movieUrl = 'http://localhost:3000/api/movies';

  private bookingUrl = 'http://localhost:3000/api/bookings';
  constructor(private http: HttpClient) { 
    // var defaultList =[
    //   {
    //     id:1,
    //     name:'Swathi',
    //     email:'swathi@gmail.com',
    //     phone:'9999999999',
    //     address:'India'
    //   },
    //   {
    //     id:2,
    //     name:'Divya',
    //     email:'divya@gmail.com',
    //     phone:'992343499',
    //     address:'India'
    //   }
    // ];
    // if(localStorage.getItem('bookings')==null || JSON.parse(localStorage.getItem('bookings')).length==0)
    // {
    //   this.booking = defaultList;
    //   this.setLocaStorageCustomer(this.booking);
    // }else{
    //   this.getLocaStorageCustomer();
    // }
  }

  // getLocaStorageCustomer(){
  //   this.bookings = JSON.parse(localStorage.getItem('bookings'));
  // }
  // setLocaStorageCustomer(list){
  //   localStorage.setItem('bookings',JSON.stringify(list))
  // }


  getDBMovies (){
    this.http.get<[]>(this.movieUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }

  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
  }





  getDBCustoomers (){
    this.http.get<[]>(this.movieUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }

  getRemoteCustoomers (): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
  }




  getDBCustomers (){
    this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }

  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
  }


  getDBBookings (){
    this.http.get<[]>(this.bookingUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }



  getRemoteBookings(): Observable<[]>{
  	return this.http.get<[]>(this.bookingUrl); 		
  }


  deleteRemoteBooking(booking){
  	return this.http.delete(this.bookingUrl+"/"+booking.id); 		
  } 

  deleteRemoteMovie(movie){
  	return this.http.delete(this.movieUrl+"/"+movie.id); 		
  } 


  
  addRemoteCustomer(booking):Observable<any>{
  	return this.http.post(this.bookingUrl,booking);
 }
  updateRemoteCustomer(booking):Observable<any>{
    return this.http.put(this.bookingUrl + "/"+booking.id,booking);
  }

  getRemoteCustomerById(id):Observable<any>{
  return this.http.get<[]>(this.bookingUrl + "/"+id);
  }

  getCustomer(){
    return this.bookings;
  }
  // addCustomer(booking){
  //   booking.id = Math.round(Math.random()*10000);
  //   this.bookings.push(booking);    
  //   this.setLocaStorageCustomer(this.bookings);
  //   console.log(this.bookings);

  // }
  // deleteCustomer(id){
  //   var list = [];
  //   for(var i=0;i<this.customers.length;i++){
  //     if(id!== this.customers[i].id){
  //       list.push(this.customers[i]);
  //     }
  //   }
  //   this.setLocaStorageCustomer(this.customers);
  //   return this.customers = list;
  // }
  // updateCustomer(customer){
  //   for(var i=0; i<this.bookings.length;i++){
  //     if(this.bookings[i].id==customer.id){
  //     this.bookings[i]=customer;
  //     }
  //   }
  //   this.setLocaStorageCustomer(this.bookings);
  // }
  addUpdateCustomer(booking){
    var update = false;
    for(var i=0; i<this.bookings.length;i++){
      if(this.bookings[i].id==booking.id){
        update = true;
        this.bookings[i]=booking;
        // return this.customers[i];
        break;
      }
    }
    //   if(!update){
    //     this.bookings.push(booking);
    //     booking.id = Math.round(Math.random()*10000);
    //     this.setLocaStorageCustomer(this.bookings);   
    //   }
    // }
  // getCustomerById(id){
  //   for(var i=0;i<this.customers.length;i++){
  //     if(this.customers[i].id==id ){
  //       return this.customers[i];
  //     }
  //   }
  //   this.setLocaStorageCustomer(this.customers);
  // }
}
}
