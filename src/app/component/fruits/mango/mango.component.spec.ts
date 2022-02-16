import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoComponent } from './mango.component';

describe('MangoComponent', () => {
  let component: MangoComponent;
  let fixture: ComponentFixture<MangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
