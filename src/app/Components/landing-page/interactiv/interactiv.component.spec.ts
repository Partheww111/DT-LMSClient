import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivComponent } from './interactiv.component';

describe('InteractivComponent', () => {
  let component: InteractivComponent;
  let fixture: ComponentFixture<InteractivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
