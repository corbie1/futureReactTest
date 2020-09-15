import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";
import {ActionCreator} from "../../store/actions";

export const SearchBar = () => {
    const dispatch = useDispatch();
    //Получение списка после поиска
    if (ActionCreator.filterUser && ActionCreator.filterUser != null) {
        return (
         <div className="search">
           <form className="search--input">
                <input
                type="text"
                placeholder="Search"
                onChange={e => dispatch(ActionCreator.filterUser(e.target.value))}
                />  
            </form> 
        </div> 
        )   
    }
}