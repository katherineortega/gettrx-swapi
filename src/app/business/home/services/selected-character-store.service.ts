import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { CharacterDetail } from "@models/character.model";

@Injectable()
export class SelectedCharacterStoreService {
  private selectedCharacterSubject = new BehaviorSubject<string | null>(null);
  private selectedCharacterDetailSubject = new BehaviorSubject<CharacterDetail | null>(null);
  private subscriptionList: Array<Subscription> = []

  constructor() {
    const subscription = this.selectedCharacterId$.subscribe((selectedCharacterId: string | null) => {
        if (!selectedCharacterId) this.selectedCharacterDetail = null;
      }
    )
    this.subscriptionList.push(subscription);
  }

  get selectedCharacterId$(): Observable<string | null> {
    return this.selectedCharacterSubject.asObservable();
  }

  set selectedCharacterId(character: string | null) {
    this.selectedCharacterSubject.next(character);
  }

  get selectedCharacterDetail$(): Observable<CharacterDetail | null> {
    return this.selectedCharacterDetailSubject.asObservable();
  }

  set selectedCharacterDetail(character: CharacterDetail | null) {
    this.selectedCharacterDetailSubject.next(character);
  }

  destroyService() {
    this.selectedCharacterId = null;
    this.selectedCharacterDetail = null;

    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
