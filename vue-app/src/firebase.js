import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init
const firebaseConfig = {
	apiKey            : 'AIzaSyB0UW1MVTL8rwEaV0Z9mlEkq9W5BQlnR_s',
	authDomain        : 'vuegram-69add.firebaseapp.com',
	databaseURL       : 'https://vuegram-69add.firebaseio.com',
	projectId         : 'vuegram-69add',
	storageBucket     : 'vuegram-69add.appspot.com',
	messagingSenderId : '558056066157',
	appId             : '1:558056066157:web:42e57e330b208bdd790364',
	measurementId     : 'G-57XJ0K6PTS'
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

// export utils/refs
export { db, auth, usersCollection, postsCollection, commentsCollection, likesCollection };
