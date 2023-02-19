import {ICharacter} from "@interfaces/character.interface";

export interface ICharacterSearch {
  count: number,
  next: string,
  previous: string,
  results: Array<ICharacter>
}
