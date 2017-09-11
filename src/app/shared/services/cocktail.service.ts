import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Cocktail} from '../cocktail.model';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([

  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails[0]);

  constructor() {
  }

}
