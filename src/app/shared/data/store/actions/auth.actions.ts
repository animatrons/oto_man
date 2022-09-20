import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const logIn = createAction(
  '[Auth] Log In',
  props<{ email: string, password: string }>()
);

export const logInSuccess = createAction(
  '[Auth] Log In Success',
  props<{ user: User }>()
);

export const logInFailure = createAction(
  '[Auth] Log In Failure',
  props<{ error: any }>()
);

export const logOut = createAction(
  '[Auth] Log Out'
);
