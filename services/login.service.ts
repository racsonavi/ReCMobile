import { Global } from "../services/global.service";
import { Inject } from '@angular/core';
import { Http, URLSearchParams, RequestOptions,
    // Headers
     } from "@angular/http"
import 'rxjs/add/operator/map'

export class LoginService{

    constructor(@Inject(Global) private global:Global, @Inject(Http) private http:Http){
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let body = JSON.stringify(parametrosBody);
        // let options = new RequestOptions({ headers: headers});
    }

    ValidarLogin(username,password){        
        let params: URLSearchParams = new URLSearchParams();
        params.set('UserName', username);
        params.set('Password', password);

        let options = new RequestOptions({ search: params });

        return this.http.get(this.global.baseurl + '/api/SeguridadApi/Login/', options).map(res => res.json());

    }

}