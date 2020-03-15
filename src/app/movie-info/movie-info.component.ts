import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesData } from '../../mocks/mock-data';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieInfo;
  selectedCinema;
  selectedShowtimes = [];
  activatedRoute: ActivatedRoute;

  selected() {
    this.selectedShowtimes = this.selectedCinema.showtimes;
  }

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieInfo = moviesData.find(
        movie => movie.id.toString() === params.id
      );
    });
  }
}
