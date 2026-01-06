import { Component } from '@angular/core';

import { BooksByGenreComponent } from "./books-by-genre/books-by-genre.component";

@Component({
  selector: 'app-root',
  imports: [ BooksByGenreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'books-by-genre-app';
}
