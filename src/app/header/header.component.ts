import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
//import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //user: firebase.User;
  //user: Observable<firebase.User>;
  //user$: Observable<firebase.User>;

  appUser: AppUser;

  constructor(public auth: AuthService /*AngularFireAuth*/) {
    //  afAuth.authState.subscribe(user => console.log((this.user = user)));
    //this.user$ = this.afAuth.authState;
    //    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}
