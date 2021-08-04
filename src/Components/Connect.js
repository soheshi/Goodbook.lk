import React from "react"

function LoginFire(){
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    firebase.auth().signInWithUserNameAndPassword(Username,Password).catch(function(error){
        //Handle Errors here.value
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: "+errorMessage);
        //...
    });
    alert("login success")
}





