import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../users-data.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  credentials : any = {};
  constructor(private _auth : AuthService) { }

  ngOnInit() {
  }

  signinFn() {
    console.log(this.credentials);
    this._auth.authenticate(this.credentials);
  }
}
