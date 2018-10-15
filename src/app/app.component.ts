import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import {InputMaskModule} from 'primeng/inputmask';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validaciones';
  
  fecha;
  numero;
  cars = [];
  min = 0;
  max = 999999;
  decimals = 2;
  format = '$ 0,0.000';
  rangeValidation = true;

  ngOnInit() {
    this.cars = [{vin:"valor"}];
  }

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


  addnew() {
    console.log(this.validateAddNew());
    if (this.validateAddNew() === true) {
      this.cars.push({vin:""});
    }    
  }

  validateAddNew(): boolean {
    let res = true
    this.cars.forEach(x => {
      console.log(x);
        if (x.vin === '') {
          res = false;
        }
    });
    return res;
  }

  print() {
    console.log(this.cars);
  }


}
