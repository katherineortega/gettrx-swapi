import { SwapiImplementService } from './swapi-implement.service';
import { SwapiClientService } from "@clients/swapi/swapi-client.service";
import { TestBed } from "@angular/core/testing";

describe('SwapiImplementService', () => {
  let swapiImplementService: SwapiImplementService;

  beforeEach(() => {

    const MockSwapiClientService: Partial<SwapiClientService> = {};

    TestBed.configureTestingModule({
      providers: [
        {
          provide: SwapiClientService,
          useValue: MockSwapiClientService
        },
        SwapiImplementService
      ]
    });
    swapiImplementService = TestBed.inject(SwapiImplementService);
  });

  it('should be created', () => {
    expect(swapiImplementService).toBeTruthy();
  });
});
