import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  constructor(private product: ProductService) { }
  productlist: undefined | Product[];
  deleteMessage: undefined | string;
  coffeeIcon = faTrash;
  editIcon = faEdit;
  ngOnInit(): void {
    this.List();
  }
  productDelete(id: number) {
    console.warn(id)
    this.product.productDelte(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = "Product is Deleted"
        this.List();
      }
      setTimeout(() => (this.deleteMessage = undefined), 3000)

    });
  }
  List() {
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productlist = result
    })
  }
}
