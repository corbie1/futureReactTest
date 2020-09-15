import React, { useState, useEffect, useCallback }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import {sortParamsSelector} from '../../store/selectors';
  

export const SortLink = ({label, sortField}) => 
{
    const sortParams = useSelector(sortParamsSelector);
    const sortType = useSelector((state) => state.sortBy.sortType)
    const sortDirection = sortType === 'asc' ? 'desc' : 'asc';
    const dispatch = useDispatch();
    return(
    <th className="table-link"
      onClick={() => {
        dispatch(ActionCreator.sortData(sortField, sortDirection))
        }
      }
    >
      {sortParams.sortField == sortField ? <div className="sort__active">{label} {sortParams.sortType}</div> : label} 
    </th>
    )
  };
