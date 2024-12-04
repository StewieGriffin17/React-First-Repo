import { useEffect, useState } from 'react'
import './App.css'
import User from './User';

export default function Users(){
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return(
        <div className="myClass">
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user = {user}></User>)
            }
        </div>
    )
}