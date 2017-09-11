import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CockatailsDetailsComponent } from './cockatails-details/cockatails-details.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CockatailsDetailsComponent,
    CocktailsContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
