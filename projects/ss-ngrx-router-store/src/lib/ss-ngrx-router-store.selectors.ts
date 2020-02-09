import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { ROUTER_FEATURE_KEY } from './ss-ngrx-router-store.module';
import { SimpleSerializedRouterState } from './ss-ngrx-router-store.models';

export type RouterPartialState = RouterReducerState<
  SimpleSerializedRouterState
>;

export const getRouterState = createFeatureSelector<RouterPartialState>(
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
