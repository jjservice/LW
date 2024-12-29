import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAoYFWAmoJJCDcfcnOncKgimEv3ynVF_ak",
    authDomain: "log-reg-3335e.firebaseapp.com",
    projectId: "log-reg-3335e",
    storageBucket: "log-reg-3335e.firebasestorage.app",
    messagingSenderId: "449562064667",
    appId: "1:449562064667:web:52db498443a55ebcf145be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// DOM elements for login and signup
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// Authentication state listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        // If the user is logged in, redirect to the desired page on another website
        window.location.href = "https://jjservice.github.io/L2/1.html";  // Adjust to the desired page for logged-in users
    }
});

// Create account
createacctbtn.addEventListener("click", function() {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail !== confirmSignupEmail) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signupPassword !== confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    if (signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    if (isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                window.alert("Account created. Log in & have fun!");
                // Redirect to another page after successful sign up
                window.location.href = "https://jjservice.github.io/LW/w.html"; // Adjust to your desired page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("Error occurred. Try again.");
            });
    }
});

// Login
submitButton.addEventListener("click", function() {
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Welcome to Lollipop!");
            window.alert("Welcome to Lollipop! Press 'OK' to continue...");
            // Redirect to another page after successful login
            window.location.href = "https://jjservice.github.io/L2/1.html";  // Adjust to the desired page
        })
        .catch((error) => {
            console.log("Error occurred. Try again.");
            window.alert("Error occurred. Try again.");
        });
});

// Show sign up form when "Sign Up" button is clicked
signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});

// Return to login form
returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display = "none";
});

// Automatically log out the user when the window is about to close
window.onbeforeunload = function() {
    const user = auth.currentUser;
    if (user) {
        signOut(auth)
            .then(() => {
                console.log("User logged out due to window close.");
            })
            .catch((error) => {
                console.log("Error occurred during logout: ", error);
            });
    }
};
