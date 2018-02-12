import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor{

  constructor(private _auth : AuthService) { }

  intercept(req, next) {
    var authRequest = req. clone({
      headers : new HttpHeaders().set('authorization', this._auth.fetchToken())
    });

    return next.handle(req);
  }
}
