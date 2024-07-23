import React , {useState,useEffect }from 'react'
import axios from 'axios'

const UserList = () => {

const [listOfUsers, setListofUsers] =useState([]);
    
useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListofUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    
    fetchUsers();
  },[]);




  return (
    <div> 
        <h1>User List</h1>
        <div className='user-list'>
        {listOfUsers.map(user => (
            <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          </div>
        ))}
        </div>


    </div>
  )
}

export default UserList