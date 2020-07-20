import { Injectable } from '@angular/core';
import { User } from './interface/user';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { from, Observable, Subscriber, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  severTime = firebase.database.ServerValue.TIMESTAMP
  authState: any = null;
  user: User;
  _userGG: any;
  logged = false;
  firebaseauthstate = null;
constructor(
private snackBar: MatSnackBar,
private afAuth: AngularFireAuth,
private router: Router
){
  this.afAuth.authState.subscribe((value)=>{
    this.firebaseauthstate = value;
    this.getUserGG();
  })
}

async getUserGG() {
  await this.afAuth.user.subscribe(usr => {
    console.log(usr);
    if (usr != null) {
      this._userGG = usr;
      this.logged = true;
      this.setUser();
    } else { this.logged = false; }
  });
}

setUser() {
  this.user = {
    uid: this._userGG.uid,
    name: this._userGG.displayName,
    email: this._userGG.email,
    avatarURL: this._userGG.photoURL,
  }
}

async addNewUser(user_new: User, pass) {
  console.log(user_new)
  let tempUser = this._userGG;
  let provider = await this.afAuth.createUserWithEmailAndPassword(user_new.email, String(pass)).then((res) => {
    res.user.updateProfile({ displayName: user_new.name }).then(() => {
      this.loginwithGoogle().then(() => {
        this.openSnackBar("Successful Add User");
      }).catch(() => {
        this.router.navigate([''])
      });
      
    })


  }).catch(() => {
    this.openSnackBar("Something Wrong :(");
  });
}
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
    this.onLineNotificatiopn(result.user.email);
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


userStatusRef :firebase.database.Reference;

onLineNotificatiopn(emailzzz:string){
    let time = new Date().getMilliseconds();
    let data = {
      "email": emailzzz,
      "time":this.severTime
    }
    firebase.database().ref("status/").once("value",(datasnp)=>{
      let flag = false;
      
      datasnp.forEach((data)=>{
        let myEmail = data.val()
        if (myEmail["email"] == emailzzz) {
          // UPDATE
          flag = true;
          this.userStatusRef = data.ref;
        }
        
      })

      if (flag) {
        
      }else{
        firebase.database().ref("status/").push().then((ref)=>{
          console.log("UPDATE STATUS")
          ref.set(data);
          this.userStatusRef = ref;
       })
      }

      this.keepMyStatus();
      this.listenForStatus(emailzzz);

      




    })


}

userOnLineList = new BehaviorSubject([]);

listenForStatus(myEmail:string){
  firebase.database().ref("status/").on("value",(ref)=>{
    let temperUserList = [];
    // this.userOnLineList = [];
    // Caculate user onLinbeStust
    ref.forEach((userTime)=>{
      let userData = userTime.val();
      if (userData['email'] != myEmail) {
        let currentTime = new Date(parseInt(userData['time']))
        let userStatus = this.diff_secs(currentTime)
        let mergeObject = Object.assign({}, userData, {
          "onTime":userStatus
        });
        temperUserList.push(mergeObject)
      }
    })

    ///
    this.userOnLineList.next(temperUserList)
    console.log(temperUserList);
    temperUserList = [];
  })
}


keepMyStatus(){
  setInterval(()=>{
    let time = new Date().getMilliseconds();
    console.log("UPDATE PL:EASSEEEESSEESS")
    console.log(time)
    this.userStatusRef.update({"time":this.severTime}).then((
      value
    )=>{
      console.log(value)
    })
  },5000)
}

diff_secs(dt1:Date) {
  
  let todayTime = new Date();
  var diff = (todayTime.getTime() - dt1.getTime()) / 1000;
  // diff /= 60;
  return Math.abs(Math.round(diff));
}




// loginWithEmail(email: string, password: string)
//   {
//     return this.afAuth.signInWithEmailAndPassword(email, password)
//       .then((user) => {
//         this.authState = user
//       })
//       .catch(error => {
//         console.log(error)
//         throw error
//       });
//   }
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

signOut() {
  this.afAuth.signOut().then(() => {
    this.firebaseauthstate == null;
    this.user = null;
    this._userGG = null;
    this.router.navigate(["/"]);
  });
}

openSnackBar(mess) {
  this.snackBar.open(mess, "OK", {
    duration: 4000,
  });
}
}


