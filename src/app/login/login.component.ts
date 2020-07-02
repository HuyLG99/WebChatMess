import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router,     private toastr: ToastrService
) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
  async loginwithGoogle(){
    await this.authservice.loginwithGoogle();
    this.toastr.success('Login sucessfully !!!','Congratulation!');
    this.router.navigate(['/home']);
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
          this.toastr.success('Login firebase sucessfully !!!','Congratulation!');
         this.router.navigate(['/home'])
        }).catch(_error => {
          this.error = _error
          this.toastr.error("Password Or Email incorect !!!")
          this.router.navigate([''])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
