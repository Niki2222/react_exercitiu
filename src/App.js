import './App.css';
import React, { useState } from 'react';

function Header() {
    return (
        <div>
            <div className='container'>
            <h1>Users App</h1>
            </div>
            <div className='container'>
            <div>
                <h2>Name</h2>
            </div>
            <div>
                <h2>Age</h2>
            </div>
            <div>
                <h2>Action</h2>
            </div>
        </div>
        </div>
    );
}

function Body({ users, setUsers }) {
    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => {
            return index != i;
        }));
    }
    return (
        <ul>
            {users.map((user, index) => (
                <li className='container' key={index}>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                    <button onClick={() => handleDelete(index)} className='btn'>Delete</button>
                </li>
            ))}
        </ul>
    );
}

function AddUser({ addUser }) {
    const [user, setUser] = useState({ name: '', age: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user);
        setUser({ name: '', age: '' }); // Reset the form fields
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add user</h3>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={user.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input
                    type='text'
                    name='age'
                    id='age'
                    value={user.age}
                    onChange={handleChange}
                />
            </div>
            <button className='btn' type='submit'>
                Submit
            </button>
        </form>
    );
}

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div>
            <Header />
            <Body users={users} setUsers={setUsers}/>
            <AddUser addUser={addUser} />
        </div>
    );
}

export default App;