import { Component, OnInit } from '@angular/core';
import { moviesData } from '../../mocks/mockData';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor() {}
  movies = moviesData;

  ngOnInit(): void {}
}
