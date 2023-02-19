import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from "@atoms/dialog/dialog.component";

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.sass']
})
export class CharacterProfileComponent implements OnInit {

  @ViewChild(DialogComponent, {static: false}) dialogComponent: DialogComponent | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  viewEvent() {
    this.dialogComponent?.open();
  }

}
