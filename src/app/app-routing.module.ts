import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BookingsComponent} from './bookings/bookings.component';
import {CustomersComponent} from './customers/customers.component';
import {AddBookingComponent} from './add-booking/add-booking.component';
import {MovieComponent} from './movie/movie.component';
import {MovieAddComponent} from './movie-add/movie-add.component';
import {MovieUpdateComponent} from './movie-update/movie-update.component';

const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'bookings',component:BookingsComponent},
{path:'customers',component:CustomersComponent},
{path:'add-booking',component:AddBookingComponent}, 
{path:'movie',component:MovieComponent},
{path:'movie-add',component:MovieAddComponent}, 
{path:'movie-update',component:MovieUpdateComponent}, 
{path:'', pathMatch:'full',redirectTo:'/login' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
