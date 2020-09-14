import React from 'react';
import usersData from '../../friendData/fakeData';
import { useState } from 'react';
import User from '../User/User';
import Counter from '../Counter/Counter';

const List = () => {
    const allUsers = usersData.map(user => {
        user.isConnected = false;
        return user;
    })
    const [users, setUsers] = useState(allUsers);   
    const [connected, setConnected] = useState([]);

    const handleAddFriend = (user, status) => {
        const userConnected = status === 'notConnected' ? [...connected, user] 
                                                        : connected.filter(person => person.id !== user.id);
        setConnected(userConnected);

        const updatedUsers = users.map(person => {
            if(person.id === user.id){
               person = {...person, "isConnected": !person.isConnected}
            }
            return person;
        })
        setUsers(updatedUsers);  
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center py-3 display-4 text-white">Buddy Suggestion</h2>
            <div className="row">
                <div className="col-10 col-sm-7 py-5 mx-auto">
                    <div className="row row-cols-1 row-cols-md-2">
                        {
                            users.map(user => <User user={user} handleAddFriend={handleAddFriend} key={user.id}></User>)
                        }
                    </div>
                </div>
                <div className="col-12 col-sm-5 my-sm-3 my-md-5">
                    <Counter connected={connected} handleAddFriend={handleAddFriend}></Counter>
                </div>
            </div>
        </div>
    );
};

export default List;