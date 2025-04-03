import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurToolComponent } from './our-tool.component';

describe('OurToolComponent', () => {
  let component: OurToolComponent;
  let fixture: ComponentFixture<OurToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
