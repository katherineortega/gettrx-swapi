import { ICharacter } from "@interfaces/character.interface";

export class Character {
  public name: string;
  public height: number | '-';
  public birthyear: string;
  public gender: string;
  constructor(ICharacter: ICharacter) {
    this.name = ICharacter.name || '-';
    this.height = ICharacter.height || '-';
    this.birthyear = ICharacter.birthyear || '-';
    this.gender = ICharacter.gender || 'n/a';
  }
}

export class CharacterPreview extends Character{
  public mass: number | '-';
  public skinColor: string;
  public hairColor: string;
  public eyesColor: string;
  constructor(ICharacter: ICharacter) {
    super(ICharacter);
    this.mass = ICharacter.mass || '-';
    this.skinColor = ICharacter.skinColor || '-';
    this.hairColor = ICharacter.hairColor || '-';
    this.eyesColor = ICharacter.eyesColor || '-';
  }
}
