import UserItem from './UserItem';
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [post, setPost] = useState(null);
  const baseURL = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return(
    <div className="container">
      <div className="row">
        {
          post.map(
            (user, i) => <UserItem key={i} userProps={user}/>
          )
        }
      </div>
    </div>
  );
}

export default UserList;
