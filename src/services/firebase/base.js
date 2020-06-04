import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAcTjTAVZN2hMeJ9Jpo9MzqKC5mgBA_xSU',
  authDomain: 'notemanager-14ad6.firebaseapp.com',
  databaseURL: 'https://notemanager-14ad6.firebaseio.com',
  projectId: 'notemanager-14ad6',
  storageBucket: 'notemanager-14ad6.appspot.com',
  messagingSenderId: '531802169368',
  appId: '1:531802169368:web:157acb9a8c05aeff71636d',
  measurementId: 'G-W0TFRL0M27'
}
const app = firebase.initializeApp(config)
const db = firebase.database()

export { app, db }
