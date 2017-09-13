import {RouterModule, Routes} from '@angular/router';
import {PanierComponent} from './panier/panier.component';
import {CocktailsContainerComponent} from './cocktails-container/cocktails-container.component';
import {NgModule} from '@angular/core';
import {CockatailsDetailsComponent} from './cockatails-details/cockatails-details.component';
import {MenuComponent} from './menu/menu.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'panier', component: PanierComponent},
  {path: 'cocktails', component: CocktailsContainerComponent, children: [
    {path: ':index', component: CockatailsDetailsComponent}
  ]},

  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

