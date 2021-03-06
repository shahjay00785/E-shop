import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userList: AngularFireList<any>;
  //itemsRef: AngularFireList<AppUser>;

  categoriesList: AngularFireList<any>;

  getData(id: any) {
    let uid: any = id;
    this.categoriesList = this.db.list('categories');
    return this.categoriesList;
  }

  constructor(private db: AngularFireDatabase) {
    // this.userList = this.db.list('users');
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  //get(uid: String, userId: firebase.User) {}

  /*
  get(uid: string): AngularFireList<AppUser> { 
    return this.db.object('/users/' + uid);
  }
  */
}
