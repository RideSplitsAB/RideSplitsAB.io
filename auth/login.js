import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js"; 

// Note: This file needs to be loaded after config.js in the HTML
// Firebase configuration for the second project (ride data)
const firebaseConfig = {
  apiKey: "{{FIREBASE_API_KEY_SECOND}}",
  authDomain: "{{FIREBASE_AUTH_DOMAIN_SECOND}}",
  databaseURL: "{{FIREBASE_DATABASE_URL_SECOND}}",
  projectId: "{{FIREBASE_PROJECT_ID_SECOND}}",
  storageBucket: "{{FIREBASE_STORAGE_BUCKET_SECOND}}",
  messagingSenderId: "{{FIREBASE_MESSAGING_SENDER_ID_SECOND}}",
  appId: "{{FIREBASE_APP_ID_SECOND}}",
  measurementId: "{{FIREBASE_MEASUREMENT_ID_SECOND}}"
};
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
        
        // Firebase initialized (not exposed globally for security)
        
        // Second Firebase Project Connected Successfully
        console.log('🔥 Second Firebase Project Connected Successfully!');
        
        // Test analytics (this will actually send data to the second Firebase project)
        try {
          if (analytics && typeof analytics.logEvent === 'function') {
            analytics.logEvent('page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
            console.log('✅ Analytics event sent to second Firebase project!');
          } else {
            console.log('📊 Analytics available but logEvent method not found');
          }
        } catch (error) {
          console.log('📊 Analytics error:', error.message);
        }
    
    //    *** Commentted out code to prevent new users ***  //
    // 
// const submitSignIn = document.querySelector("#submitSignIn");
// submitSignIn.addEventListener("click", function(event){
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     event.preventDefault();
//     signInWithEmailAndPassword( auth, email, password)
//     .then((userCredential) => {
//         // Signed In 
//         const user = userCredential.user;
//         alert("Signed into account!")
//         window.location.href = "success.html";
//     })
//     .catch((error) => {
//         alert(errorMessage)
//     });
// })