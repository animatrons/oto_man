import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../data/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  rememberMe = false;
  user: User = {email: '', password: ''};

  @Output() sumbit = new EventEmitter<User>();
  constructor() { }

  onSubmit() {
    this.sumbit.emit(this.user);
  }

}
