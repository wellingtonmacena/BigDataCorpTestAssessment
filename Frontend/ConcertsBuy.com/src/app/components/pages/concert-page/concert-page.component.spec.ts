import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertPageComponent } from './concert-page.component';

describe('ConcertPageComponent', () => {
  let component: ConcertPageComponent;
  let fixture: ComponentFixture<ConcertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
