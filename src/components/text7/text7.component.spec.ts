import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text7Component } from './text7.component';

describe('Text7Component', () => {
  let component: Text7Component;
  let fixture: ComponentFixture<Text7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Text7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});