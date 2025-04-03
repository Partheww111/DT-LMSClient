import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingEdgeComponent } from './cutting-edge.component';

describe('CuttingEdgeComponent', () => {
  let component: CuttingEdgeComponent;
  let fixture: ComponentFixture<CuttingEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuttingEdgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuttingEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
