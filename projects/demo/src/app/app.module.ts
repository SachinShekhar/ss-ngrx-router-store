import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SSNgRxRouterStoreModule } from 'ss-ngrx-router-store';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './app.reducer';
import { DemoComponent } from './demo/demo.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  },
  {
    path: 'folders/:folderId',
    component: DemoComponent,
    children: [
      {
        path: 'mails/:mailId',
        component: ChildComponent
      }
    ]
  },
  {
    path: 'route-with-static-data',
    component: DemoComponent,
    data: {
      lib: 'ss-ngrx-router-store'
    }
  }
  // {
  //   path: '**',
  //   component: DemoComponent
  // }
];

@NgModule({
  declarations: [AppComponent, DemoComponent, ChildComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SSNgRxRouterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
