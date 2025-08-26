import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectItem } from './object-item';

describe('ObjectItem', () => {
  let component: ObjectItem;
  let fixture: ComponentFixture<ObjectItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
