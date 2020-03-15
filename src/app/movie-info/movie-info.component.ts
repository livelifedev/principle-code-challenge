import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesData } from '../../mocks/mock-data';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  movieInfo;
  selectedCinema;
  selectedShowtimes = [];
  showEdit = false;

  selected() {
    this.selectedShowtimes = this.selectedCinema.showtimes;
  }

  onEditClick() {
    this.showEdit = true;
  }

  onSubmit(formData) {
    this.movieInfo = { ...this.movieInfo, ...formData.value };
    this.showEdit = false;
  }

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieInfo = moviesData.find(
        movie => movie.id.toString() === params.id
      );
      this.selectedCinema = this.movieInfo.cinemasPlaying[0];
      this.selectedShowtimes = this.selectedCinema.showtimes;
    });
  }
}
