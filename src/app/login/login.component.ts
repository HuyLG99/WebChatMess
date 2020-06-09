import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;


  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }
  
  ngOnInit(): void {
  }

  loginEmailPass(){
    this.authService.siginWithEmailAndPass(this.email, this.password);
  }
  tryGoogleLogin(){
    this.authService.signinGmail()
    .then(res=>{
       // this.router.navigate(["/[home]"]);
      location.href='/home'
      }).catch(err=>{
      console.log(err); 
      })
      }
  async loginwithGoogle(){
    await this.authService.loginwithGoogle();
    this.router.navigate(['/home']);
  }

}
