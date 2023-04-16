import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarConnectionComponent } from './avatar-connection.component';

describe('AvatarConnectionComponent', () => {
  let component: AvatarConnectionComponent;
  let fixture: ComponentFixture<AvatarConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarConnectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
