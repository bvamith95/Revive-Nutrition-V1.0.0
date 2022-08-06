import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWZ8CMUyBhoEcF_9Mqs5XVv0J47U3L-vI",
    authDomain: "revive-nutrition-db.firebaseapp.com",
    projectId: "revive-nutrition-db",
    storageBucket: "revive-nutrition-db.appspot.com",
    messagingSenderId: "757848961028",
    appId: "1:757848961028:web:2a06e6d8158d88ddbcc551"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.goal.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done with goal');
};


export const addQuestionsAndAnswers = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.category.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done with questions');
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'goals');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { goal, items } = docSnapshot.data();
    acc[goal.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const getQuestionsAndAnswers = async () => {
  const collectionRef = collection(db, 'quiz_questions');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const questionsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { category, questions } = docSnapshot.data();
    acc[category.toLowerCase()] = questions;
    return acc;
  }, {});
  return questionsMap;
};



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
  ) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user',error.message);
      }
    }

    return userDocRef;
};



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback )=> onAuthStateChanged(auth, callback);


//PUSH QUIZ USER DATA 
export const createQuizUserDocument = async(quizUser) =>{
    await addDoc(collection(db, "quizUserData"), quizUser); 

}