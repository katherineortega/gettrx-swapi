import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { TagComponent } from './tag/tag.component';
import { DialogComponent } from "@atoms/dialog/dialog.component";
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TagComponent,
    DialogComponent,
    SpinnerComponent
  ],
  exports: [
    ButtonComponent,
    TagComponent,
    DialogComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomsModule {
}
