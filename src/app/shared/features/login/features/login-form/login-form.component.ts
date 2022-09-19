import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('LOGIN Form init');
  }

  onSubmit(event: any) {
    console.log('Form submited and data emited: ', event)
  }

}
