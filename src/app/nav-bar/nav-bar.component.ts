import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn : Boolean;
  constructor(private _auth : AuthService) { }

  ngOnInit() {
    if(this._auth.checkLogin()){
      this.isLoggedIn = true;
    } else { 
      this.isLoggedIn = false;
    }
    this._auth.isLoggedInSub.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    })

  }

  signoutFn() {
    this.isLoggedIn = false;
    this._auth.signout();
  }

}
