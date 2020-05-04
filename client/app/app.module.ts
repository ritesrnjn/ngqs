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
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DataService,
    ConfigService,
    AuthService,
    ScriptLoaderService,
    GlobalErrorHandler
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
