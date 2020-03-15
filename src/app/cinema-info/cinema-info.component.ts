import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cinemasData } from '../../mocks/mock-data';

@Component({
  selector: 'app-cinema-info',
  templateUrl: './cinema-info.component.html',
  styleUrls: ['./cinema-info.component.css']
})
export class CinemaInfoComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  cinemaInfo;
  selectedMovie;
  selectedShowtimes = [];
  showEdit = false;

  selected() {
    this.selectedShowtimes = this.selectedMovie.showtimes;
  }

  onEditClick() {
    this.showEdit = true;
  }

  onSubmit(formData) {
    this.cinemaInfo = { ...this.cinemaInfo, ...formData.value };
    this.showEdit = false;
  }

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cinemaInfo = cinemasData.find(
        cinema => cinema.id.toString() === params.id
      );
      this.selectedMovie = this.cinemaInfo.movies[0];
      this.selectedShowtimes = this.selectedMovie.showtimes;
    });
  }
}
