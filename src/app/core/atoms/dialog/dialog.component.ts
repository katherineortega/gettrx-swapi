import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  public opened: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public open() {
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

}
