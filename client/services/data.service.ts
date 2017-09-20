
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  private baseURL: string;
  static counter: number = 0;

  constructor(
    private http : HttpService,
    private configService: ConfigService,
    private ngSpinningPreloader: NgSpinningPreloader
  ){
    //this.baseURL = this.configService.getConfig('baseURL');
    this.baseURL = "https://google.com/"
  }

  get(url) {
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let getURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.get(getURL).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          DataService.counter -= 1;
          if(DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(response);
        },
        (e) =>{
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  post(url,data){
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let postURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.post(postURL,data).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          DataService.counter -= 1;
          if(DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(response);
        },
        (e) =>{
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        })
    });
    return observable;
  }

  update(url,data){
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let putURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.put(putURL,data).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          DataService.counter -= 1;
          if(DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(response);
        },
        (e) =>{
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  delete(url){
    this.ngSpinningPreloader.start();
    DataService.counter += 1;
    let deleteURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.delete(deleteURL).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          DataService.counter -= 1;
          if(DataService.counter === 0) {
            this.ngSpinningPreloader.stop();
          }
          observer.next(response);
        },
        (e) =>{
          DataService.counter -= 1;
          this.ngSpinningPreloader.stop();
          DataService.handleError(e);
        });
    });
    return observable;
  }

  static handleError(error: any){
    return Observable.throw(error.json().error || 'Server error');
  }

}
