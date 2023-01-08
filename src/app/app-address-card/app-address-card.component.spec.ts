import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddressCardComponent } from './app-address-card.component';

describe('AppAddressCardComponent', () => {
  let component: AppAddressCardComponent;
  let fixture: ComponentFixture<AppAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
