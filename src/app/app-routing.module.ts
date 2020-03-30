import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ErrorComponent } from './error/error.component';
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


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movie/:movieId/cinema/:cinemaId',
    component: BookingComponent
  },
  {
    path: 'cinemas',
    component: CinemasComponent
  },
  {
    path: 'cinema/:id',
    component: CinemaDetailsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {  
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'booking/:id',
    component: BookingDetailsComponent
  },
  {
    path: 'booking/:id/payment',
    component: PaymentComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
