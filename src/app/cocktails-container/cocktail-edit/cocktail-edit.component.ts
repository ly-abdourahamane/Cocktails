import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CocktailService} from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  constructor(private fb: FormBuilder, private cocktailService: CocktailService) { }

  createCocktail() {
    this.cocktailService.addCocktail(this.cocktailForm.value);
  }

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: '',
      ingredients: this.fb.array([])
    });
  }

  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name: '',
      quantity: ''
    }));
  }
}
