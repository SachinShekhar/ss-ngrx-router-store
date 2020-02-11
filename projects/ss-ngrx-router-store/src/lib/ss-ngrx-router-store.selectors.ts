import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROUTER_FEATURE_KEY } from './ss-ngrx-router-store.config';

import { SSRouterPartialState } from './ss-ngrx-router-store.models';

export const getRouterState = createFeatureSelector<SSRouterPartialState>(
  ROUTER_FEATURE_KEY
);

export const getRouteMap = createSelector(
  getRouterState,
  routerState => routerState.state
);

export const getNavigationId = createSelector(
  getRouterState,
  routerState => routerState.navigationId
);

export const getURL = createSelector(
  getRouterState,
  routerState => routerState.state.url
);

export const getParams = createSelector(
  getRouterState,
  routerState => routerState.state.params
);

export const getQueryParams = createSelector(
  getRouterState,
  routerState => routerState.state.queryParams
);

export const getFragment = createSelector(
  getRouterState,
  routerState => routerState.state.fragment
);

export const getData = createSelector(
  getRouterState,
  routerState => routerState.state.data
);
