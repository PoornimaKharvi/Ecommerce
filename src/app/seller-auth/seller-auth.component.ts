import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) { }
  showlogin = false
  authError: string = " "
  ngOnInit() {
    this.seller.reloadSeller()
  }
  signUp(data: SignUp) {
    this.seller.signUpPost(data)
  }
  login(data: Login) {
    this.authError = ""
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => { if (isError) { this.authError = "Incorrect Username and Password" } })
  }
  openLogin() {
    this.showlogin = true
  }
  openSignUp() {
    this.showlogin = false
  }
}
