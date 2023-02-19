import { IFilm } from "@interfaces/film.interface";
import { getIdFromUrlHelper } from "@helpers/get-id-from-url.helper";
import { environment } from "@environments/environment";

export class Film {
  public id: string;
  public image: string;
  public name: string;

  constructor(iFilm: IFilm) {
    this.id = getIdFromUrlHelper(iFilm.url, 'films')
    this.name = iFilm.title || '';
    this.image = `${environment.imageBucket}films/${this.id}.jpg`
  }
}
