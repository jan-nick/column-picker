import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeColumnPickerComponent } from './datetime-column-picker.component';

describe('DatetimeColumnPickerComponent', () => {
  let component: DatetimeColumnPickerComponent;
  let fixture: ComponentFixture<DatetimeColumnPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeColumnPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeColumnPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
