import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import {TableModule} from 'primeng/table';

import { NumericTextboxModule } from 'ngx-numeric-textbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    BrowserAnimationsModule,
    NumericTextboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
