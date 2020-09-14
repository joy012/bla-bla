import React from 'react';
import "./User.css";

const User = (props) => {
    const {id, name, username, phone, website, background, image, salary, email, isConnected} = props.user;
    const handleAddFriend = props.handleAddFriend;
    const updateBtn = () => {
        if(isConnected){
            return (
                <button className="btn btn-success d-block mx-auto mb-3 rounded-pill" onClick={() => handleAddFriend(props.user, 'connected')} disabled><i class="fas fa-arrow-right"></i> Request Sent</button>
            )
        }
        else{
            return (
                <button className="btn btn-outline-primary d-block mx-auto mb-3 rounded-pill" onClick={() => handleAddFriend(props.user, 'notConnected')}><i className="fas fa-user-friends"></i> Add Friend</button>
            )
        }
    }
    return (
        <div className="user col mb-4">
            <div className="card h-100">
                <div className="img-container">
                    <img src={background} className="card-img-top" alt="..." />
                    <img className="profile-pic d-block mx-auto" src={image} alt=""/>
                </div>
                <div className="card-body text-primary">
                    <h3 className="card-title text-center">{name}</h3>
                    <p className="card-text text-center"><small><i className="fas fa-user"></i> {username}_{id}</small></p>
                    <div className="info">
                        <p className="card-text"><i className="fas fa-envelope"></i> {email}</p>
                        <p className="card-text"><i className="fas fa-voicemail"></i> {phone}</p>
                        <p className="card-text"><i className="fas fa-desktop"></i> {website}</p>
                        <p className="card-text"><i className="fas fa-wallet"></i> ${salary}</p>
                    </div>
                </div>
                <div className="card-footer">
                    {updateBtn()}
                </div>
            </div>
        </div>         
    );
};

export default User;