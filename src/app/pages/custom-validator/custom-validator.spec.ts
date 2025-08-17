import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidator } from './custom-validator';

describe('CustomValidator', () => {
  let component: CustomValidator;
  let fixture: ComponentFixture<CustomValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
