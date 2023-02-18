import { Component, Input, OnInit } from '@angular/core';
import { CharacterPreview } from "@models/character.model";

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.sass']
})
export class CharacterPreviewComponent implements OnInit {

  @Input() character: CharacterPreview | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
