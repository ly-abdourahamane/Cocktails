import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {Subscription} from 'rxjs/Subscription';
import {PanierService} from '../../shared/services/panier.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private panierService: PanierService) {
  }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe((ingredients: Ingredient[]) =>
      this.ingredients = ingredients);
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
