import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../shared/cocktail.model';
import {CocktailService} from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cockatails-details',
  templateUrl: './cockatails-details.component.html',
  styleUrls: ['./cockatails-details.component.css']
})
export class CockatailsDetailsComponent implements OnInit {

  cocktail: Cocktail;

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
      this.cocktail = cocktail;
    });
  }
}
