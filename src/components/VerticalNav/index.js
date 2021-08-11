import React from 'react';
import { useSelector } from 'react-redux'
import UserProfile from './../UserProfile';
import './../../styles/components/vertical_nav.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const VerticalNav = ({ children }) => {
    const { currentUser } = useSelector(mapState);

    const configUserProfile = {
        currentUser
    }

    return (
        
        <div>
            <div className="pt-24">
                <h1>ZONA DE ADMINISTRAÇÃO</h1>
            <UserProfile {...configUserProfile} />
            </div>


            <div className="container m-auto pb-24">
            <div>
                {children}
            </div>
        </div>
        </div>
    );
}

export default VerticalNav;