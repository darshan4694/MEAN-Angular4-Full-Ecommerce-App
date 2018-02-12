import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth/auth.service';
@Injectable()
export class UsersDataService {

  constructor(private _http: HttpClient,
    private _router: Router,
    private _auth: AuthService) { }

  createNewUser(newUser) {
    console.log(newUser)
    console.log("in createNewUser in service");
    this._http.get('http://localhost:2000/getuser').subscribe(
      function (data) {
        console.log(data);
      }
    )
    this._http.post('http://localhost:2000/register', newUser).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          this._router.navigate(['/signin']);
        } else {
          alert('Cannot register user. try again later!')
        }
      }
    );
  }

  getUserDetails(){
    return  this._http.get('http://localhost:2000/users/'+this._auth.getLoggedInUser(), {
      headers : new HttpHeaders().set('authorization', this._auth.fetchToken())
    });
    // this._http.get('http://localhost:2000/users/'+this._auth.getLoggedInUser()).subscribe(
    // (data : any) => {
    //   if(data.success){
    //     console.log(data.data);
    //     return data.data;
    //   }
    // }
    // );
  }
}