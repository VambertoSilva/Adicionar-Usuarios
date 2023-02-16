import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../Ui/Card';
import ErrorModal from '../Ui/ErrorModal';
import Button from '../Ui/Button';

const AddUsers = (props) => {
    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();
    const [apresentation, setApresentation] = useState({
        title: 'Bem-Vindo',
        message:
            'Olá, meu nome é Vamberto Silva, este um trabalho que eu fiz do curso de react, o seu principal obetivo com este projeto é praticar algumas features do react, como useState e props.  ',
    });

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Nome ou Idade Inválida',
                message: 'Por favor, entre com um nome ou idade válida',
            });
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: 'Idade inválida',
                message: 'Coloque um idade maior que 0',
            });
            return;
        }

        props.onAddUser(enteredName, enteredAge);

        setName(' ');
        setAge(' ');
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const ageHandler = (event) => {
        setAge(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
        setApresentation(null);
    };

    return (
        <div>
            {apresentation && (
                <ErrorModal
                    title={apresentation.title}
                    message={apresentation.message}
                    onConfirm={errorHandler}
                />
            )}
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Nome</label>
                    <input
                        id="username"
                        type="text"
                        onChange={nameHandler}
                        value={enteredName}
                    />
                    <label htmlFor="age">Idade (Anos)</label>
                    <input
                        id="age"
                        type="number"
                        onChange={ageHandler}
                        value={enteredAge}
                    />
                    <Button type="submit">Adicionar usuário</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUsers;
