import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  constructor(private authSVC: AngularFireAuth,private router: Router)
  {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authSVC.authState.pipe(map(user =>{
      if (!user) {
        this.router.navigate([''])
        return false
      }else{
        return true
      }
    }))
  }

}
