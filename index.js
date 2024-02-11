/*function myFunction(){
var at = document.getElementById("email").value.indexOf("@");



if (at === 0){
    document.getElementById("email").style.border = "2px solid green"
} else{
    document.getElementById("email").style.border = "2px solid red" 
}

}*/

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
function submitted(){
    if(email.value.length < 9){
        email.style.border = "2px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "2px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    
}

function email_Verify(){
    if( email.length.value >= 8){
        email.style.border = "2px solid green";
        email_error.style.display = "none";
        
        return true;
    }
}
function pass_Verify(){
    if( password.length.value >= 8){
        password.style.border = "2px solid green";
        pass_error.style.display = "none";
        
        return true;
    }
}