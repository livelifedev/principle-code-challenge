# Principle Code Challenge

The goal of this challenge was to build a movie/cinema guide CRUD application using the Angular framework. The application did not require a backend or to persist data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Styling libraries

Bootstrap was used to style this application

## Routes

- / - homepage
- /movies - movies index page, listing all movies
- /movie/:id - individual movie page, showing more information on the movie and allowing editing of details
- /cinemas - cinemas index page, listing all cinemas
- /cinema/:id - individual cinema page, showing more information on a cinema and allowing editing of details

## Mock data

Mock data was generated using `https://www.mockaroo.com/` and imported into required components. The structure is similar to the response data returned from an API. When a component is loaded, this is the data that would have been returned by the API.

## Data persistence

When using the edit forms to change the movie or cinema detail, that data is only stored in the component's local state and gets cleared on refresh. In a real world application, it would be sent to our backend when the submit is clicked and would update the database with the new information.
