import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
//
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute,) {
    this.user$ = this.afAuth.authState;
  }

  login() {
    // save the Return Url
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  /*
  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });    
  }
9*/
}
