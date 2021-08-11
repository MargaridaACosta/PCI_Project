import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions'
import './../../styles/components.scss'
import AuthWrapper from './../AuthWrapper'
import Button from './../Forms/Button'

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr,
    currentUser: user.currentUser
})

const EmailPassword = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess, userErr, currentUser } = useSelector(mapState);
    const [isSent, setIsSent] = useState(false);
    const [errors, setErrors] = useState([]);
    const email = currentUser.email

    useEffect(() => {
        if (resetPasswordSuccess) {
            setIsSent(true);
        }
    }, [resetPasswordSuccess])

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }

    }, [userErr])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
    }

    const configAuthWrapper = {
        headline: ''
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap pt-0">

                {errors.length > 0 && (
                    <ul>
                        {errors.map((e, index) => {
                            return (
                                <li key={index}>
                                    {e}
                                </li>
                            );
                        })}
                    </ul>
                )}
            <div >
                <form onSubmit={handleSubmit}>
                    <Button type="submit">
                        Alterar Password
                    </Button>
                </form>
            </div>
                {isSent === true &&
                    <h2>
                        You have been sent an email.
                    </h2>
                }

            </div>

        </AuthWrapper>

    )
}

export default EmailPassword;
