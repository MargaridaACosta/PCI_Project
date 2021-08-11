import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUpUserStart } from './../../redux/User/user.actions'
import './../../styles/components.scss'
import AuthWrapper from './../AuthWrapper'
import FormInput from './../Forms/FormInput'
import Button from './../Forms/Button'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { storage } from './../../firebase/utils';
import FotoUp from '../../assets/icons/fotoup.png';
import Addphoto from '../../assets/icons/addphoto.png';
import PhotoPlaced from '../../assets/icons/photoplaced.png';



const useStyles = makeStyles((theme) => ({
    root: {

    },
    formControl: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(1),
       

    },
    selectMenu: {
        minWidth: 40,
    },

    nativeInput: {
        width: [ '35rem' ],
        borderRadius: 8,
        fontFamily: ['Open sans', 'sans-serif'],
        color: '#cccccc',
    },

    selectEmpty: {
        minWidth: 40,
        paddingLeft: 50,
        marginTop: theme.spacing(2),
    },
}));

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const SignUp = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [job, setJob] = useState("aluno");
    const [image, setImage] = useState(null);
    const [photoURL, setPhotoURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState([]);
    const classes = useStyles();


    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };



    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');
        }

    }, [currentUser]);

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

    console.log("image: ", image);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setJob('');
        setPhotoURL('');
        setErrors([]);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(signUpUserStart({
                displayName,
                email,
                password,
                confirmPassword,
                job,
                photoURL
            }));
        }, 1000)
    }

    const configAuthWrapper = {
        headline: 'Registo'
    }

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
                <div className="container m-auto justify-center flex pb-8 pt-8">
            <div className="w-72 h-72 no-repeat rounded-full bg-no-repeat bg-center" style={{backgroundImage: `url(${photoURL || "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"})`, backgroundSize: 'cover'}} alt="firebase-image" ></div>

            </div>
            <div className="flex container justify-end flex-wrap ">
                    {!image ? (
                        <>
                        <button className="block"  onClick={handleClick}>
                            <img className="w-14 h-auto" src={Addphoto} alt="uploadUserPhoto" />
                        </button>
                        <input className=" w-2/3 bg-red "
                            style={{display:'none'}}
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handlePhoto}
                        />
                        </>
                    ) : (
                        <>
                            <button className="block"  onClick={handleClick}>
                                    <img className="w-14 h-auto" src={PhotoPlaced} alt="uploadUserPhoto" />
                            </button>
                            <input className=" w-2/3 text-green hidden" 
                                style={{display:'none'}}
                                ref={hiddenFileInput}
                                type="file"
                                onChange={handlePhoto}
                            />
                            </>
                        )
                    }

                    <button className="block mr-24 md:mr-36 lg:mr-14 xl:mr-8" onClick={handleUpload}>
                        <img className="w-18 h-auto" src={FotoUp} alt="uploadUserPhoto" />
                    </button>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Nome Completo"
                        handleChange={e => setDisplayName(e.target.value)}
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="E-mail"
                        handleChange={e => setEmail(e.target.value)}
                    />

            <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center pl-0 pr-0 md:pl-4 md:pr-4" style={{width: '100%'}}>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Palavra-chave"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirmar Palavra-chave"
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />
            </div>

                    <FormControl className={classes.formControl} fontWeight={700} variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Profissão</InputLabel>
                        <Select
                            className={classes.nativeInput}
                            native
                            value={job}
                            onChange={(e) => { setJob(e.target.value) }}
                            label="Profissão"
                            inputProps={{
                                id: 'demo-customized-select-label',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                            <option value="docente">Docente</option>
                        </Select>
                    </FormControl>




                    <Button type="submit">
                        Registar
                    </Button>
                </form>

                {/* <input
                    type="file"
                    onChange={handlePhoto}
                />
                <br />
                {photoURL}
                <br />

                 */}
            </div>
        </AuthWrapper>
    );
}


export default SignUp;