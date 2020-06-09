import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CustomerService } from './shared/customer.service';
//firebase
import { AngularFireModule } from '@angular/fire';
// import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { SliedbarComponent } from './sliedbar/sliedbar.component';
// import { AngularFireDatabaseModule } from '@angular/fire/database/public_api';




// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    CustomerListComponent,
    CustomerComponent,
    LoginComponent,
    SliedbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    AngularFireDatabaseModule, //for database
  ],
  providers: [CustomerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
