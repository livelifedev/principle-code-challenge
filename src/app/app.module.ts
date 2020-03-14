import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { NavComponent } from './nav/nav.component';

const routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'cinemas', component: CinemasComponent }
];

@NgModule({
  declarations: [AppComponent, MoviesComponent, CinemasComponent, NavComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
