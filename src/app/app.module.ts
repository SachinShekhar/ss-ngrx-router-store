import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SimpleSerializedNgRxRouterStoreModule } from 'ss-ngrx-router-store';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SimpleSerializedNgRxRouterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
