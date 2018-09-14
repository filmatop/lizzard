import { Injectable } from '@angular/core';
import { Family } from './family';
import { Species } from './species';

import { SPECIES } from './mock-species'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor() { }

  getSpecies(family: Family): Observable<Species[]> {
    const speciesList = [];
    speciesList.push(SPECIES.find(species => species.family === family))
    return of(speciesList);
  }
}
