import { TestBed } from '@angular/core/testing';

import { SwapiImplementService } from './swapi-implement.service';

describe('SwapiImplementService', () => {
  let service: SwapiImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
