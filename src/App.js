import React, { useState } from 'react';
import AddUsers from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import './App.css';
import ErrorModal from './Components/Ui/ErrorModal';

function App() {
    const [usersList, setUserslist] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserslist((prevList) => {
            return [
                ...prevList,
                { name: uName, age: uAge, key: Math.random().toString() },
            ];
        });
    };

    return (
        <div>
            <AddUsers onAddUser={addUserHandler} />{' '}
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
