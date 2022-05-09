import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsidenavbarComponent } from './rightsidenavbar.component';

describe('RightsidenavbarComponent', () => {
  let component: RightsidenavbarComponent;
  let fixture: ComponentFixture<RightsidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsidenavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
