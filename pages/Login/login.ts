import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Inject } from '@angular/core';
import { Input } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Aplicacion } from "../../services/global.service";

import { Page1 } from '../page1/page1'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class Login {
  @Input () username: string="olopez";
  @Input () password: string="GCC0MERCE321";
  @Input () error: string;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginservice:LoginService,
              @Inject(Aplicacion) public aplicacion:Aplicacion
              ) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.error = "";
    this.loginservice.ValidarLogin(this.username,this.password).subscribe(
            data => {
              if (data){
                // this.usuario.UserName=this.username;
                this.aplicacion.CargaUsuario(this.username).subscribe(
                        data => {
                          if (data){
                            this.aplicacion.usuario = data[0];
                            this.navCtrl.push(Page1);
                          }
                          else {
                            this.error = "Ocurrio un error al Cargar los datos del usuario"
                          }
                        },
                        err => {
                          this.error = err;
                        }
                    );                
                
              }
              else {
                this.error = "Usuario o Contraseña Incorrectos"
              }
            },
            err => {
              this.error = err;
            }
        );


    
  }

}
