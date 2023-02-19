import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MoleculesModule } from "@molecules/molecules.module";
import { CharacterDetailComponent } from "./components/character-detail/character-detail.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { AtomsModule } from "@atoms/atoms.module";
import { OrganismsModule } from "@organisms/organisms.module";
import { ImplementsModule } from "@implements/implements.module";
import { SelectedCharacterStoreService } from "./services/selected-character-store.service";
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterDetailComponent,
    SearchResultComponent,
    CharacterProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MoleculesModule,
    AtomsModule,
    OrganismsModule,
    ImplementsModule
  ],
  providers: [
    SelectedCharacterStoreService
  ]
})
export class HomeModule { }
