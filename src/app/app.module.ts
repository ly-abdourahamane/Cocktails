import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CockatailsDetailsComponent } from './cocktails-container/cockatails-details/cockatails-details.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {PanierComponent} from './panier/panier.component';
import {IngredientsListComponent} from './panier/ingredients-list/ingredients-list.component';
import {AppRoutingModule} from './app-routing.module';
import {PanierService} from './shared/services/panier.service';
import { MenuComponent } from './menu/menu.component';


import {TabMenuModule} from 'primeng/primeng';
import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    CocktailsListComponent,
    CockatailsDetailsComponent,
    CocktailsContainerComponent,
    PanierComponent,
    IngredientsListComponent,
    MenuComponent,
    CocktailEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
