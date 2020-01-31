import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
const movieUrl = 'http://www.omdbapi.com/?apikey=6717fc43';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

/**
 * Need to figure out how to get the book API to hook into these functions properly.
 * @param searchTerm 
 */

  searchBooks(searchTerm: string): Observable<any> {
    return this.http.get(bookUrl, {params: {q: searchTerm}});
  }

  getBookDetails(bookID: string): Observable<any> {
    return this.http.get(bookUrl, {params: {i: bookID}});
  }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(movieUrl, {params: {s: searchTerm}});
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(movieUrl, {params: {i: imdbID}});
  }
}
