import { Component } from '@angular/core';
import { isNumber } from 'util';
import {InputMaskModule} from 'primeng/inputmask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validaciones';
  
  fecha;
  numero;

  validateDate(inputObject){
    console.log(inputObject)
    let part = (inputObject.target.value || '').split('/'), 
    newDate = new Date(part[2], --part[1], part[0]);
    
    if (!(part.length == 3 && newDate
     && part[0] == newDate.getDate()
     && part[1] == newDate.getMonth()
     && part[2] == newDate.getFullYear())) {
        inputObject.target.value = '';
        this.fecha = '';
    } else {
      this.fecha = inputObject.target.value;
    }
  }

  validateNumber(inputObject){
    let RE = /^\d*(\.\d{1})?\d{0,1}$/;
    if (!RE.test(inputObject.target.value)) {
        inputObject.target.value = '';
    }    
  }

  save() {
    console.log(this.fecha);
  }
}
