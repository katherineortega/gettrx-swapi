import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CharacterProfileComponent } from './character-profile.component';
import { SelectedCharacterStoreService } from "../../services/selected-character-store.service";
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";
import { CharacterDetail } from '@models/character.model';
import { Observable, of } from "rxjs";
import { Component, Input } from "@angular/core";


@Component({selector: 'app-dialog', template: ''})
class DialogStubComponent {
}
@Component({selector: 'app-button', template: ''})
class ButtonStubComponent {
  @Input() disabled = false
}

describe('CharacterProfileComponent', () => {
  let component: CharacterProfileComponent;
  let fixture: ComponentFixture<CharacterProfileComponent>;

  let componentSelectedCharacterStoreService: SelectedCharacterStoreService;
  let selectedCharacterStoreService: SelectedCharacterStoreService;
  let selectedCharacterStoreServiceStub: Partial<SelectedCharacterStoreService>;

  let componentSwapiImplementService: SwapiImplementService;
  let swapiImplementService: SwapiImplementService;
  let swapiImplementServiceStub: Partial<SwapiImplementService>;

  beforeEach(() => {
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

    TestBed.configureTestingModule({
      declarations: [CharacterProfileComponent, DialogStubComponent, ButtonStubComponent],
      providers: [
        {provide: SelectedCharacterStoreService, useValue: selectedCharacterStoreServiceStub},
        {provide: SwapiImplementService, useValue: swapiImplementServiceStub},
      ],
    });

    fixture = TestBed.createComponent(CharacterProfileComponent);
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
