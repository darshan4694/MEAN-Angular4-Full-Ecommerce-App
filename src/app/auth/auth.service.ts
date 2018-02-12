import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  isLoggedInSub = new Subject<any>();
  constructor(private _http: HttpClient,
    private _router: Router,
    private _cookie: CookieService) { }

  authenticate(credentials) {
    console.log(credentials);
    this._http.post('http://localhost:2000/signin', credentials).subscribe(
      (data: any) => {
        // console.log("")
        console.log(data);
        if (data.success) {
          this._cookie.set("loggedIn", data.success);
          this._cookie.set("loggedInUser", data.username);
          this._cookie.set("m_token", data.token);
          this.isLoggedInSub.next(data.success);
          this._router.navigate(['/myaccount']);
        } else {
          alert(data.msg);
        }
      }
    );
  }

  checkLogin() {
    return this._cookie.get('loggedIn');
  }

  signout() {
    this._cookie.delete('loggedIn');
  }

  getLoggedInUser() {
    return this._cookie.get('loggedInUser');
  }

  fetchToken() {
    return this._cookie.get('m_token');
  }
}
