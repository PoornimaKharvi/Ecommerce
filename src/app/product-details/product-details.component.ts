import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private activateRouter: ActivatedRoute, private productdetails: ProductService) { }
  productData: undefined | Product
  productQuantity: number = 1
  ngOnInit(): void {
    let productID = this.activateRouter.snapshot.paramMap.get(`productid`)
    productID && this.productdetails.getProduct(productID).subscribe((result) => {
      this.productData = result
    })
    console.warn(productID)
  }

  manageQuantity(val: string) {
    if (this.productQuantity < 20 && val === "plus") {
      this.productQuantity = this.productQuantity + 1;
    }

    else if (this.productQuantity > 1 && val === "min") {
      this.productQuantity = this.productQuantity - 1;
    }
  }
}