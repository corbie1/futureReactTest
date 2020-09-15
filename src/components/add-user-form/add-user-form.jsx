import React, { useState, useEffect, useCallback, useRef }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";



export const AddUser = () => {
    const id = useRef(null);
    const firstName = useRef(null);
    const lastName = useRef(null);
    const mail = useRef(null);
    const phone = useRef(null);
    const dispatch = useDispatch();

    const onSubmit = useCallback((e)=> {
        e.preventDefault();
        dispatch(ActionCreator.addUser({
            id: id.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: mail.current.value,
            phone: phone.current.value,
            address: {
                streetAddress: '',
                city: '',
                state: '',
                zip: ''
            },
            description: '',
        }));
        id.current.value = '';
        firstName.current.value = '';
        lastName.current.value = '';
        phone.current.value = '';
        mail.current.value = '';
        return false;
    }, [dispatch, id, firstName, lastName, mail, phone]);


    return(
       <form className="form__add-user" onSubmit={onSubmit}>
        <input placeholder="id" type="number" ref={id}/>
        <input placeholder="Имя" ref={firstName}/>
        <input placeholder="Фамилия" ref={lastName}/>
        <input placeholder="Почта" type="email" ref={mail}/>
        <input placeholder="Телефон" type="tel" ref={phone}/>
        <button>Добавить</button> 
       </form> 
    )
}