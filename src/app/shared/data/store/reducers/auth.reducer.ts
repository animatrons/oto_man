import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/User';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User | null;
  logInStatus: 'NOT_LOGGED_IN' | 'LOGGIN_IN' | 'LOGGED_IN';
  error: { message: string } | null;
}

export const initialState: State = {
  user: null,
  logInStatus: 'NOT_LOGGED_IN',
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.logIn, state => state),
  on(AuthActions.logInSuccess, (state, action) => ({
    ...state,
    user: action.user,
    logInStatus: 'LOGGED_IN'
  })),
  on(AuthActions.logInFailure, (state, action) => ({
    ...state,
    user: null,
    logInStatus: 'NOT_LOGGED_IN',
    error: {message: action.error}
  })),
  on(AuthActions.logOut, () => initialState)
);
