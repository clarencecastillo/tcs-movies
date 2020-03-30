import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie, MovieService } from 'src/app/movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tcs-edit-movie-modal',
  templateUrl: './edit-movie-modal.component.html',
  styleUrls: ['./edit-movie-modal.component.scss']
})
export class EditMovieModalComponent implements OnInit {

  @Input()
  movie: Movie;

  movieForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private movieService: MovieService 
  ) {
    this.movieForm = this.fb.group({
      title: [''],
      description: [''],
      year: [0]
    });
  }

  ngOnInit(): void {
    this.movieForm.patchValue(this.movie);
  }

  submit() {
    this.movieService.updateMovie(this.movie.id, this.movieForm.value);
    this.activeModal.close();
  }

}
