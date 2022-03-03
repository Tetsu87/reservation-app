import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

     products: any

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data)=> { 
        this.products = data
    },
      (err)=> {console.log('got value ' + err); }
    )

  }
}
