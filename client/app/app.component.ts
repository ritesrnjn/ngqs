import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { ScriptLoaderService } from '../services/script-loader.service';

@Component({
  selector: 'app',
  styleUrls: [ 'app.scss'],
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  constructor(
    private router: Router,
    private ngSpinningPreloader: NgSpinningPreloader,
    private _script: ScriptLoaderService
  ){}

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
      this.ngSpinningPreloader.stop();
    });
  }


}
