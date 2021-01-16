import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankjpComponent } from './bankjp.component';

describe('BankjpComponent', () => {
  let component: BankjpComponent;
  let fixture: ComponentFixture<BankjpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankjpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankjpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
