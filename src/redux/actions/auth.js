import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });

export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
