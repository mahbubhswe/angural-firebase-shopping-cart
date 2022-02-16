import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShippingAddressComponent } from './customer-shipping-address.component';

describe('CustomerShippingAddressComponent', () => {
  let component: CustomerShippingAddressComponent;
  let fixture: ComponentFixture<CustomerShippingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerShippingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
