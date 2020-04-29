import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import Api from './api'

const User = props => {

  const params = useParams();
  debugger;
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    if(params.id) {
      Api.getUser(params.id).then(response => setUserData(response));
    }
  }, [params.id])

  return(
    <div>
      {userData && (
        <div>{userData.name}</div>
      )}
      {!userData && (
        <div/>
      )}
    </div>
  )
}

export default User;