import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { AtomsModule } from "@atoms/atoms.module";



@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  exports: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ]
})
export class OrganismsModule { }
