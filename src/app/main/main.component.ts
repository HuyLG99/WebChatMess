import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  loginForm: FormGroup;
  nickname = '';
  ref = firebase.database().ref('users/');
  matcher = new MyErrorStateMatcher();

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  Logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  onFormSubmit(email :string) {
    let data = {
      "email":email
    }
    this.ref.orderByChild('email').equalTo(email).once('value', snapshot => {
      if (snapshot.exists()) {
        // localStorage.setItem('nickname', login.nickname);
        // this.router.navigate(['/roomlist']);
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(data);
        // localStorage.setItem('nickname', login.nickname);
        this.router.navigate(['/roomlist']);
      }
    });
  }
}
