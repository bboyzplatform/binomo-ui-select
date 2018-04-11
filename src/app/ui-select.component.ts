import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SelectList } from './selectlist';
import { MobxAngularModule, observable, computed } from 'mobx-angular';

@Component({
  selector: 'ui-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css']
})

export class UiSelectComponent {
  @observable
    title = 'ui component initial';
  @observable
    selectedOption: SelectList;
  @observable
    optValues = [];

  ngOnInit() {
    let count = 0;
    setInterval(() => {
      count++;
      this.title = `Select component works without zone.js. Prooooof!. count:  + ${count} ticks left`;
    }, 1000);

    // default value of the selected option
    this.selectedOption = new SelectList(1, 'somVal1');
    Promise.resolve(null).then(() => {
      this.optValues = [
        new SelectList(1, 'somVal1'),
        new SelectList(2, 'somVal2'),
        new SelectList(3, 'somVal3')
      ];
    });
  }
  onSelect(event) {
    this.selectedOption = null;
    for (let i = 0; i < this.optValues.length; i++) {
      if (this.optValues[i].text === event.target.value) {
        this.selectedOption = this.optValues[i];
      }
    }
    console.log(this.selectedOption);
    console.log(this);
  }
}
