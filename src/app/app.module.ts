import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentComponent } from './payment/payment.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { TruncatePipe } from './truncate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelComponent } from './movie-details/admin-panel/admin-panel.component';
import { EditMovieModalComponent } from './movie-details/edit-movie-modal/edit-movie-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ReviewsComponent,
    ErrorComponent,
    NavigationComponent,
    AboutUsComponent,
    CinemasComponent,
    MovieDetailsComponent,
    CinemaDetailsComponent,
    MovieReviewsComponent,
    BookingComponent,
    LoginComponent,
    AccountComponent,
    BookingsComponent,
    BookingDetailsComponent,
    PaymentComponent,
    MovieCardComponent,
    TruncatePipe,
    AdminPanelComponent,
    EditMovieModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
