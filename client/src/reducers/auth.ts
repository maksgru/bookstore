import { actionTypes } from '../actions/action-types';
import { userType } from '../actions/authActions';

export interface authType {
  id: number;
  name: string;
  userImg: string;
  isLoggedIn: boolean;
}

const initialState: authType = {
  id: 0,
  name: '',
  userImg: '',
  isLoggedIn: false
};

interface authActionType {
  type: string;
  payload: userType;
};

const authReducer = (state = initialState, action: authActionType): authType => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
    return {
        id: action.payload.id,
        name: action.payload.userName,
        userImg: action.payload.iconUrl,
        isLoggedIn: true
      };
    case actionTypes.SIGN_OUT:
      return initialState;
    case actionTypes.CHANGE_USER_IMG:
      return {...state, userImg: action.payload.iconUrl};
    default:
      return state;
  }
};

export default authReducer;