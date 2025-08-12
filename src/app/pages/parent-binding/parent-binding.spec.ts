import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBinding } from './parent-binding';

describe('ParentBinding', () => {
  let component: ParentBinding;
  let fixture: ComponentFixture<ParentBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
