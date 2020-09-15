import React, { useState, useEffect } from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import {Table} from '../table/table';
import {dataStateSelector, sortDataSelector} from '../../store/selectors'
import {Preloader} from '../preloader/preloader';
import {AddUser} from"../add-user-form/add-user-form";
import {SearchBar} from '../search-bar/search-bar';
import {Pagination} from '../pagination/pagination';


export const UsersPage = () => {

    const users = useSelector(sortDataSelector);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(50);
    
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const isUsersLoaded = useSelector(dataStateSelector);
return(
isUsersLoaded ? 
    <>
        <SearchBar/>
        <AddUser/>
        <Table currentUsers={currentUsers}/>
        <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}/>
    </>
    : 
    <Preloader/>
  )    
}