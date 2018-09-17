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
    const speciesList: Species[] = [];
    speciesList.push(this.speciesDb.getSpecies().find(species => species.family === family));
    //speciesList.push(this.speciesDb.getSpecies().filter());
    return of(speciesList);
  }
}
