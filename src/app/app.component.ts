import { Component } from '@angular/core';
import { moviesData } from '../mocks/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'principle';
  movies = moviesData;
  items = ['movie 1', 'movie 2', 'movie 3'];
}
