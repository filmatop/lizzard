import { TestBed } from '@angular/core/testing';

import { SpeciesDatabaseService } from './species-database.service';

describe('SpeciesDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeciesDatabaseService = TestBed.get(SpeciesDatabaseService);
    expect(service).toBeTruthy();
  });
});
