import {Component, OnInit} from '@angular/core';
import {CocktailService} from '../shared/services/cocktail.service';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css'],
  providers: [CocktailService, FormBuilder]
})
export class CocktailsContainerComponent {


}
