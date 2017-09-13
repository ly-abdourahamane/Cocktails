import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail} from '../../shared/cocktail.model';
import {CocktailService} from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  cocktails: Cocktail[];
  activeCocktail: number;

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }
}
