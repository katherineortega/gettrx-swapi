import { Component, Input } from '@angular/core';

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

  constructor() {
  }

  submit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    console.log(this.value);
  }

}
