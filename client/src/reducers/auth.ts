import { actionTypes } from '../actions/action-types';

const initialState = {
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
    default:
      return state;
  }
};


export default auth;