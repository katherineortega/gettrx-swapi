import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiImplementService } from "@implements/swapi/swapi-implement.service";
import { ClientsModule } from "@clients/clients.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientsModule
  ],
  providers: [
    SwapiImplementService
  ]

})
export class ImplementsModule { }
