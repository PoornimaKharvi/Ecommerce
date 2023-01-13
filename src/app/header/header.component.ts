import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private search: ProductService) { }
  menuType: string = 'default'
  sellerName: string = "";
  userName: string = "";
  searchResult: undefined | Product[]
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('Seller') && val.url.includes('seller')) {
          if (localStorage.getItem('Seller')) {
            let sellerStore = localStorage.getItem('Seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.Username;
            this.menuType = "seller"
          }
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          console.warn(userStore)
          let userData = userStore && JSON.parse(userStore)[0];
          console.warn(userData.Username)
          // this.userName = userData.Username;
          this.menuType = "User";
        }
        else {
          console.warn("Outside seller area")
          this.menuType = "default"
        }
      }
    })
  }
  logout() {
    localStorage.removeItem('Seller');
    this.router.navigate(['/']);
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;

      this.search.searchProduct(element.value).subscribe((result) => {

        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result
      })
    }
  }
  hideSearch() {
    this.searchResult = undefined
  }
  submitSearch(val: string) {
    console.warn(val)
    this.router.navigate([`search/${val}`])
  }
  redirectTo(id: number) {
    this.router.navigate(['/details/' + id]);
  }
}

