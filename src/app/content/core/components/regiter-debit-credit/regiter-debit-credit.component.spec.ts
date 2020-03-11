import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterDebitCreditComponent } from './regiter-debit-credit.component';

describe('RegiterDebitCreditComponent', () => {
  let component: RegiterDebitCreditComponent;
  let fixture: ComponentFixture<RegiterDebitCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiterDebitCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiterDebitCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
