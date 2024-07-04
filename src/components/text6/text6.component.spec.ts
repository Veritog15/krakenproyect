import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text6Component } from './text6.component';

describe('Text6Component', () => {
  let component: Text6Component;
  let fixture: ComponentFixture<Text6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Text6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});