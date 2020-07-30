import { Component, OnInit, Input } from '@angular/core';

enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Component({
  selector: 'column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss'],
})
export class ColumnPickerComponent implements OnInit {
  @Input() columnData: [] | [][];
  @Input() size: Size = Size.MEDIUM;
  @Input() cssClass: string;

  isMultiColumn = false;

  constructor() {}

  ngOnInit(): void {
    this.checkIfMultiColumn(this.columnData);
  }

  checkIfMultiColumn(columnData: [] | [][]): void {
    for (const el of columnData) {
      if (el.constructor === Array) {
        this.isMultiColumn = true;
      }
    }
  }
}
