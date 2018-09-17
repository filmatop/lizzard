import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpeciesService} from '../species.service';
import {FamilyService} from '../family.service';
import {FAMILIES} from '../mock-families';
import {Family} from '../family';
import { Species } from '../species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species: Species[];
  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService,
    private familyService: FamilyService
    ) { }

  ngOnInit() {
    this.getSpeciesFromFamily();
  }

  getSpeciesFromFamily(): void {
    console.log('hejjej');
    const FAMILY_NAME = this.route.snapshot.paramMap.get('name');
    const family = this.familyService.findFamily(FAMILIES, FAMILY_NAME);
    this.speciesService.getSpecies(family)
      .subscribe(speciesList => this.species = speciesList);
  }

}
