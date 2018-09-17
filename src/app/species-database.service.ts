import { Injectable } from '@angular/core';
import {FamilyService} from './family.service';
import {Species} from './species';
import {FAMILIES} from './mock-families';

@Injectable({
  providedIn: 'root'
})
export class SpeciesDatabaseService {

  constructor(
    private familyService: FamilyService
  ) { }

  VARAN_FAMILY = 'Varanidae';
  CAMELEON_FAMILY = 'Chamaeleonidae';

  SPECIES: Species[] = [
    { name: 'Comodo dragon', family: this.familyService.findFamily(FAMILIES, this.VARAN_FAMILY), imgUrl: 'https://previews.123rf.com/images/surz/surz1801/surz180101403/94795526-the-fighting-comodo-dragon-varanus-komodoensis-for-domination-it-is-the-biggest-living-lizard-in-the.jpg' },
    { name: 'Savannah monitor', family: this.familyService.findFamily(FAMILIES, this.VARAN_FAMILY), imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Varanus_exanthematicus_in_the_wild.jpg/1024px-Varanus_exanthematicus_in_the_wild.jpg'},
    { name: 'Indian chameleon', family: this.familyService.findFamily(FAMILIES, this.CAMELEON_FAMILY), imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Indian_Chameleon_%28Chamaeleo_zeylanicus%29_Photograph_By_Shantanu_Kuveskar.jpg'}
  ];

  public getSpecies(): Species[] {
    return this.SPECIES;
  }
}

