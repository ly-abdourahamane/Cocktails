import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../shared/cocktail.model';
import {CocktailService} from '../shared/services/cocktail.service';
import {Ingredient} from '../shared/ingredient.model';
import {PanierService} from '../shared/services/panier.service';

@Component({
  selector: 'app-cockatails-details',
  templateUrl: './cockatails-details.component.html',
  styleUrls: ['./cockatails-details.component.css']
})
export class CockatailsDetailsComponent implements OnInit {

  cocktail: Cocktail;

  constructor(private cocktailService: CocktailService, private panierService: PanierService) {
  }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
      this.cocktail = cocktail;
    });
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }
}
