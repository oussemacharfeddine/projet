import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceSellerComponent } from './espace-seller.component';

describe('EspaceSellerComponent', () => {
  let component: EspaceSellerComponent;
  let fixture: ComponentFixture<EspaceSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
