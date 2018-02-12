import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../users-data.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  userData : any = {};
  userKeys : any[] = [];
  constructor(private _usd : UsersDataService) { }

  ngOnInit() {
    this._usd.getUserDetails().subscribe(
      (data : any) => {
        if(data.success){
          this.userData = data.data;
          console.log(this.userData);
          this.userKeys = Object.keys(this.userData);
        }
      }
    );
    
  }

}
