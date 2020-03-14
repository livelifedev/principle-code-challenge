import { Component, OnInit } from '@angular/core';
import { moviesData } from '../../mocks/mock-data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = moviesData;

  constructor() {}

  ngOnInit(): void {}
}
