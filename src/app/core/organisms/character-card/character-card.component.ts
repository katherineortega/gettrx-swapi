import { Component, Input, OnInit } from '@angular/core';
import { Character } from "@models/character.model";
import { ICharacter } from "@interfaces/character.interface";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character = new Character({} as ICharacter);

  constructor() { }

  ngOnInit(): void {
  }

}
