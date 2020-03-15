import { Component, OnInit } from '@angular/core';
import { cinemasData } from '../../mocks/mock-data';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
  cinemas = cinemasData;

  constructor() {}

  ngOnInit(): void {}
}
