import { actionTypes } from '../actions/action-types';


export interface authState {
  name: string,
  userImg: string,
  isLoggedIn: boolean
}

const initialState: authState = {
  name: '',
  userImg: '',
  isLoggedIn: false
};

interface action {
  type: string,
  payload: any
};

const auth = (state = initialState, action: action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
    return {
        name: action.payload.userName,
        userImg: action.payload.iconUrl,
        isLoggedIn: true
      };
    case actionTypes.SIGN_OUT:
      return initialState;
    case actionTypes.CHANGE_USER_IMG:
      return {...state, userImg: action.payload};
    default:
      return state;
  }
};

export default auth;