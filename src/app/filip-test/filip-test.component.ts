import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-filip-test',
  templateUrl: './filip-test.component.html',
  styleUrls: ['./filip-test.component.css']
})
export class FilipTestComponent implements OnInit {

  value = '';
  constructor(private searchBarService: SearchBarService) {
  }

  clickCount = 0;

  ngOnInit() {
    this.searchBarService.getValue().subscribe(value => this.value = value);
  }

  increaseCounter() {
    this.clickCount++;
  }





}
