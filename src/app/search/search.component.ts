import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-search',
  template: `
    <input (keyup)="onKey($event)" placeholder="Search..." id="search-bar">
    <p style="color:white">{{value}}</p>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = '';

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.value = event.target.value;
    this.searchBarService.updateValue(this.value);
  }
}
