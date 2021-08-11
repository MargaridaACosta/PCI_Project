import { takeLatest, call, all, put } from 'redux-saga/effects'
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from './../../firebase/utils'
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, resetPasswordSuccess, userError } from './user.actions';
import { handleEditUserProfile, handleResetPasswordAPI, handleEditUserPassword } from './user.helpers'

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                // ALTERAR VALORES A SEREM GUARDADOS NA BASE DE DADOS, O QUE VEM NA SNAPSHOT PODE SER DESTRUCTURED
                id: snapshot.id,
                data_de_criacao: snapshot.createdDate,
                ...snapshot.data()
            })
        );

    } catch (err) {
        console.log(err);
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        console.log(err)
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    } catch (err) {

    }

}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        )

    } catch (err) {
        console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmPassword,
    job,
    photoURL
} }) {

    if (password !== confirmPassword) {
        const err = ['Passwords Dont match'];
        console.log("Password dont match")
        yield put(
            userError(err)
        )
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName, job, photoURL };
        yield getSnapshotFromUserAuth(user, additionalData)

    } catch (err) {

        console.log(err);

    };

}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)
}

export function* resetPassword({ payload: { email } }) {
    try {
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        );

    } catch (err) {
        yield put(
            userError(err)
        )
    };
};

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        console.log(err)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* editUserPassword({ payload: {
    currentUser,
    oldPassword,
    newPassword,
    confirmNewPassword
} }) {
    if (newPassword !== confirmNewPassword) {
        const err = ['Passwords Dont match'];
        console.log("Password dont match")
        yield put(
            userError(err)
        )
        return;
    }

    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
        yield handleEditUserPassword(newPassword)

    } catch (err) {
        console.log(err)
    }
}

export function* onEditUserPassword() {
    yield takeLatest(userTypes.EDIT_PASSWORD_START, editUserPassword)
}

export function* editUserProfile({ payload: {
    uid,
    photoURL
} }) {
    try {
        // const additionalData = { uid, photoURL };
        // yield getSnapshotFromUserAuth(user, additionalData)
        yield handleEditUserProfile({ uid, photoURL })
        // yield put(
        //     isUserAuthenticated()
        // );

    } catch (err) {
        console.log(err)
    }
}

export function* onEditUserProfile() {
    yield takeLatest(userTypes.EDIT_USER_START, editUserProfile)
}


export default function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGoogleSignInStart),
        call(onEditUserProfile),
        call(onEditUserPassword)
    ])
}