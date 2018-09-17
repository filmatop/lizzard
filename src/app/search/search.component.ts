import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = '';

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.value = value;
    this.searchBarService.updateValue(this.value);
  }
}
