import { Component, OnInit } from '@angular/core';
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";
import { CharacterSearch } from "@models/search-people.model";
import { Subscription, take } from "rxjs";
import { Character } from "@models/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public characterTotal: number = 0;
  public characterSearchNextPage: string | undefined;
  public characterList: Array<Character> = [];
  public isSearching: boolean = false;
  private searchStore: string | undefined;
  private subscriptionList: Array<Subscription> = []

  constructor(private swapiImplement: SwapiImplementService) {
  }

  ngOnInit(): void {
  }

  inputSearchEvent(search: string) {
    this.isSearching = true;
    if (this.searchStore?.toUpperCase() !== search.toUpperCase()) {
      this.searchStore = search;
      this.characterTotal = 0;
      this.characterList = [];
      this.characterSearchNextPage = undefined;
      this.characterSearch(search);
    }
  }

  nextPage() {
    this.characterSearch(this.searchStore || '', this.characterSearchNextPage);
  }

  characterSearch(search: string, page?: string) {
    const subscription = this.swapiImplement.characterSearch(search, page)
      .pipe(take(1))
      .subscribe((searchPeople: CharacterSearch) => {
        this.characterTotal = searchPeople.total;
        this.characterSearchNextPage = searchPeople.nextPage;
        this.characterList = [...this.characterList, ...searchPeople.resultList];
        this.isSearching = false;
      })
    this.subscriptionList.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
