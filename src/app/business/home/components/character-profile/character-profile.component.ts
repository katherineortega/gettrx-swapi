import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from "@atoms/dialog/dialog.component";
import { SelectedCharacterStoreService } from "../../services/selected-character-store.service";
import { CharacterDetail } from "@models/character.model";
import { Subscription, take } from "rxjs";
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";
import { Specie } from "@models/specie.modal";
import { Film } from "@models/film.modal";
import { Planet } from "@models/planet.modal";

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.sass']
})
export class CharacterProfileComponent implements OnInit, OnDestroy {
  public characterDetail: CharacterDetail | null | undefined;
  public disabled: boolean = true;

  public characterSpeciesList: Array<string> = [];
  public characterHomeWorld: string = '';
  public characterFilmList: Array<Film> = [];

  private subscriptionList: Array<Subscription> = []

  @ViewChild(DialogComponent, {static: false}) dialogComponent: DialogComponent | undefined;

  constructor(private selectedCharacterStore: SelectedCharacterStoreService,
              private swapiImplement: SwapiImplementService) {
  }

  ngOnInit(): void {
    this.selectedCharacterObservable();
  }

  viewEvent() {
    this.dialogComponent?.open();
  }

  selectedCharacterObservable() {
    const subscription = this.selectedCharacterStore.selectedCharacterDetail$.subscribe(
      (selectedCharacter: CharacterDetail | null) => {
        this.disabled = !selectedCharacter;
        this.characterDetail = selectedCharacter;

        this.getCharacterSpecieList();
        this.getCharacterPlanet();
        this.getCharacterFilmList();
      }
    )
    this.subscriptionList.push(subscription);
  }

  getCharacterSpecieList() {
    this.characterSpeciesList = []
    if (this.characterDetail?.species.length) {
      this.characterDetail?.species.forEach((specieId: string) => {
        const subscription = this.swapiImplement.specieById(specieId)
          .pipe(take(1))
          .subscribe((specie: Specie) => {
            this.characterSpeciesList.push(specie.name);
          })
        this.subscriptionList.push(subscription);
      });
    } else {
      this.characterSpeciesList = ['Unknown']
    }
  }

  getCharacterPlanet() {
    this.characterHomeWorld = '';
    if (this.characterDetail?.homeWorld) {
      const subscription = this.swapiImplement.planetById(this.characterDetail?.homeWorld)
        .pipe(take(1))
        .subscribe((planet: Planet) => {
          this.characterHomeWorld = planet.name;
        })
      this.subscriptionList.push(subscription);
    } else {
      this.characterHomeWorld = 'Unknown'
    }
  }

  getCharacterFilmList() {
    this.characterFilmList = [];
    if (this.characterDetail?.films.length) {
      this.characterDetail?.films.forEach((filmId: string) => {
        const subscription = this.swapiImplement.filmById(filmId)
          .pipe(take(1))
          .subscribe((film: Film) => {
            this.characterFilmList.push(film);
          })
        this.subscriptionList.push(subscription);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())

    this.selectedCharacterStore.destroyService();
  }

}
