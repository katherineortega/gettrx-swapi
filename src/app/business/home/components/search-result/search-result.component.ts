import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Character } from "@models/character.model";
import { SelectedCharacterStoreService } from "../../services/selected-character-store.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit, OnDestroy, OnChanges {

  public selectedCharacter: Character | null = {} as Character;
  public isLoading: boolean = false;
  private enableScrollEvent: boolean = true;
  private subscriptionList: Array<Subscription> = [];

  @Input() total: number = 0;
  @Input() characterList: Array<Character> = [];
  @Output() nextPage: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @ViewChild('searchResult', {static: false}) searchResultElement: ElementRef<HTMLDivElement> | undefined;

  constructor(private selectedCharacterStore: SelectedCharacterStoreService) {
  }

  ngOnInit(): void {
    this.selectedCharacterObservable();
  }

  ngOnChanges(): void {
    if (this.characterList?.length) {
      this.enableScrollEvent = true;
      this.isLoading = false;
    }
  }

  onScroll(event: Event) {
    event.preventDefault()
    const element: HTMLDivElement | undefined = this.searchResultElement?.nativeElement;
    const scrollTop = element?.scrollTop || 0;
    const offsetHeight = element?.offsetHeight || 0;
    const scrollHeight = element?.scrollHeight || 0;
    const isNearToTheBottom = offsetHeight + scrollTop > scrollHeight;
    if (isNearToTheBottom && this.enableScrollEvent && this.total > this.characterList?.length) {
      this.nextPageEvent();
    }
  }

  nextPageEvent() {
    this.enableScrollEvent = false;
    this.isLoading = true;
    this.nextPage.emit(true);
  }

  selectedCharacterObservable() {
    const subscription = this.selectedCharacterStore.selectedCharacter$.subscribe(
      (selectedCharacter: Character | null) => {
        this.selectedCharacter = selectedCharacter;
      }
    )
    this.subscriptionList.push(subscription);
  }

  selectCharacter(selectedCharacter: Character) {
    this.selectedCharacterStore.selectedCharacter = selectedCharacter;
  }

  ngOnDestroy() {
    this.selectedCharacterStore.selectedCharacter = null;
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
