import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-by-genre',
  imports: [FormsModule,CommonModule],
  templateUrl: './books-by-genre.component.html',
  styleUrl: './books-by-genre.component.css'
})
export class BooksByGenreComponent {
  // Input field value
  genre: string = '';

  // List of book names
  books: string[] = [];

  // To check if search button was clicked
  searched: boolean = false;

  constructor(private http: HttpClient) {}

  searchBooks(): void {
    // Mark search as triggered
    this.searched = true;

    const url = `https://jsonmock.hackerrank.com/api/books?genre=${this.genre}`;

    this.http.get<any>(url).subscribe(response => {
      this.books = response.data.map((book: any) => book.book_name);
    });
  }
}
