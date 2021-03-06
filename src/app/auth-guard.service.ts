import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}

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
}
