import { AngularFireAuth, } from '@angular/fire/auth';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInfo;
  constructor(
    public auth: AngularFireAuth,
  ) {  }

  ngOnInit(): void {
    this.auth.currentUser.then(user=>{
      this.userInfo = user;
    })
  }

}
