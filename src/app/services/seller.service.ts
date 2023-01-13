import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  signUpPost(data: SignUp) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('Seller', JSON.stringify(result.body));
      this.router.navigate(["seller-home"]);

    });
  }
  reloadSeller() {
  }
  userLogin(data: Login) {
    console.warn(data)
    this.http.get(`http://localhost:3000/seller?Email=${data.Email}&Password=${data.Password}`, { observe: 'response' }).
      subscribe((result: any) => {
        console.warn(result)
        if (result && result.body && result.body.length) {
          console.warn("Logged In")
          localStorage.setItem('Seller', JSON.stringify(result.body));
          this.router.navigate(["seller-home"]);
        } else {
          console.warn("Login Failed");
          this.isLoginError.emit(true);
        }
      })
  }

}
