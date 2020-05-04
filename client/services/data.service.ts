import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  private baseURL: string;
  static counter: number = 0;
  private options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  public loading = false;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) this.options.headers['Authorization'] = `Bearer ${token}`
  }

  get(url) {
    this.loading = true;
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.get(url, this.options).subscribe(res => {
          console.log('res', res)
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.loading = false;
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.loading = false;
          DataService.handleError(e);
        });
    });
    return observable;
  }

  post(url, data) {
    this.loading = true;
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.post(url, data, this.options).subscribe(res => {
        console.log('res', res)
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.loading = false;
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.loading = false;
          DataService.handleError(e);
        })
    });
    return observable;
  }

  update(url, data) {
    this.loading = true;
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.put(url, data, this.options).subscribe(res => {
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.loading = false;
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.loading = false;
          DataService.handleError(e);
        });
    });
    return observable;
  }

  delete(url) {
    this.loading = true;
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.delete(url, this.options).subscribe(res => {
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.loading = false;
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.loading = false;
          DataService.handleError(e);
        });
    });
    return observable;
  }

  static handleError(error: any) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
