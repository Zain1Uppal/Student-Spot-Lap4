import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext()

const UserContextProvider  = (props) => {

    const [users, setUsers] = useState([
        {id:uuidv4(), name: 'Thomas', course: 'Maths', uni: 'KCL', location: 'UK', bio:'hello'},
        {id:uuidv4(), name: 'Michelle', course: 'Science', uni: 'UCL', location: 'Europe', bio:'hi'},
        {id:uuidv4(), name: 'Suzie', course: 'Geography', uni: 'Imperial College London', location: 'US', bio:'hey'},
        {id:uuidv4(), name: 'Jacob', course: 'History', uni: 'LSE', location: 'Asia', bio:'whats up'},
        {id:uuidv4(), name: 'John', course: 'Economics', uni: 'University of Brighton', location: 'UK', bio:'hey hey'},
        {id:uuidv4(), name: 'Sophie', course: 'Computer Science', uni: 'University of Oxford', location: 'UK', bio:'hellooo'}
    
])


useEffect(()=> {
    setUsers(JSON.parse(localStorage.getItem('users')))
},[])

useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
})



const sortedUsers = users.sort((a,b)=>(a.name < b.name ? -1 : 1));


const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
}

    return (
        <UserContext.Provider value={{sortedUsers, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;