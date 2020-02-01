import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(/*private service: SearchService,*/
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     let id = params['imdbID'];
    //     this.service.getMovieDetails(id)
    //       .subscribe(res => this.movie = res);
    //   });
  }

  goBack() {
    window.history.back();
  }

}
