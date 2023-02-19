import { Injectable } from '@angular/core';
import { HttpClientService } from "@clients/http/http-client.service";
import { environment } from "@environments/environment";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICharacter, ICharacterSearch } from "@interfaces/character.interface";
import { ISpecie } from "@interfaces/specie.interface";
import { IPlanet } from "@interfaces/planet.interface";
import { IFilm } from "@interfaces/film.interface";

@Injectable()
export class SwapiClientService {
  constructor(private httpClient: HttpClientService) {
  }

  characterList(): Observable<Array<ICharacter>> {
    const endpoint = `${environment.api}people/`
    return this.httpClient.httpGet<Array<ICharacter>>(endpoint);
  }

  characterById(id: string = ''): Observable<ICharacter> {
    const endpoint = `${environment.api}people/${id}/`
    return this.httpClient.httpGet<ICharacter>(endpoint);
  }

  characterSearch(search: string = '', page?: string): Observable<ICharacterSearch> {
    const endpoint = `${environment.api}people/`
    let httpParams = new HttpParams().set('search', search);
    if (page) httpParams = httpParams.set('page', page)
    return this.httpClient.httpGet<ICharacterSearch>(endpoint, httpParams);
  }

  specieById(id: string = ''): Observable<ISpecie> {
    const endpoint = `${environment.api}species/${id}/`
    return this.httpClient.httpGet<ISpecie>(endpoint);
  }

  planetById(id: string = ''): Observable<IPlanet> {
    const endpoint = `${environment.api}planets/${id}/`
    return this.httpClient.httpGet<IPlanet>(endpoint);
  }

  filmById(id: string = ''): Observable<IFilm> {
    const endpoint = `${environment.api}films/${id}/`
    return this.httpClient.httpGet<IFilm>(endpoint);
  }

}
