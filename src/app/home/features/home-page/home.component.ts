/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Home sweet home');
  }

  openLoginDialog() {
    this.router.navigate(['login', 'modal'], {relativeTo: this.route})
  }

  goToMenu() {
    this.router.navigate(['/menu/customers']);
  }

}
