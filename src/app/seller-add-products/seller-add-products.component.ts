import { Component } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.scss']
})
export class SellerAddProductsComponent {
  constructor(private product: ProductService) { }
  addProductMessage: string | undefined;
  addProduct(data: Product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result)
      if (result) {
        this.addProductMessage = "Product Added Successfully"
      }
      setTimeout(() => (this.addProductMessage = undefined), 3000)
    });
  }
}
