import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MoleculesModule } from "@molecules/molecules.module";
import { CharacterPreviewComponent } from "./components/character-preview/character-preview.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import {AtomsModule} from "@atoms/atoms.module";
import {OrganismsModule} from "@organisms/organisms.module";


@NgModule({
  declarations: [
    HomeComponent,
    CharacterPreviewComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MoleculesModule,
    AtomsModule,
    OrganismsModule,
  ]
})
export class HomeModule { }
