import { initializeApp } from "firebase/app";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
  apiKey: "As",
  authDomain: "tcm",
  projectId: "tcd",
  storageBucket: "tcm",
  messagingSenderId: "6096",
  appId: "19",
  measurementId: "GT",
};

const firebaseApp = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

export const requestForToken = (setTokenFound, setToken) => {
  return getToken(messaging, {
    vapidKey:
      "BQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("token atual: ", currentToken);
        setTokenFound(true);
        setToken(currentToken);
      } else {
        console.log("Falta permissao");
      }
    })
    .catch((err) => console.log("Um erro aconteceu - ", err));
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
