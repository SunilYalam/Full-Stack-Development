function matchPassword(){
    let a = document.getElementById("password").value;
    let b = document.getElementById("confirm").value;
    if(a === b){
        document.getElementById('demo').innerHTML = "Password Matched";
        console.log("Password Validation Successful");
    } else {
        document.getElementById('demo').innerHTML = "Password didn't Match";
        console.log("Password Validation Unsuccessful");
    }

}