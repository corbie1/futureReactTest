import React, { useState } from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import {SortLink} from "./sort-link";
import {UserCard} from '../user-card/user-card';
import {filterDataSelector} from '../../store/selectors'



export const Table = ({currentUsers}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  return(
    <>
    <table className="table">
    <thead>
     <tr>
      <SortLink
        label="Id"
        sortField="id"
        />
      <SortLink
        label="First Name"
        sortField="firstName"
        />
       <SortLink
         label="Last Name"
         sortField="lastName"
       />
       <SortLink
         label="Email"
         sortField="email"
       />
       <SortLink
         label="Phone"
         sortField="phone"
       />
     </tr>
    </thead>
    <tbody>
    {currentUsers.map(item => (
      <tr key={item.phone} onClick={() => setUser(item)} className="people__row">
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td><a href={item.email}>{item.email}</a></td>
        <td><a href={item.phone}>{item.phone}</a></td>
        <td><button onClick={(e) => dispatch(ActionCreator.removeUser(item.id))}>Delete</button></td>
      </tr>
    ))}
  </tbody>
  </table>
  {user ? <UserCard user={user}/> : null}
  </>
  )
}


