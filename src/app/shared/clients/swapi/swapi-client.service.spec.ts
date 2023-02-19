import { TestBed } from '@angular/core/testing';

import { SwapiClientService } from './swapi-client.service';

describe('SwapiClientService', () => {
  let service: SwapiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
