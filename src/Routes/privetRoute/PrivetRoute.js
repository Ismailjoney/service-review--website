import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../Context/AuthContext';
import Spinner from '../../Utilities/Spinner';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthorContext)
    const location = useLocation()
   if(loading){
    return <Spinner></Spinner>
   }
   if(user){
    return children;
}

 
return <Navigate to='/login' state={{from: location}} replace></Navigate>
     
};

export default PrivetRoute;