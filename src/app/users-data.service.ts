import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class UsersDataService {

  constructor(private _http : HttpClient,
  private _router : Router) { }

  createNewUser(newUser) {
    console.log(newUser)
    console.log("in createNewUser in service");
    this._http.get('http://localhost:2000/getuser').subscribe(
      function(data) {
        console.log(data);
      }
    )
    this._http.post('http://localhost:2000/register', newUser).subscribe(
      (data : any) =>{
        console.log(data);
        if(data.success) {
          this._router.navigate(['/signin']);
        } else {
          alert('Cannot register user. try again later!')
        }
      }
    );
  }
}
