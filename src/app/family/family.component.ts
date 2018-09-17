import {Component, Input, OnInit} from '@angular/core';
import {Family} from '../family';
import {FamilyService} from '../family.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  families: Family[];

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
  }


  getFamilies(): void {
    this.familyService.getFamilies().subscribe(families => this.families = families);
  }

}
