import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CocktailService} from '../../shared/services/cocktail.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  cocktail: any;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private cocktailService: CocktailService) {
  }

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

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.cocktailService.getCocktail(params.index);
        this.initForm(this.cocktail);
      } else {
        this.initForm();
      }
    });
  }

  initForm(cocktail = {name: '', img: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: cocktail.desc,
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({
        name: ingredient.name, quantity: ingredient.quantity
      })))
    });
  }

  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name: '',
      quantity: ''
    }));
  }
}
