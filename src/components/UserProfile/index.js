import React from 'react';
import './../../styles/components/user_profile.scss';
import userIMG from './../../assets/icons/pci.png';

const UserProfile = props => {
    const { currentUser } = props;
    const { displayName } = currentUser;

    return (
        <div className="userProfile">
            <ul>
                
            </ul>
        </div>
    );
}

export default UserProfile;