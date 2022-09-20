import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpOptions, IHttpOptions } from './HttpOptions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  get<T>(uri: string, httpOptions?: HttpOptions): Observable<T> {
    const options: IHttpOptions = this.getHttpOptions(httpOptions);
    return this.httpClient.get<T>(this.url + uri, options);
  }

  put<T>(uri: string, httpOptions?: HttpOptions) {
    const options: IHttpOptions = this.getHttpOptions(httpOptions);
    const body = httpOptions?.getBody;
    return this.httpClient.put<T>(this.url + uri, body, options);
  }

  post<T>(uri: string, httpOptions?: HttpOptions) {
    const options: IHttpOptions = this.getHttpOptions(httpOptions);
    const body = httpOptions?.getBody;
    return this.httpClient.post<T>(this.url + uri, body, options);
  }

  delete(uri: string, httpOptions?: HttpOptions) {
    const options: IHttpOptions = this.getHttpOptions(httpOptions);
    return this.httpClient.delete(this.url + uri, options);
  }


  private getHttpOptions(httpOptionsObj?: HttpOptions): IHttpOptions {
    let options: IHttpOptions = {};
    if (httpOptionsObj) {
      const paramsMap = httpOptionsObj.getParams;
      const headersMap = httpOptionsObj.getHeaders;

      let params: any = {};
      paramsMap.forEach((v, k) => {
        params[k] = v;
      });
      let headers = new HttpHeaders();
      headersMap.forEach((v, k) => {
        if (!headers.has(k)) {
          headers.append(k, v);
        } else headers.set(k, v);
      });
      options = { headers: headers, params: params };
    }
    return options;
  }

}
