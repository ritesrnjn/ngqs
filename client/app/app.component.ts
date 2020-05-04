import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScriptLoaderService } from '../services/script-loader.service';

@Component({
  selector: 'app',
  styleUrls: [ 'app.scss'],
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  public loading = false;
  constructor(
    private router: Router,
    private _script: ScriptLoaderService
  ){}

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
      this.loading = false;
    });
  }


}
