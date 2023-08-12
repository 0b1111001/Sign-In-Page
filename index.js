function changeType(){
    let inputField=document.getElementById("password");
    let status=document.getElementById("status");
    if(inputField.type=="password"){
        inputField.type="text";
        status.innerHTML="<i class='bx bxs-lock-open-alt' id='bx bxs-lock-open-alt' onclick='changeType()'></i>";
    }
    else{
        inputField.type="password";
        status.innerHTML="<i class='bx bxs-lock-alt' id='bx bxs-lock-alt' onclick='changeType()'></i>";
    }
}