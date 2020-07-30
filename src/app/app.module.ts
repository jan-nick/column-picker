import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnPickerComponent } from './column-picker/column-picker.component';
import { DatetimeColumnPickerComponent } from './datetime-column-picker/datetime-column-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnPickerComponent,
    DatetimeColumnPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
