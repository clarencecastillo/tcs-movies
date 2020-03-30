import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie.service';

@Component({
  selector: 'tcs-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  @Input()
  truncate: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
