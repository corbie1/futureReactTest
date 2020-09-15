import {ActionType} from './action-types';
// Передача данных в стор 
export const ActionCreator = {
    setData: (data, isLoad) =>({
      type: ActionType.SET_DATA,
      payload: {data, isLoad}
    }),
    getData: (url) =>({
      type: ActionType.GET_DATA,
      url
    }),
    removeUser: (id) => ({
      type: ActionType.REMOVE_USER,
      payload: id
    }),
    addUser:  (user) => ({
      type: ActionType.ADD_USER,
      payload: user
    }),
    filterUser: (filter) => ({
      type: ActionType.FILTER_USER,
      payload: filter
    }),
    sortData: (sortField, sortType) => ({
      type: ActionType.SORT_DATA,
      payload: {sortField, sortType}
    })
    
};

