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
import { HttpClientModule } from '@angular/common/http';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';
import { AddroomComponent } from './addroom/addroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddnickComponent } from './addnick/addnick.component';
// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    SliedbarComponent,
    RegisterComponent,
    ChatroomComponent,
    AddroomComponent,
    RoomlistComponent,
    AddnickComponent,
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
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  providers: [CustomerService, AuthService,AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
