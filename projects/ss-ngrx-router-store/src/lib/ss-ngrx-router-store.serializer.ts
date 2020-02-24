import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import {
  ActivatedRouteSnapshot,
  Data,
  Params,
  RouterStateSnapshot
} from '@angular/router';
import { SimpleSerializedRouterState } from './ss-ngrx-router-store.models';

@Injectable()
export class SSRouterSerializer
  implements RouterStateSerializer<SimpleSerializedRouterState> {
  serialize(routerState: RouterStateSnapshot): SimpleSerializedRouterState {
    return {
      url: routerState.url,
      params: searchRouterStateTree(routerState.root, r => r.params),
      queryParams: routerState.root.queryParams,
      fragment: routerState.root.fragment,
      data: searchRouterStateTree(routerState.root, r => r.data)
    };
  }
}

function searchRouterStateTree(
  route: ActivatedRouteSnapshot,
  getter: (r: ActivatedRouteSnapshot) => Params | Data
): Params | Data {
  if (route.children.length === 0) {
    return getter(route);
  }

  return route.children.reduce(
    (obj, childRoute) => ({
      ...obj,
      ...getter(route),
      ...searchRouterStateTree(childRoute, getter)
    }),
    {}
  );
}
