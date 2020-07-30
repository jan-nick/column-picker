import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})
export class ColumnPickerComponent implements OnInit {
  @Input() columns: number = 1;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
