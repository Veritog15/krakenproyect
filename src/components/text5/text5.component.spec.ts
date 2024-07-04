import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text5Component } from './text5.component';

describe('Text5Component', () => {
  let component: Text5Component;
  let fixture: ComponentFixture<Text5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Text5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});