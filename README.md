# Simple Serialized NgRx Router Store

[![Build](https://github.com/SachinShekhar/ss-ngrx-router-store/workflows/Build/badge.svg)](https://github.com/SachinShekhar/ss-ngrx-router-store/actions?query=workflow%3ABuild) [![GitHub last commit](https://img.shields.io/github/last-commit/SachinShekhar/ss-ngrx-router-store?logo=github)](https://github.com/SachinShekhar/ss-ngrx-router-store) [![npm latest version](https://img.shields.io/npm/v/ss-ngrx-router-store/latest?logo=npm)](https://www.npmjs.com/package/ss-ngrx-router-store) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ss-ngrx-router-store?label=npm%20-%20minzipped&logo=npm)](https://www.npmjs.com/package/ss-ngrx-router-store) [![npm license](https://img.shields.io/npm/l/ss-ngrx-router-store)](https://github.com/SachinShekhar/ss-ngrx-router-store/blob/master/LICENSE)

`ss-ngrx-router-store` library serializes Angular router snapshots for NgRx Router Store. It searches entire route tree and puts only useful attributes into NgRx store (no need to think about children, firstChild, parent, root etc). The result is very clean ([check demo](https://sachinshekhar.github.io/ss-ngrx-router-store)). It is useful to newbies and experts alike.

![Demo](https://sachinshekhar.github.io/ss-ngrx-router-store/demo.png)

## Installation

![npm peer dependency @angular/router version](https://img.shields.io/npm/dependency-version/ss-ngrx-router-store/peer/@angular/router?logo=angular) ![npm peer dependency @ngrx/store version](https://img.shields.io/npm/dependency-version/ss-ngrx-router-store/peer/@ngrx/store)

1.  Make sure that you've installed and setup `@angular/router` and `@ngrx/store`.

2.  ```
    npm install --save ss-ngrx-router-store @ngrx/router-store
    ```

3.  Import `SSNgRxRouterStoreModule` in `app.module.ts`:

    ```typescript

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { StoreModule } from '@ngrx/store';
    import { StoreDevtoolsModule } from '@ngrx/store-devtools';
    import { SSNgRxRouterStoreModule } from 'ss-ngrx-router-store';

    ....
    ....

    @NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            RouterModule.forRoot(routes),
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

    ```

    No need to import anything from `@ngrx/router-store`. Also, keep in mind that import orders matter.

4.  Done! You can see `router` state in `Redux DevTools`.

### For Advanced Users

![npm peer dependency @ngrx/router-store version](https://img.shields.io/npm/dependency-version/ss-ngrx-router-store/peer/@ngrx/router-store)

`SSNgRxRouterStoreModule` uses default settings of `@ngrx/router-store`. If you want to override default settings, you can setup `@ngrx/router-store` yourself and use serializer provided by `ss-ngrx-router-store`. For example:

```typescript
import { SSRouterSerializer } from 'ss-ngrx-router-store';

@NgModule({
    imports: [
        StoreRouterConnectingModule.forRoot({
            stateKey: 'clean-router',
            serializer: SSRouterSerializer,
            navigationActionTiming: NavigationActionTiming.PostActivation
        })
        ]
    })
```

## Usage

`ss-ngrx-router-store` provides lots of selectors which you can use in your app.

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getParams } from 'ss-ngrx-router-store';

@Component({
  template: `
    <p>
      {{ (params$ | async).chatId }}
    </p>
  `,
  styles: []
})
export class YourComponent implements OnInit {
  constructor(private store: Store<any>) {}

  params$: Observable<{ chatId: string }>;

  ngOnInit(): void {
    this.params$ = this.store.select<{ chatId: string }>(getParams);
  }
}
```

### List of Selectors

| Selectors       | Usage                                                               |
| --------------- | ------------------------------------------------------------------- |
| getRouterState  | Select partial state of NgRx Router Store                           |
| getRouteMap     | Select map containing URL, Params, Query Params, Fragment & Data    |
| getNavigationId | Select Navigation Id which automatically increments upon navigation |
| getURL          | Select current URL visible in the address bar (without hostname)    |
| getParams       | Select Params (including Matrix Params) from all routes             |
| getQueryParams  | Select global Query Params                                          |
| getFragment     | Select global Fragment                                              |
| getData         | Select static data from all routes                                  |

## Limitations

If keys of multiple params are same, only child route param will be serialized. e.g. If your path is

```
path: 'folder/:id/mail/:id'
```

and you visit `folder/inbox/mail/122458656`, your router state will only register

```
params: {
    id: 122458656
}
```

not `id: 'inbox'`.

**Solution**: Be creative with key names and avoid duplicates. e.g. If your path is

```
path: 'folder/:folderId/mail/:mailId
```

and you visit `folder/inbox/mail/122458656`, your router state will properly register

```
params: {
    folderId: 'inbox',
    mailId: 122458656
}
```

. This limitation is also applicable to static `data` because it is also route-specific.

Query Params and Fragment don't have such limitations because they are global to every route in the tree.

## Interfaces

`ss-ngrx-router-store` also exposes interfaces used by serialized state. You can use them to write type-safe codes.

`SimpleSerializedRouterState`

```typescript
{
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
  data: Data;
}
```

(`Params` and `Data` are from `@angular/router`)

`SSRouterPartialState`

```typescript
{
  state: SimpleSerializedRouterState;
  navigationId: number;
}
```

## Component

```html
<ss-ngrx-router-store-state></ss-ngrx-router-store-state>
```

will reactively print entire serialized router state on any page. You can use it for debugging purposes in case you are away from your dev environment and you don't have access to `Redux Devtools`. The library's [demo page](https://sachinshekhar.github.io/ss-ngrx-router-store/) uses the same component to print router state on the page.
