import { ICharacter } from "@interfaces/character.interface";
import { ICharacterSearch } from "@interfaces/search-people.interface";
import { Character } from "@models/character.model";
import { getIdFromUrlHelper } from "../helpers/get-id-from-url.helper";

export class CharacterSearch {
  public total: number;
  public nextPage: string;
  public previousPage: string;
  public resultList: Array<Character>;

  constructor(iSearchPeople: ICharacterSearch) {
    this.total = iSearchPeople.count;
    this.nextPage = getIdFromUrlHelper(iSearchPeople.next, 'page=');
    this.previousPage = iSearchPeople.previous;
    this.resultList = iSearchPeople.results?.length ? iSearchPeople.results
      .map((iCharacter: ICharacter) => new Character(iCharacter)) : [];
  }

}
