import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions,
    // Headers
     } from "@angular/http"
// import { Inject } from '@angular/core';
// import { Storage } from '@ionic/storage';

@Injectable()
export class Global {
    //Esta variable se debe borrar cuando se compila para ejecutar directo en el telefono ya que hay un proxy definido en ionic.config.json
    public  baseurl:string = "";
    // public  baseurl:string = "https://recsolutions.tech";
}

class Usuario {

     AccesoSimultaneo:boolean=false;  
     AccessFailedCount:number=0; 
     Activo:boolean=false; 
     Email:string=""; 
     Empresa:string=""; 
     EnteradoUltimosCambios:boolean=false; 
     FechaAccesoUTC:Date=null; 
     FechaAltaUTC:Date=null; 
     FiltroViajesMonitoreo:string=""; 
     Foto:string=""; 
     Grupos:number[]=[]; 
     Id:string=""; 
     IdTimeZone:number=0; 
     IdUsuario:number=0; 
     LockoutEnabled:boolean=false; 
     LockoutEndDateUtc:Date=null; 
     LogoEmpresa:string=""; 
     Nextel:string=""; 
     Nombre:string=""; 
     Operaciones:number[]=[]; 
     PaginaInicial:string=""; 
     PermitirLogeoExterno:boolean=false; 
     PermitirRepartirCarga:boolean=false; 
     Radio:string=""; 
     Skype:string=""; 
     Sonidos:boolean=false; 
     Syrus_Pass:string=""; 
     Syrus_User:string=""; 
     Telefono:string=""; 
     UserName:string=""; 
     VerDemo:boolean=false; 

    //  constructor(){
    //     this.AccessFailedCount = false;
    //  }

}

@Injectable()
export class Aplicacion {

    usuario:Usuario;

    constructor(private http:Http) {
        this.usuario = new Usuario();
    }

    CargaUsuario(IdUsuario){
        let  baseurl:string = "";
        let params: URLSearchParams = new URLSearchParams();
        params.set('IdUsuario', '1');

        let options = new RequestOptions({ search: params });

        return this.http.get(baseurl + 'api/SeguridadApi/Usuario_Carga', options).map(res => res.json());
    }
}

@Injectable()
export class Permisos {

    constructor() {
    }

}

@Injectable()
export class Operaciones {

    constructor() {
    }

}