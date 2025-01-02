import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoYFWAmoJJCDcfcnOncKgimEv3ynVF_ak",
  authDomain: "log-reg-3335e.firebaseapp.com",
  projectId: "log-reg-3335e",
  storageBucket: "log-reg-3335e.firebasestorage.app",
  messagingSenderId: "449562064667",
  appId: "1:449562064667:web:52db498443a55ebcf145be",
  measurementId: "G-1V39TEVDM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en-US';
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

const googleLogin = document.getElementById("google-sign-in");
googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token.
      const user = result.user;
      console.log(user); // Log user details

      // Redirect after successful sign-in
      window.location.href = "https://jjservice.github.io/L2/1.html"; // Change URL if necessary
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error code: ${errorCode}, message: ${errorMessage}`);
    });
});
