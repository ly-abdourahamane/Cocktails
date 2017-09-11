import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Ingredient} from '../ingredient.model';

@Injectable()
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() {
  }

  addIngredients(ingredients: Ingredient[]): void {
    const currentValue = this.panier.value;
    if (currentValue) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
}
