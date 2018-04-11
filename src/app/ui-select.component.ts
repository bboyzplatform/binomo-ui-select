import { Component, Input, Output } from '@angular/core';

import { SelectList } from './selectlist';


@Component({
  selector: 'ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css']
})

export class UiSelectComponent {
  title = 'ui select';
  
  selectedOption: SelectList = new SelectList(1, 'somVal1');
  optValues = [
     new SelectList(1, 'somVal1' ),
     new SelectList(2, 'somVal2' ),
     new SelectList(3, 'somVal3' ),
  ];
  onSelect(event) { 
       console.log(event)
       this.selectedOption = null;
        for (let i = 0; i < this.optValues.length; i++)
        {
          if (this.optValues[i].text == event.target.value) {
            this.selectedOption = this.optValues[i];
          }
        }
        console.log(this.selectedOption);
        console.log(this)
    }
}