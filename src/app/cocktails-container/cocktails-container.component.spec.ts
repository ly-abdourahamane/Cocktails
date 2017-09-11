import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsContainerComponent } from './cocktails-container.component';

describe('CocktailsContainerComponent', () => {
  let component: CocktailsContainerComponent;
  let fixture: ComponentFixture<CocktailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
