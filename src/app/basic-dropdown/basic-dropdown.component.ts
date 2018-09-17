import { Component, OnInit } from '@angular/core';
import {Family} from '../family';
import {FamilyService} from '../family.service';

@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html'
})
export class BasicDropdownComponent implements OnInit {
  families: Family[];
  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.getDropDownContents();
  }

  getDropDownContents(): void {
    this.familyService.getFamilies().subscribe(families => this.families = families);
  }

}









