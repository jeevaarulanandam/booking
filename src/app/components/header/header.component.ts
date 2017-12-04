import { Component, NgModule} from '@angular/core';



@Component({
    selector: 'site-header',
    templateUrl: './header.template.html',
    
})
export class HeaderComponent { 

name = 'Booking';
  firstname ="Jeeva";
  color = "red";
  size = "100";
  someExpression ="Testing the angular2 document" ;

  


    constructor() {

    } 

}