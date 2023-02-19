import { ISpecie } from "@interfaces/specie.interface";

export class Specie {
  public name: string;

  constructor(iSpecie: ISpecie) {
    this.name = iSpecie.name || '';
  }
}
