import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonaDeatailComponent } from './pesona-deatail.component';

describe('PesonaDeatailComponent', () => {
  let component: PesonaDeatailComponent;
  let fixture: ComponentFixture<PesonaDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesonaDeatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesonaDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
