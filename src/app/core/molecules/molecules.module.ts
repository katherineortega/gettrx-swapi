import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from "./input-search/input-search.component";
import { AtomsModule } from "@atoms/atoms.module";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    InputSearchComponent
  ],
  exports: [
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    FormsModule
  ]
})
export class MoleculesModule { }
