import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTyM35RxVniq5Z0JA_13O8ghXteJPzW-U",
  authDomain: "login-4e384.firebaseapp.com",
  projectId: "login-4e384",
  storageBucket: "login-4e384.firebasestorage.app",
  messagingSenderId: "236195241032",
  appId: "1:236195241032:web:d4fe01209b39279cb70c7d",
  measurementId: "G-5PCCK6PMXF"
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
      window.location.href = "./GoSuccessL.html"; // Change URL if necessary
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error code: ${errorCode}, message: ${errorMessage}`);
    });
});
