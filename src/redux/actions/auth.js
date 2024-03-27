import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import { USER_STATE_CHANGE } from '../constants';
import { firebase } from '@react-native-firebase/firestore';

export const userAuthStateListener = () => (dispatch) => {
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(`User: ${user.uid} is signed in`);
      dispatch(getCurrentUserData());
    } else {
      console.log('No user is signed in');
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => (dispatch) => {
  const auth = getAuth();
  firebase
    .firestore()
    .collection('user')
    .doc(auth.currentUser.uid)
    .onSnapshot((res) => {
      if (res.exists) {
        return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: res.data(),
          loaded: true,
        });
      } else {
        console.log('User data does not exist');
        dispatch({
          type: USER_STATE_CHANGE,
          currentUser: null,
          loaded: true,
        });
      }
      (error) => {
        console.error('Error fetching user data:', error);
        dispatch({
          type: USER_STATE_CHANGE,
          currentUser: null,
          loaded: true,
        });
      };
    });
};

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((error) => {
        console.log(error);

        let errorMessage = ' an unexpected error';
        if (error.code === 'auth/invalid-credential') {
          errorMessage = 'The creditials are invalid';
        }
        reject(errorMessage);
      });
  });

export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
