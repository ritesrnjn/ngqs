import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConfigService {

  private config: Object = null;

  constructor(
    private http: Http
  ) {}

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any) {
    return this.config[key];
  }

  get(){
    let observable = new Observable(observer => {

      if (this.config) {
        observer.next(this.config);
      } else {
        this.http.get('../../../public/config.json').subscribe((response: any) => {
          this.config = response;
          console.log(response);
        });
      } // end of else
    }); // end of observable
    return observable;
  } // end of get()

}
