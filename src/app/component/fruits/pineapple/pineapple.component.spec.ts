import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineappleComponent } from './pineapple.component';

describe('PineappleComponent', () => {
  let component: PineappleComponent;
  let fixture: ComponentFixture<PineappleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PineappleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PineappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
