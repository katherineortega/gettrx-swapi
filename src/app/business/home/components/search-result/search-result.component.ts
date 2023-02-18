import {Component, Input, OnInit} from '@angular/core';
import {Character} from "@models/character.model";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  @Input() characterList: Array<Character> = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
