import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertSectionComponent } from './concert-section.component';

describe('ConcertSectionComponent', () => {
  let component: ConcertSectionComponent;
  let fixture: ComponentFixture<ConcertSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
