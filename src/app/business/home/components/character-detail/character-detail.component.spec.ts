import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { SelectedCharacterStoreService } from "../../services/selected-character-store.service";
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";
import { CharacterDetail } from "@models/character.model";
import { Observable, of } from "rxjs";

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  let componentSelectedCharacterStoreService: SelectedCharacterStoreService;
  let selectedCharacterStoreService: SelectedCharacterStoreService;
  let selectedCharacterStoreServiceStub: Partial<SelectedCharacterStoreService>;

  let componentSwapiImplementService: SwapiImplementService;
  let swapiImplementService: SwapiImplementService;
  let swapiImplementServiceStub: Partial<SwapiImplementService>;

  beforeEach(async () => {
    selectedCharacterStoreServiceStub = {
      destroyService() {
      },
      get selectedCharacterDetail$(): Observable<CharacterDetail | null> {
        return of({} as CharacterDetail)
      },
      get selectedCharacterId$(): Observable<string | null> {
        return of('')
      }
    };
    swapiImplementServiceStub = {};

    await TestBed.configureTestingModule({
      declarations: [CharacterDetailComponent],
      providers: [
        {provide: SelectedCharacterStoreService, useValue: selectedCharacterStoreServiceStub},
        {provide: SwapiImplementService, useValue: swapiImplementServiceStub},
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;

    selectedCharacterStoreService = fixture.debugElement.injector.get(SelectedCharacterStoreService);
    componentSelectedCharacterStoreService = selectedCharacterStoreService;
    selectedCharacterStoreService = TestBed.inject(SelectedCharacterStoreService);

    swapiImplementService = fixture.debugElement.injector.get(SwapiImplementService);
    componentSwapiImplementService = swapiImplementService;
    swapiImplementService = TestBed.inject(SwapiImplementService);

    fixture.detectChanges();
  });

  it("should inject the component's SelectedCharacterStoreService instance",
    inject([SelectedCharacterStoreService], (service: SelectedCharacterStoreService) => {
      expect(service).toBe(componentSelectedCharacterStoreService);
    }));

  it("should inject the component's SwapiImplementService instance",
    inject([SwapiImplementService], (service: SwapiImplementService) => {
      expect(service).toBe(componentSwapiImplementService);
    }));

  it('TestBed and Component SwapiImplementService should be the same', () => {
    expect(swapiImplementService).toBe(componentSwapiImplementService);
  });

  it('TestBed and Component SelectedCharacterStoreService should be the same', () => {
    expect(selectedCharacterStoreService).toBe(componentSelectedCharacterStoreService);
  });

});
