import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({selector: 'app-button', template: ''})
class ButtonStubComponent {
}

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ InputSearchComponent, ButtonStubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
