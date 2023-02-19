import { IPlanet } from "@interfaces/planet.interface";

export class Planet {
  public name: string;

  constructor(iPlanet: IPlanet) {
    this.name = iPlanet.name || '';
  }
}
