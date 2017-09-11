import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CockatailsDetailsComponent } from './cockatails-details/cockatails-details.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {PanierComponent} from './panier/panier.component';
import {IngredientsListComponent} from './panier/ingredients-list/ingredients-list.component';
import {AppRoutingModule} from './app-routing.module';
import {PanierService} from './shared/services/panier.service';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    CocktailsListComponent,
    CockatailsDetailsComponent,
    CocktailsContainerComponent,
    PanierComponent,
    IngredientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
