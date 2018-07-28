import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesRef: AngularFireList<any>;
  categories: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    this.categoriesRef = this.db.list('categories', categoriesRef =>
      categoriesRef.orderByChild('name')
    );
    return (this.categories = this.categoriesRef.valueChanges());
  }
}
