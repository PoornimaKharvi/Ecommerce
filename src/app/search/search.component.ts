import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute, private search: ProductService) { }
  searchProduct: undefined | Product[]
  ngOnInit(): void {
    let query = this.activateRoute.snapshot.paramMap.get('query')
    query && this.search.searchProduct(query).subscribe((result) => {
      this.searchProduct = result
    }
    )
  }
}
