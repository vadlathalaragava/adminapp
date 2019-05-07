import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { MovieComponent } from './movie/movie.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    BookingsComponent,
    AddBookingComponent,
    MovieComponent,
    MovieAddComponent,
    MovieUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
