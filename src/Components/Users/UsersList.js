import React from 'react';

import Card from '../Ui/Card';
import classes from './UsersList.module.css';
const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.key}>
                        {user.name} ({user.age} anos)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
