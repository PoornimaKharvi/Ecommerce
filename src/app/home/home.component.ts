import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private product: ProductService) { }
  popularProduct: undefined | Product[]
  trendyProduct: undefined | Product[]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit() {
    this.product.popularProducts().subscribe((data) => {
      console.warn(data);
      this.popularProduct = data
    })
    this.product.trendyProduct().subscribe((data) => {
      this.trendyProduct = data
    })
  }

}
