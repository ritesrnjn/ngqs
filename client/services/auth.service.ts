import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map'
import { ConfigService } from './config.service';


@Injectable()
export class AuthService {
  baseURL;
  private messageEvent = {};
  private newOrderEvent = new BehaviorSubject<Object>(this.messageEvent);
  newOrderEventAsObservable = this.newOrderEvent.asObservable();

  public loading = false;
  constructor(
    private http: HttpClient,
    private config : ConfigService) {
    this.loading = false;
  }
  login(user) {
    let urls = this.config.getConfig('urls');
    let loginUrl: string = urls.signin;
    return this.http.post(loginUrl,user).subscribe((res:any)=>{
      res = res.json();
      if (res && res.user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', res.jwt);
        localStorage.setItem('currentUser', JSON.stringify(res.user));
      }
      return res;
    })
  }

  // remove user from local storage to log user out
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  // Send Subscription information to server
  sendSubscription(subInfo){
    let urls :any = {}; //this.config.getConfig('urls');
    let sendSubUrl: string = this.baseURL + urls.sendSubUrl;
    return this.http.post(sendSubUrl,subInfo)
      .catch(this.handleError)
      .map((response: HttpResponse<any>) => {
        console.log('subscription info sent successfully. Response from sendSub '+response);
      });
  }


  handleError(error: any){
    return Observable.throw(error.json().error || 'Server Error');
  }
}
