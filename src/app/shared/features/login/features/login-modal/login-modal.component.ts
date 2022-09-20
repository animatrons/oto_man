import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../data/User';

@Component({
  template: `
    <h1 mat-dialog-title>Identify yourself</h1>
    <div mat-dialog-content>
      <div class="">
        <div>
          <app-login (sumbit)="onSubmit($event)" ></app-login>
        </div>
      </div>
    </div>
    <div mat-dialog-actions class="cancel-btn">
      <button mat-stroked-button color="warn" mat-dialog-close>Cancel</button>
    </div>
  `,
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalContentComponent {
  constructor() {}
  onSubmit(submitEvent: any) {
    console.log('from login modal Form submited and data emited: ', submitEvent);
  }
}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('LOGIN modal init');
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginModalContentComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route })
    })
  }

}
