import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addProduct(data: Product) {
    return this.http.post("http://localhost:3000/Products", data)
    // console.warn("inside product service")
  }
  productList() {
    return this.http.get<Product[]>("http://localhost:3000/Products")
  }
  productDelte(id: number) {
    return this.http.delete<Product>(`http://localhost:3000/Products/${id}`)
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/Products/${id}`)
  }
  updateProduct(product: Product) {
    return this.http.put(`http://localhost:3000/Products/${product.id}`, product)
  }
  popularProducts() {
    return this.http.get<Product[]>("http://localhost:3000/Products?_limit=4")
  }
  trendyProduct() {
    return this.http.get<Product[]>("http://localhost:3000/Products?_limit=7")
  }
  searchProduct(query: string) {
    return this.http.get<Product[]>(`http://localhost:3000/Products?q=${query}`)
  }
}
