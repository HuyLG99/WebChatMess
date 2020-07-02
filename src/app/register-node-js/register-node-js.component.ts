import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register-node-js',
  templateUrl: './register-node-js.component.html',
  styleUrls: ['./register-node-js.component.css']
})
export class RegisterNodeJSComponent implements OnInit {
  registered = false;
	submitted = false;
  email: string = '';
  password: string = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
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
  adduser( )
  {
    let body = { 
      email : this.email,
      password : this.password

    }
    this.httpClient.post('http://localhost:8080/createuser',body).subscribe((res)=>{
      console.log (res);
    });

  }
}
