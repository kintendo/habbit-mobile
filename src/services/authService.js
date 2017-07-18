'use strict';

import { firebase } from './firebaseService';
const auth = firebase.auth();

function emailSignup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
  .then((result) => {
    return Promise.resolve(result);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  })
}

function emailLogin(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
  .then((result) => {
    return Promise.resolve(result);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  })
}

function getSession(callback) {
  return auth.onAuthStateChanged(callback);
}

module.exports = {getSession, emailLogin, emailSignup};
