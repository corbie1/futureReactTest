import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';

export const sortParamsSelector = (state) => state.sortBy;
export const usersDataSelector = (state) => state.usersData;
export const filterParamSelector = (state) => state.filterParam;
export const dataStateSelector = (state) => state.isUsersLoaded;


export const filterDataSelector = createSelector(
    usersDataSelector,
    filterParamSelector,
    (users, filterParam) => {
        if(users != null){
            return [...users].filter((user) => user.lastName.toLowerCase().includes(filterParam.toLowerCase()))
        }
    }
);

export const sortDataSelector = createSelector(
    sortParamsSelector,
    filterDataSelector,
    (sortParams, users) =>
    {
        return [...users].sort(function (a, b){
            if(sortParams.sortType === 'asc'){
                return a[sortParams.sortField] > b[sortParams.sortField] ? 1 : -1;
            }
            else if (sortParams.sortType === 'desc'){
                return a[sortParams.sortField] < b[sortParams.sortField] ? 1 : -1;
            }
            return users
        }
)})

