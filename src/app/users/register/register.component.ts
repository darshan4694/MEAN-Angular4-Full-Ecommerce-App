import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../users-data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser : any = {};
  constructor(private _userDataSrvc:UsersDataService) { }

  ngOnInit() {
  }

  registerFn() {
    console.log("in registerFn");
    this._userDataSrvc.createNewUser(this.newUser);
  }

}
