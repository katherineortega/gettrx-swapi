import { Injectable } from '@angular/core';
import { SwapiClientService } from "@clients/swapi/swapi-client.service";
import { map, Observable } from "rxjs";
import { Character, CharacterDetail, CharacterSearch } from "@models/character.model";
import { ICharacter, ICharacterSearch } from "@interfaces/character.interface";
import { ISpecie } from "@interfaces/specie.interface";
import { Specie } from "@models/specie.modal";
import { Planet } from "@models/planet.modal";
import { Film } from "@models/film.modal";
import { IFilm } from "@interfaces/film.interface";
import { IPlanet } from "@interfaces/planet.interface";

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

  specieById(id: string): Observable<Specie> {
    return this.swapiClient.specieById(id).pipe(
      map((iSpecie: ISpecie) => {
          return new Specie(iSpecie);
        }
      ));
  }

  planetById(id: string): Observable<Planet> {
    return this.swapiClient.planetById(id).pipe(
      map((iPlanet: IPlanet) => {
          return new Planet(iPlanet);
        }
      ));
  }

  filmById(id: string): Observable<Film> {
    return this.swapiClient.filmById(id).pipe(
      map((iFilm: IFilm) => {
          return new Film(iFilm);
        }
      ));
  }
}
