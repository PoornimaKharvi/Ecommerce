import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private product: ProductService) { }
  productData: undefined | Product
  productUpdateMessage: undefined | string
  ngOnInit(): void {
    let productID = this.route.snapshot.paramMap.get('id');
    console.warn(productID)
    productID && this.product.getProduct(productID).subscribe((result) => {
      console.warn(result);
      this.productData = result
    })
  }

  addProduct(data: Product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productUpdateMessage = "Product Updated Successfully"
      }
    })
    setTimeout(() => (this.productUpdateMessage = undefined), 3000)
  }
}
