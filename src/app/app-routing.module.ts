import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from '././register/register.component';
import { RegisterNodeJSComponent } from './register-node-js/register-node-js.component'
import { from } from 'rxjs';

const routes: Routes =  [
  { path: 'main', component: MainComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'customer', component: CustomerListComponent ,canActivate:[AuthGuard] },
  { path: 'newcustomer', component: CustomerComponent,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent,canActivate:[AuthGuard] },
  { path: 'registerNodeJS', component: RegisterNodeJSComponent,canActivate:[AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
