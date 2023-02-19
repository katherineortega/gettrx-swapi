import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { TagComponent } from './tag/tag.component';
import { DialogComponent } from "@atoms/dialog/dialog.component";


@NgModule({
  declarations: [
    ButtonComponent,
    TagComponent,
    DialogComponent
  ],
  exports: [
    ButtonComponent,
    TagComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule {
}
