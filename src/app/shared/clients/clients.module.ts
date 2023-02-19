import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from "@clients/http/http-client.service";
import { SwapiClientService } from "@clients/swapi/swapi-client.service";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    SwapiClientService
  ]
})
export class ClientsModule { }
