import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';

import { SharedModule } from '../shared/shared.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SERVICES
import { HttpService }    from '../services/http.service';
import { DataService }    from '../services/data.service';
import { ConfigService }  from '../services/config.service';
import { AuthService }    from "../services/auth.service";

//Dashboard
import { ScriptLoaderService } from "../services/script-loader.service";
import { GlobalErrorHandler } from "../services/error-handler.service";

import { NgSpinningPreloader } from 'ng2-spinning-preloader';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    HttpService,
    DataService,
    ConfigService,
    AuthService,
    NgSpinningPreloader,
    ScriptLoaderService,
    GlobalErrorHandler
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
