import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBinding } from './child-binding';

describe('ChildBinding', () => {
  let component: ChildBinding;
  let fixture: ComponentFixture<ChildBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
