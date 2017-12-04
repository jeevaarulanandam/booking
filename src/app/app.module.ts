import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import 'hammerjs';
@NgModule({
  imports: [BrowserModule, FormsModule ],
  declarations: [AppComponent, HeaderComponent ],
  bootstrap: [AppComponent, HeaderComponent ]
})
export class AppModule { }
