import { Injectable } from '@angular/core';
import { Family } from './family';
import { Species } from './species';

import { Observable, of } from 'rxjs';
import {SpeciesDatabaseService} from './species-database.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(
    private speciesDb: SpeciesDatabaseService
  ) { }

  public getSpecies(family: Family): Observable<Species[]> {
    const speciesList: Species[] = this.speciesDb.getSpecies(); // holds all species

    const filteredSpeciesList = speciesList.filter(function (species) {  // get species from a specific family
      return species.family === family;
    });

    return of(filteredSpeciesList);
  }

  private hasFamily(species: Species, family: Family) {
    return (species.family === family);
  }
}
