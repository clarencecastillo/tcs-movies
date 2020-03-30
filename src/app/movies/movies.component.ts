import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'tcs-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private userService: UserService
  ) {
    this.userService.user.subscribe(user => {
      const isAdmin = user === 'admin';
      this.movies = this.movieService.getMovies().filter(m => isAdmin || m.featured);
    })
  }

  ngOnInit(): void {
  }

}
