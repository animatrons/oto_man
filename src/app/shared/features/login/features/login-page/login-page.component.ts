import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    console.log('LOGIN page init');
  }

  onSubmit(event: any) {
    console.log('from login page Form submited and data emited: ', event)
  }

}
