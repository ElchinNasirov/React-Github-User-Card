import React from "react";
import './Card.css';

const UserCard = (props) => {
    return (
        <div>
            <div className="card">
                <div>
                    <img className="img" src={props.image} alt="user avatar" />
                    <p><b>User Name:</b> { props.name } </p>
                    <p><b>Bio:</b> {props.bio}</p>
                    <p><b>Location:</b> {props.location} </p>
                    <p><b>Follorwers:</b> {props.followers} </p>
                </div>
            </div>
        </div>
    )
}
export default UserCard;