import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { NavComponent } from './nav/nav.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { CinemaInfoComponent } from './cinema-info/cinema-info.component';

const routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieInfoComponent
  },
  {
    path: 'cinemas',
    component: CinemasComponent
  },
  {
    path: 'cinema/:id',
    component: CinemaInfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CinemasComponent,
    NavComponent,
    MovieInfoComponent,
    CinemaInfoComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
