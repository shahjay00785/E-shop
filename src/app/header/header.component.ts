import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => console.log((this.user = user)));
  }

  ngOnInit() {}

  logout() {
    this.afAuth.auth.signOut();
  }
}
