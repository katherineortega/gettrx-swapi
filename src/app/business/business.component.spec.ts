import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessComponent } from './business.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let fixture: ComponentFixture<BusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
