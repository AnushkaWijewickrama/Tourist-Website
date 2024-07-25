import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegepComponent } from './packegep.component';

describe('PackegepComponent', () => {
  let component: PackegepComponent;
  let fixture: ComponentFixture<PackegepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackegepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackegepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
