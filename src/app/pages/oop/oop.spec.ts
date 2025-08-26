import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOP } from './oop';

describe('OOP', () => {
  let component: OOP;
  let fixture: ComponentFixture<OOP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OOP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OOP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
