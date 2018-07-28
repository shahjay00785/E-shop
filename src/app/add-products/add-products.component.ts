import { AddProductService } from './../shared/add-product.service';
import { CategoriesService } from './../shared/categories.service';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  constructor(
    public db: AngularFireDatabase,
    categoriesService: CategoriesService,
    private addproductService: AddProductService,
    private fb: FormBuilder
  ) {
    this.categories = categoriesService.getCategories();
  }

  categoriesRef: AngularFireList<any>;
  categories: Observable<any[]>;

  addProductForm = this.fb.group({
    title: ['', Validators.required],
    price: [''],
    categories: [''],
    imageUrl: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.addProductForm.value);

    this.db.list('products').push(this.addProductForm.value);
    //console.log(this.db.list('products').push(this.addProductForm.value));
  }

  save(product) {
    // console.log(product);

    console.log(product);
  }

  ngOnInit() {}
}
