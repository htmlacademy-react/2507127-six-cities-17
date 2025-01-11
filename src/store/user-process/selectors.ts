import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
