import React, { useState, useEffect, useCallback }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import {history} from '../../history.js'
export const Enter = () =>{
    const dispatch = useDispatch();
    var bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    var smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    

    return(
        <>
            <button onClick={(e)=> {
                dispatch(ActionCreator.getData(smallData))                
            }}>32 записи</button>
            <button onClick={(e)=> {
                dispatch(ActionCreator.getData(bigData))                
            }}>1000 записей</button>
        </>
    )

}