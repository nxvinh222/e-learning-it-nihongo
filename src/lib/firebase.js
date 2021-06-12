import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8TyORf6Pqf-hzweMPhs_z9No0CRYf1RI",
  authDomain: "e-learning-58485.firebaseapp.com",
  projectId: "e-learning-58485",
  storageBucket: "e-learning-58485.appspot.com",
  messagingSenderId: "6499943453",
  appId: "1:6499943453:web:6bf0db5a0d7871510472f4",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
};

export const addFirebaseTest = async (item) => {
  try {
    const todoRef = db.collection("tests");
    await todoRef.add(item);
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

export const getFirebaseItems = async () => {
  try {
      const snapshot = await db
          .collection("tests")
          .get();
      const items = snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id })
      );
      return items;
  } catch (err) {
      console.log(err);
      return [];
  }
};

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("tests");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("tests").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("tests").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};
