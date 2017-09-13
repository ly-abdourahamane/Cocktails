import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailEditComponent } from './cocktail-edit.component';

describe('CocktailEditComponent', () => {
  let component: CocktailEditComponent;
  let fixture: ComponentFixture<CocktailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
