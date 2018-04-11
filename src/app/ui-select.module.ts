import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MobxAngularModule, observable, computed } from 'mobx-angular';
import { UiSelectComponent } from './ui-select.component';


@NgModule({
  declarations: [
    UiSelectComponent
  ],
  imports: [
    BrowserModule, FormsModule, MobxAngularModule
  ],
  providers: [],
  bootstrap: [UiSelectComponent]
})
export class UiSelectModule { }
