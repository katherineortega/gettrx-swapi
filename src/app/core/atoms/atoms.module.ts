import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { TagComponent } from './tag/tag.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TagComponent
  ],
  exports: [
    ButtonComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
