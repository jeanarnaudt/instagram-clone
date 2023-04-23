// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBIFUyROIlO2HEjfA74eRyq7cjGsFa0Uc0',
	authDomain: 'instagram-clone-abaf3.firebaseapp.com',
	projectId: 'instagram-clone-abaf3',
	storageBucket: 'instagram-clone-abaf3.appspot.com',
	messagingSenderId: '92435915390',
	appId: '1:92435915390:web:3a69e0fbfa7ce57e632e2f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
