import React, { useState, useEffect, useCallback }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';


export const UserCard = ({user}) => {
    console.log(user)
    return(
        <div className="user__info">
            <p>Выбран пользователь <b>{user.firstName} {user.lastName}</b></p>
            <h4>Описание:</h4>
            <textarea>
            {user.description}
            </textarea>
            <p>Адрес проживания: <b>{user.address.streetAddress}</b></p>
            <p>Город: <b>{user.address.city}</b></p>
            <p>Провинция/штат: <b>{user.address.state}</b></p>
            <p>Индекс: <b>{user.address.zip}</b></p>
        </div>
    )
}