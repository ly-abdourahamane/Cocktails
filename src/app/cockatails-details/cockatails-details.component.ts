import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from '../shared/cocktail.model';

@Component({
  selector: 'app-cockatails-details',
  templateUrl: './cockatails-details.component.html',
  styleUrls: ['./cockatails-details.component.css']
})
export class CockatailsDetailsComponent implements OnInit {

  @Input() cocktail: Cocktail;
  constructor() {
  }

  ngOnInit() {

  }
}
