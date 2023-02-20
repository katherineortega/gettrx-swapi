import { IFilm } from "@interfaces/film.interface";
import { UrlHelper } from "@helpers/url.helper";
import { environment } from "@environments/environment";

export class Film {
  public id: string;
  public image: string;
  public name: string;

  constructor(iFilm: IFilm) {
    this.id = UrlHelper.getIdFromUrl(iFilm.url, 'films')
    this.name = iFilm.title || '';
    this.image = `${environment.imageBucket}films/${this.id}.jpg`
  }
}
