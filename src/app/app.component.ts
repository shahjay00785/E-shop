import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        console.log(userService.save(user));
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
        alert(console.log(returnUrl));
      }
    });
  }
}
