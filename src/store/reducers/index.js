import {ActionType} from '../action-types';
const initialState = {
    error: '',
    usersData: [],
    sortBy:'',
    filterParam: '',
    isUsersLoaded: false,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.SET_DATA:
        return {
          ...state,
          usersData: action.payload.data,
          isUsersLoaded: action.payload.isLoad
        }
      case ActionType.GET_DATA:
        return{
          ...state
        }
      case ActionType.SORT_BY:
        return {
          ...state,
          sortBy: action.sortType
        }
      case ActionType.ADD_USER:
        return {
          ...state,
          usersData: [action.payload, ...state.usersData] 
        };
      case ActionType.REMOVE_USER:
        return {
          ...state,
          usersData: state.usersData.filter(item => item.id !== action.payload),
        } 
      case ActionType.SORT_DATA:
        return { 
        ...state,
        sortBy: {
          sortField: action.payload.sortField,
          sortType: action.payload.sortType
          }
        }
      case ActionType.FILTER_USER:
        return{
          ...state,
          filterParam: action.payload
        }
    default: return state;
  }
}
