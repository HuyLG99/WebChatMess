import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Itemadd { id: string; name: string; }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent  implements OnInit{
//   title = 'AngularProject';
//   constructor (){}

//   ngOnInit()
//   {
//     new createPiechart();
//   }
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  private itemsCollection: AngularFirestoreCollection<Itemadd>;
  items: Observable<Itemadd[]>;
  title = 'Register User';
  description = '';
  constructor(private readonly afs: AngularFirestore)
  {
  this.itemsCollection = afs.collection<Itemadd>('Items');
  //this.items = this.itemsCollection.valueChanges();
  // .valueChanges() is simple. It just returns the
  // JSON data without metadata. If you need the
  // doc.id() in the value you must persist it your self
  // or use .snapshotChanges() instead. Only using for versions 7 and earlier
  this.items = this.itemsCollection.valueChanges();
  }
}
