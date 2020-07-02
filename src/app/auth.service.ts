import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable()
export class AuthService {
  authState: any = null;
constructor(
private afAuth: AngularFireAuth,
private router: Router
){}


async signinGmail(){
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
return await  this.afAuth.signInWithPopup(provider).then(res=>{
console.log("Success Login")
//  this.router.navigate(['home']);
// this.router.navigate(['home']);
})
}

async loginwithGoogle()  {
  console.log("Run");
  let provider = new firebase.auth.GoogleAuthProvider();
  console.log(provider.providerId);
  let user = await this.afAuth.signInWithPopup(provider);
  console.log(user);
  console.log(user.user.displayName);
  // (await this.afAuth.currentUser).photoURL
  
}

async login(email:string,password:string){
	try{
		const result = await this.afAuth.signInWithEmailAndPassword(
			email,password
		);
		return result;
	}
	
	catch(error)
	{
		console.log(error);
	}	
}
//Tương tự viết hàm signin với tài khoản firebase như sau:
siginFirebase(email: string, password: string){
  return new Promise<any>((resolve, reject) => {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
    resolve(res);
    //this.sharingService.isUserLoggedIn.next(true);
    }, err => reject(err))
  })
}


registerWithEmail(email: string, password: string) {
  return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user
    })
    .catch(error => {
      console.log(error)
      throw error
    });
}

loginWithEmail(email: string, password: string)
  {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
 logout(){
  return new Promise<any>((resolve,reject)=>{
    if (this.afAuth.currentUser){
    this.afAuth.signOut();
    resolve("log out");
    }else{
    reject();
    }

  })
}
}


