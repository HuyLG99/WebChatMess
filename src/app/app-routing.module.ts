import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from '././register/register.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddnickComponent } from './addnick/addnick.component';
import { from } from 'rxjs';

const routes: Routes =  [
  { path: 'main', component: MainComponent},
  { path: 'roomlist', component: RoomlistComponent },
  { path: 'addroom', component: AddroomComponent },
  { path: 'addnick', component: AddnickComponent },
  { path: 'chatroom/:roomname', component: ChatroomComponent },
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
