import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  ref = firebase.database().ref('users/');
  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router,private toastr: ToastrService, private formBuilder: FormBuilder
) { }

  ngOnInit(): void {
    if (localStorage.getItem('email')) {
      this.router.navigate(['/roomlist']);
    }
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required]
    });
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
      this.authservice.login(this.email, this.password)
        .then((credentail) => {
          this.onFormSubmit_V2(credentail.user.email);
          this.toastr.success('Login sucessfully !!!','Congratulation!');

        }).catch(_error => {
          this.error = _error
          this.toastr.error("Password Or Email incorect !!!")
          this.router.navigate([''])
        })
    }
  }
  

  validateForm(email, password)
  {
    if(email.lenght === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }


  onFormSubmit_V2(email :string) {
    let data = {
      "email":email
    }
    this.ref.orderByChild('email').equalTo(email).once('value', snapshot => {
      if (snapshot.exists()) {
        // localStorage.setItem('nickname', login.nickname);
        // this.router.navigate(['/roomlist']);
        console.log("@#!!#!@#@!#@!#@!#!");
        this.router.navigate(['/main'])
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(data);
        // localStorage.setItem('nickname', login.nickname);
        // this.router.navigate(['/roomlist']);
        this.router.navigate(['/main'])
      }
    });
  }

  onFormSubmit(form: any) {
    const login = form;
    this.ref.orderByChild('email').equalTo(login.email).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('email', login.email);
        this.router.navigate(['/roomlist']);
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(login);
        localStorage.setItem('email', login.email);
        this.router.navigate(['/roomlist']);
      }
    });
  }

}
