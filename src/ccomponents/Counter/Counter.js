import React from 'react';
import './Counter.css';

const Counter = (props) => {
    const connected = props.connected;
    const handleAddFriend = props.handleAddFriend;

    const counterDiv = () => {
        if (connected.length) {
            return (
                    <div className="container-fluid bg-counter text-white my-4 text-center pb-3">
                        <h2 className="py-3">Request Sent: {connected.length}</h2>
                        {
                            connected.map(user =>
                                <div className="friend d-flex justify-content-between align-items-center mb-3">
                                    <img src={user.image} className="profile-img" alt="..." />
                                    <h5>{user.name}</h5>
                                    <button className="btn btn-danger rounded-pill" onClick={() => handleAddFriend(user, 'isConnected')}><i class="fas fa-user-minus"></i></button>
                                </div>
                            )
                        }
                    </div>
            );
        }
        else{
            return (
                <div className="container-fluid bg-counter text-white my-4 text-center pb-3">
                    <h2 className="py-3">No Request is Sent</h2>
                </div>
            );
        }
    }

    return (
        <>
        {
            counterDiv()
        }
        </>
    );
};

export default Counter;