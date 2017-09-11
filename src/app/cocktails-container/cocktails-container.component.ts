import {Component, OnInit} from '@angular/core';
import {Cocktail} from '../shared/cocktail.model';
import {CocktailService} from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css'],
  providers: [CocktailService]
})
export class CocktailsContainerComponent implements OnInit {

  cocktails: Cocktail[] = [
    {
      name: 'mojito',
      img: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      desc: 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'
    },
    {
      name: 'test',
      img: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      desc: 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'
    },
    {
      name: 'other',
      img: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg',
      desc: 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.'
    }
  ];

  public cocktail: Cocktail;

  constructor(private cockatilService: CocktailService) {
  }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

  pickCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }
}
