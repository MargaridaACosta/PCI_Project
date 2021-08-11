import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editUserStart, editUserPassword } from './../../redux/User/user.actions'
import './../../styles/components.scss'
import createHistory from 'history/createBrowserHistory'
import AuthWrapper from './../AuthWrapper'
import Button from './../Forms/Button'
import { storage } from './../../firebase/utils';
import RecoverPasswordAuto from './../RecoverPasswordAuto';
import FotoUp from '../../assets/icons/fotoup.png';
import Addphoto from '../../assets/icons/addphoto.png';
import PhotoPlaced from '../../assets/icons/photoplaced.png';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const EditProfile = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const historyPush = createHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const [image, setImage] = useState(null);
    const [photoURL, setPhotoURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }

    }, [userErr]);


    const handlePhoto = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setPhotoURL(url);
                    });
            }
        );
    };

    // console.log("image: ", image);
    // console.log(currentUser.password)


    const handleFormSubmit = e => {
        e.preventDefault();
        const uid = currentUser.id;
        dispatch(editUserStart({
            uid,
            photoURL
        }));
        setTimeout(() => {
            historyPush.go(0);
        }, 2000);
    }

    // const handleFormSubmitPassword = e => {
    //     e.preventDefault();
    //     dispatch(editUserPassword({
    //         currentUser,
    //         oldPassword,
    //         newPassword,
    //         confirmNewPassword
    //     }));
    // }

    const configAuthWrapper = {
        
    }
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}

            <div>
                <div className="container m-auto justify-center flex relative pb-8 pt-8 ">

                    <div className="w-64 h-64 no-repeat rounded-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${photoURL || "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"})`, backgroundSize: 'cover' }} alt="firebase-image" ></div>

                </div>
                <div className="flex container justify-end ">
                    {!image ? (
                        <>
                        <button className="block" onClick={handleClick}>
                            <img className="w-16 h-16" src={Addphoto} alt="uploadUserPhoto" />
                        </button>
                        <input
                            style={{display:'none'}}
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handlePhoto}
                        />
                        </>
                    ) : (
                        <>
                            <button className="block" onClick={handleClick}>
                                    <img className="w-16 h-16" src={PhotoPlaced} alt="uploadUserPhoto" />
                            </button>
                            <input 
                                style={{display:'none'}}
                                ref={hiddenFileInput}
                                type="file"
                                onChange={handlePhoto}
                            />
                            </>
                        )
                    }

                    <button className="block mr-24 md:mr-36 lg:mr-14 xl:mr-8" onClick={handleUpload}>
                        <img className="w-16 h-16" src={FotoUp} alt="uploadUserPhoto" />
                    </button>
                </div>

                </div>
                <form onSubmit={handleFormSubmit}>
                    <Button type="submit">
                        Editar Imagem Perfil
                    </Button>
                </form>
             
                <RecoverPasswordAuto />

         </div>
        </AuthWrapper>
    );
}


export default EditProfile;
