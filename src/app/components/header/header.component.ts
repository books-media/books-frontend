import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryTerm: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitHandler(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // set this to only work w/ movies for now
    this.router.navigate(['/books'], {queryParams: {q: this.queryTerm}});
  }
}
