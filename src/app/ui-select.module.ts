import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UiSelectComponent } from './ui-select.component';


@NgModule({
  declarations: [
    UiSelectComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [UiSelectComponent]
})
export class UiSelectModule { }
