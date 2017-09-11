import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockatailsDetailsComponent } from './cockatails-details.component';

describe('CockatailsDetailsComponent', () => {
  let component: CockatailsDetailsComponent;
  let fixture: ComponentFixture<CockatailsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockatailsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockatailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
