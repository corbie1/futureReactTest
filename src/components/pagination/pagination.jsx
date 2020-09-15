import React, { useState } from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import {sortDataSelector} from '../../store/selectors'

export const Pagination = ({ usersPerPage, totalUsers, paginate }) =>{

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    return(
        <div className="pagination">
          {pageNumbers.map(number => (
              <a key={number} onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
          ))}
        </div>
    )
}