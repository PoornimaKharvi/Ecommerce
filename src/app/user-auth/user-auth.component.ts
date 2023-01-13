import { Component } from '@angular/core';
import { SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  constructor(private user: UserService) { }
  userSignup(val: SignUp) {
    this.user.userSignUp(val)
  }
}
