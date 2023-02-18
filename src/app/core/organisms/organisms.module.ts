import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { AtomsModule } from "@atoms/atoms.module";
import { CharacterPreviewComponent } from './character-preview/character-preview.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterPreviewComponent
  ],
  exports: [
    CharacterCardComponent,
    CharacterPreviewComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ]
})
export class OrganismsModule { }
