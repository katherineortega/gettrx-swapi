import { TestBed } from '@angular/core/testing';

import { SelectedCharacterStoreService } from "./selected-character-store.service";

describe('SelectedCharacterStoreService', () => {
  let service: SelectedCharacterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCharacterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
