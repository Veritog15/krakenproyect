import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text8Component } from './text8.component';

describe('Text8Component', () => {
  let component: Text8Component;
  let fixture: ComponentFixture<Text8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Text8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});