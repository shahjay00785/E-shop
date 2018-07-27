import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  categoriesRef: AngularFireList<any>;
  categories: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.categoriesRef = db.list('categories');
    this.categories = this.categoriesRef.valueChanges();
    this.categories.subscribe(res => console.log(res));
  }

  ngOnInit() {}
}
