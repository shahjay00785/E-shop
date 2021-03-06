import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, filter, switchMap, subscribeOn } from 'rxjs/operators';
import 'rxjs/Rx';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      map(user => {
        if (user) return true;
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      })
    );
  }

  /*
   canActivate(){
     this.auth.user$.pipe(
       map(user=>{
         return  this.userService.get(user.uid);
       })
     ).subscribe(x=>console.log(x));
   }
*/
}
