import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCreditListComponent } from './debit-credit-list.component';

describe('DebitCreditListComponent', () => {
  let component: DebitCreditListComponent;
  let fixture: ComponentFixture<DebitCreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCreditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
