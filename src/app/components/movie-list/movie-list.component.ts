import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(/*private service: SearchService,*/
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // this.activatedRoute.queryParams.subscribe(
    //   qparams => {
    //     let q = qparams['q'];
    //     this.service.searchMovies(q)
    //       .subscribe(res => this.movies = res.Search);
    //   });
}}
