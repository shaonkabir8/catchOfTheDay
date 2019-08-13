// firebase configaration files for database

import Rebase from 're-base'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAhEtZgGKDR3a_BflpSQsVECt1f308oAIk",
    authDomain: "catch-of-the-day-final-project.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-final-project.firebaseio.com"
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;