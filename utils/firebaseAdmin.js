const admin = require("firebase-admin");
const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// Initialize Firebase Admin SDK
initializeApp({
  credential: applicationDefault(),  // This automatically reads the file path from GOOGLE_APPLICATION_CREDENTIALS
});

const db = getFirestore();

module.exports = { admin, db };
