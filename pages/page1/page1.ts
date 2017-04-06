import { Component } from '@angular/core';
// import { Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Aplicacion } from "../../services/global.service";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public aplicacion:Aplicacion) {
    
  }

}
