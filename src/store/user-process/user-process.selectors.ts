import { AuthorizationStatus, NameSpace } from '../../const';
import { UserInfo } from '../../types/api';
import { State } from '../../types/state';

export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const selectUserInfo = (state: State): null | UserInfo => state[NameSpace.User].userInfo;
