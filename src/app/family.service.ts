import { Injectable } from '@angular/core';
import {Family} from './family';
import { MockSpecies } from './mock-species';
import { FAMILIES } from './mock-families';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor() { }

  getFamilies(): Observable<Family[]> {
    return of(FAMILIES);
  }

  findFamily(families: Family[], familyName: string): Family {
    return families.find(family => family.name === familyName);
  }
}
