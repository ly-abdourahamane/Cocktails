import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../../shared/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';
import {Ingredient} from '../../shared/ingredient.model';
import {PanierService} from '../../shared/services/panier.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cockatails-details',
  templateUrl: './cockatails-details.component.html',
  styleUrls: ['./cockatails-details.component.css']
})
export class CockatailsDetailsComponent implements OnInit {

  cocktail: Cocktail;
  public index: number;

  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.index = params.index;
        this.cocktail = this.cocktailService.getCocktail(params.index);
      } else {
        this.index = 0;
        this.cocktail = this.cocktailService.getCocktail(0);
      }
    });
  }

getUrl2() {
  return `/cocktails/${this.index}/edit`;
}
  // oubien

  getUrl() {
    return ['/cocktails', this.index, 'edit'];
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }
}
