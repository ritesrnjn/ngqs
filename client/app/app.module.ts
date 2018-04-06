import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent}  from './app.component';

import {SharedModule} from '../shared/shared.module';

// ROUTING
import {AppRoutingModule} from './app-routing.module';

// SERVICES
import {DataService}    from '../services/data.service';
import {ConfigService}  from '../services/config.service';
import {AuthService}    from '../services/auth.service';

//Dashboard
import {ScriptLoaderService} from "../services/script-loader.service";
import {GlobalErrorHandler} from "../services/error-handler.service";
import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
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

export class AppModule {
}
