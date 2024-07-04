import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text4Component } from './text4.component';

describe('Text4Component', () => {
  let component: Text4Component;
  let fixture: ComponentFixture<Text4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Text4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});