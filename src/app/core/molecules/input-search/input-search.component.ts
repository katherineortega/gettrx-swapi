import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.sass']
})
export class InputSearchComponent {

  @Input() id: string = 'input-search';
  @Input() name: string = 'input-search';
  @Input() type: 'number' | 'text' = 'text';
  @Input() block: boolean = false;
  @Input() placeholder: string = 'placeholder';
  @Input() disabled: boolean = false;
  @Input() value: string = '';

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  eventSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

}
