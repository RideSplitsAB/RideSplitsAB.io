import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";  
// No need to re-initialize app and auth here if they are imported
import {auth} from "./register.js";

const submitSignIn = document.querySelector("#submitSignIn");
submitSignIn.addEventListener("click", function(event){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    event.preventDefault();
    signInWithEmailAndPassword( auth, email, password)
    .then((userCredential) => {
        // Signed In 
        const user = userCredential.user;
        alert("Signed into account!")
        window.location.href = "success.html";
    })
    .catch((error) => {
        alert(errorMessage)
    });
})