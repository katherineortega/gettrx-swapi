import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Character } from "@models/character.model";

@Injectable()
export class SelectedCharacterStoreService {
  selectedCharacterSubject = new BehaviorSubject<Character | null>(null);

  constructor() {
  }

  get selectedCharacter$(): Observable<Character | null> {
    return this.selectedCharacterSubject.asObservable();
  }

  set selectedCharacter(character: Character | null) {
    this.selectedCharacterSubject.next(character);
  }
}
