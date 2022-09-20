import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from '../http/http.service';
import { HttpOptions } from '../http/HttpOptions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'user';
  constructor(private httpService: HttpService) { }

  getByCredentials(email: string, password: string) {
    const httpOptions = (new HttpOptions())
      .addParam('email', email)
      .addParam('password', password);
    this.httpService.get(this.uri, httpOptions)
      .pipe(
        tap(users => console.log('Users returned by email and pwd: ', users))
      )
  }

  getById(id: string) {

  }

  getAll(max: number) {

  }

}
