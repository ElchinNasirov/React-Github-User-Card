import React, { useState } from 'react';
import axios from 'axios';
import './Card.css';

function FollowerCard() {
    const [follower, setFollower] = useState([]);

    const handleFollower = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/ElchinNasirov/followers`)
            .then(res => {
                setFollower(res.data);
                console.log('Followers ', follower);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <button onClick={handleFollower}> Followers </button>
            <div className="card-info">
                {follower.map(user => (
                    <div className='card'>
                        <img className='img' src={user.avatar_url} alt='user avatar' />
                        <p><b>User Name:</b> {user.login}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FollowerCard; 