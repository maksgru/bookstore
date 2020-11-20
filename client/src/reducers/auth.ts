import { actionTypes } from '../actions/action-types';
import { userData } from '../actions/authActions';

export interface authState {
  id: number;
  name: string;
  userImg: string;
  isLoggedIn: boolean;
}

const initialState: authState = {
  id: 0,
  name: '',
  userImg: '',
  isLoggedIn: false
};

interface action {
  type: string;
  payload: userData;
};

const auth = (state = initialState, action: action) => {
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

export default auth;