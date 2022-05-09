import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnscksComponent } from './snscks.component';

describe('SnscksComponent', () => {
  let component: SnscksComponent;
  let fixture: ComponentFixture<SnscksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnscksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnscksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
