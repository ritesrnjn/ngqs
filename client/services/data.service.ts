import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';
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

  constructor(private http: HttpClient,
              private ngSpinningPreloader: NgSpinningPreloader) {
    const token = localStorage.getItem('token');
    if (token) this.options.headers['Authorization'] = `Bearer ${token}`
  }

  get(url) {
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.get(url, this.options).subscribe(res => {
          console.log('res', res)
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  post(url, data) {
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.post(url, data, this.options).subscribe(res => {
        console.log('res', res)
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        })
    });
    return observable;
  }

  update(url, data) {
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.put(url, data, this.options).subscribe(res => {
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  delete(url) {
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let observable = new Observable(observer => {
      this.http.delete(url, this.options).subscribe(res => {
          DataService.counter -= 1;
          if (DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(res);
        },
        (e) => {
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  static handleError(error: any) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
