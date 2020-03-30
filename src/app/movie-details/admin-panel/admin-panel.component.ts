import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieService } from 'src/app/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditMovieModalComponent } from '../edit-movie-modal/edit-movie-modal.component';

@Component({
  selector: 'tcs-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  featureMovie() {
    this.movieService.feature(this.movie.id);
  }

  hideMovie() {
    this.movieService.hide(this.movie.id);
  }

  presentEditMovieModal() {
    const modal = this.modalService.open(EditMovieModalComponent, {
      size: 'xl',
      centered: true
    });
    modal.componentInstance.movie = this.movie;
  }

}
