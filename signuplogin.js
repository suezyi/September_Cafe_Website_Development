//check if the form has been submitted by looking query parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('submitted')){
    document.getElementById('formContainer').classList.add('submitted');
}



function showLoginMessage(){
    var x = document.forms["logInForm"]["usernmormail"].value;
        if (x == false) {
            alert("Username or Email must be filled!")
        }
        else{
            alert("Welcome Back!");
        }
    }


function showSignupMessage(){
    var e = document.forms["signUpForm"]["email"].value;
    var n = document.forms["signUpForm"]["username"].value;
    var d = document.forms["signUpForm"]["dob"].value;
    var p = document.forms["signUpForm"]["password"].value;
    var cp = document.forms["signUpForm"]["copassword"].value;
    if (e == false) {
            alert("Email must be filled!"); 
        }
    else if (n == false) {
        alert("Name must be filled!"); 
    }

    else if (d == false) {
        alert("Date of Birth must be filled!"); 
    }

    else if (p == false) {
        alert("Password must be filled!"); 
    }
    
    else if (cp != p) {
        alert("Password incorrect!"); 
    }

    else{
        alert("Welcome!\nDancing in September never was a cloudy day!");
    }
}