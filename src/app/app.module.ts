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
// Toastr module
import { CommonModule } from '@angular/common';
import{ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { RegisterNodeJSComponent } from './register-node-js/register-node-js.component';
import { HttpClientModule } from '@angular/common/http';


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
    SliedbarComponent,
    RegisterComponent,
    RegisterNodeJSComponent
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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    HttpClientModule,
   
  ],
  providers: [CustomerService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
