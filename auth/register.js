import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";  

const firebaseApp = {
    // Replace with your Firebase configuration

};

// Initialize Firebase
const app = initializeApp(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
     
const submitSignUp = document.querySelector("#submitSignUp");

submitSignUp.addEventListener("click", function(event){
    const email = document.getElementById("Remail").value;
    const password = document.getElementById("Rpassword").value;
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Creating account")
        window.location.href = "success.html";
    })
    .catch((error) => {
        alert(errorMessage)
    });
})

export { app, auth };