import { actionTypes } from '../actions/action-types';
import { SortType } from '../actions/sortActions';

interface SortReducerType {
  sortTarget: string;
  direction: string;
}

const sortReducer = (state={sortTarget: 'name', direction: 'ASC'}, action: SortType): SortReducerType => {
  switch (action.type) {
    case actionTypes.SET_SORT_DIRECTION:
      return {...state, direction: action.payload}
    case actionTypes.SET_SORT_TARGET:
      return {...state, sortTarget: action.payload};
    default:
      return state;
  }
};
export default sortReducer;