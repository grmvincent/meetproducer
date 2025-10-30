import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTjElYvysl_vdsCUiERPGp2nhDCkCFbTo",
  authDomain: "meetproducer.firebaseapp.com",
  projectId: "meetproducer",
  storageBucket: "meetproducer.firebasestorage.app",
  messagingSenderId: "10636837609",
  appId: "1:10636837609:web:1fbe9fe681b4eb11276678",
  measurementId: "G-9C6HF8QZRE",
};

// Initialiser Firebase (évite les initialisations multiples)
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Fonction pour obtenir Analytics (uniquement côté client)
export const getFirebaseAnalytics = (): Analytics | null => {
  if (typeof window !== "undefined") {
    return getAnalytics(app);
  }
  return null;
};

export default app;

