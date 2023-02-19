import { Injectable } from '@angular/core';
import { SwapiClientService } from "@clients/swapi/swapi-client.service";
import { map, Observable } from "rxjs";
import { CharacterSearch } from "@models/search-people.model";
import { ICharacterSearch } from "@interfaces/search-people.interface";
import { Character, CharacterDetail } from "@models/character.model";
import { ICharacter } from "@interfaces/character.interface";

@Injectable()
export class SwapiImplementService {

  constructor(private swapiClient: SwapiClientService) {
  }

  characterList(): Observable<Array<Character>> {
    return this.swapiClient.characterList().pipe(
      map((iCharacterList: Array<ICharacter>) => {
          return iCharacterList?.length ? iCharacterList
            .map((iCharacter: ICharacter) => new CharacterDetail(iCharacter)) : [];
        }
      ));
  }

  characterById(id: string): Observable<CharacterDetail> {
    return this.swapiClient.characterById(id).pipe(
      map((iCharacter: ICharacter) => {
          return new CharacterDetail(iCharacter);
        }
      ));
  }

  characterSearch(search: string, page?: string): Observable<CharacterSearch> {
    return this.swapiClient.characterSearch(search, page).pipe(
      map((iCharacterSearch: ICharacterSearch) => {
          return new CharacterSearch(iCharacterSearch);
        }
      ));
  }
}
