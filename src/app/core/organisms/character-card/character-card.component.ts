import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from "@models/character.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {
  public selected: boolean = false;

  @Input() character: Character | undefined;

  @Input('selected')
  set selectedInput(selected: boolean) {
    this.selected = selected;
  }

  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

  ngOnInit(): void {
  }

  eventClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.selected) {
      this.click.emit(event);
    }
  }
}
