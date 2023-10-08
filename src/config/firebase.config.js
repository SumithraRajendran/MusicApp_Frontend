import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHr79y0tig-LiLhv6M_LEfglW78M3peO4",
  authDomain: "projectmusic-app.firebaseapp.com",
  projectId: "projectmusic-app",
  storageBucket: "projectmusic-app.appspot.com",
  messagingSenderId: "387515454973",
  appId: "1:387515454973:web:9b018315b3c059aa5f3594",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
