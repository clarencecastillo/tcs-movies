import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieService } from '../movie.service';
import { UserType, UserService } from '../user.service';

@Component({
  selector: 'tcs-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  user: UserType;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private userService: UserService
  ) {
    this.route.params.subscribe(params => {
      this.movie = this.movieService.getMovie(params.id);
    });

    this.userService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }
}
