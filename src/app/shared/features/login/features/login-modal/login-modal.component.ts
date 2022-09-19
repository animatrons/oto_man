import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('LOGIN modal init');
  }

  onSubmit(event: any) {
    console.log('from login modal Form submited and data emited: ', event)
  }

}
