import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentajeBarComponent } from './percentaje-bar.component';

describe('PercentajeBarComponent', () => {
  let component: PercentajeBarComponent;
  let fixture: ComponentFixture<PercentajeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentajeBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PercentajeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
