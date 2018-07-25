import { AuthService } from './../auth.service';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AuthService /*AngularFireAuth*/) {}

  ngOnInit() {}

  login() {
    //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.afAuth.login();
  }

  logout() {}
}
