import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js"; 
 
const firebaseConfig = {
    apiKey: "AIzaSyAbUsBSHai95VAmDsMn1Bf1RfFcPEkwStQ",
    authDomain: "ride-splits.firebaseapp.com",
    databaseURL: "https://ride-splits-default-rtdb.firebaseio.com",
    projectId: "ride-splits",
    storageBucket: "ride-splits.firebasestorage.app",
    messagingSenderId: "493072368751",
    appId: "1:493072368751:web:68b46104879ebea70ff99a",
    measurementId: "G-RTDTHM32Q2"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
        
        // Make Firebase available globally for debugging
        window.firebaseApp = app;
        window.firebaseAnalytics = analytics;
        
        // Test Firebase connection
        console.log('🔥 Second Firebase Project Connected Successfully!');
        console.log('📊 Analytics enabled:', analytics ? 'YES' : 'NO');
        console.log('🔑 Project ID:', app.options.projectId);
        console.log('🌐 Domain:', app.options.authDomain);
        console.log('🗄️ Database URL:', app.options.databaseURL);
        
        // Test analytics (this will actually send data to the second Firebase project)
        try {
          analytics.logEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href
          });
          console.log('✅ Analytics event sent to second Firebase project!');
        } catch (error) {
          console.error('❌ Analytics error:', error);
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