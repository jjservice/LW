
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBDffMAaJdgb1_Xsfa4zhoYLYAhxmrZVo",
    authDomain: "contact-form-9868a.firebaseapp.com",
    databaseURL: "https://contact-form-9868a-default-rtdb.firebaseio.com",
    projectId: "contact-form-9868a",
    storageBucket: "contact-form-9868a.firebasestorage.app",
    messagingSenderId: "686565340119",
    appId: "1:686565340119:web:8cbc0e2cfc7772af449192"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Redirect to another page after the form submission
    setTimeout(() => {
      window.location.href = "https://jjservice.github.io/L2/1.html";  // Replace with your desired URL
    }, 3000); // Delay to allow alert to disappear before redirecting
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  



  ////Light Section/////

  function toggleLight(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
  }
