import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CharacterDetail } from "@models/character.model";
import { SelectedCharacterStoreService } from "../../services/selected-character-store.service";
import { Subscription, take } from "rxjs";
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass']
})
export class CharacterDetailComponent implements OnInit, OnDestroy, OnChanges {

  public characterDetail: CharacterDetail | undefined;
  public loading: boolean = false;
  private subscriptionList: Array<Subscription> = []

  @Input() clean: boolean = false;

  constructor(private selectedCharacterStore: SelectedCharacterStoreService,
              private swapiImplement: SwapiImplementService) {
  }

  ngOnInit(): void {
    this.selectedCharacterObservable();
  }

  ngOnChanges(): void {
    if (this.clean) {
      this.characterDetail = undefined;
      this.selectedCharacterStore.selectedCharacterId = null;
    }
  }

  selectedCharacterObservable() {
    const subscription = this.selectedCharacterStore.selectedCharacterId$.subscribe(
      (selectedCharacterId: string | null) => {
        if (selectedCharacterId) this.characterById(selectedCharacterId);
      }
    )
    this.subscriptionList.push(subscription);
  }

  characterById(id: string) {
    this.loading = true;
    this.selectedCharacterStore.selectedCharacterDetail = null
    const subscription = this.swapiImplement.characterById(id)
      .pipe(take(1))
      .subscribe(
        (characterDetail: CharacterDetail) => {
          this.characterDetail = characterDetail;
          this.selectedCharacterStore.selectedCharacterDetail = characterDetail;
          this.loading = false;
        }
      )
    this.subscriptionList.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe());

    this.selectedCharacterStore.destroyService();
  }

}
