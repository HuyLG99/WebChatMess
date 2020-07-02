import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthService]
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService, public roter: Router) { }

  ngOnInit(): void {
  }


  Logout(){
    this.authService.logout();
    this.roter.navigate(['']);
  }
}
