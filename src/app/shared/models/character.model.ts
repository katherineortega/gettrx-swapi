import { ICharacter, ICharacterSearch } from "@interfaces/character.interface";
import { getIdFromUrlHelper, getIdsFromListHelper } from "@helpers/get-id-from-url.helper";
import { environment } from "@environments/environment";

export class Character {
  public id: string;
  public name: string;
  public height: string;
  public birthYear: string;
  public gender: string;

  constructor(iCharacter: ICharacter) {
    this.id = getIdFromUrlHelper(iCharacter.url, 'people');
    this.name = iCharacter.name || '-';
    this.height = iCharacter.height || '-';
    this.birthYear = iCharacter.birth_year || '-';
    this.gender = iCharacter.gender || 'n/a';
  }
}

export class CharacterDetail extends Character {
  public skinColor: string;
  public hairColor: string;
  public eyesColor: string;
  public mass: string;
  public homeWorld: string;
  public films: Array<string>;
  public species: Array<string>;
  public vehicles: Array<string>;
  public starships: Array<string>;
  public created: string;
  public edited: string;
  public image: string | null;

  constructor(iCharacter: ICharacter) {
    super(iCharacter);
    this.skinColor = iCharacter.skin_color || '-';
    this.hairColor = iCharacter.hair_color || '-';
    this.eyesColor = iCharacter.eye_color || '-';
    this.mass = iCharacter.mass || '-';
    this.homeWorld = getIdFromUrlHelper(iCharacter.homeworld, 'planets') || '-';
    this.films = getIdsFromListHelper(iCharacter.films, 'films');
    this.species = getIdsFromListHelper(iCharacter.species, 'species');
    this.vehicles = getIdsFromListHelper(iCharacter.vehicles, 'vehicles');
    this.starships = getIdsFromListHelper(iCharacter.starships, 'starships');
    this.created = iCharacter.created || '-';
    this.edited = iCharacter.edited || '-';
    this.image = `${environment.imageBucket}characters/${this.id}.jpg`;
  }
}

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
