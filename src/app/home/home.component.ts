import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.itemsRef = db.list('categories');
    this.items = this.itemsRef.valueChanges();
    this.items.subscribe(res => console.log(res));
  }
  ngOnInit() {}
}
