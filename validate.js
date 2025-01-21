function checkdata()
    {
        var username = document.getElementById("name");
        var emailid = document.getElementById("email");
    }
    if(username.value==""){
        alert("Please enter your name");
        username.focus();
        return false;
    }
    if(emailid.value==""){
        alert("Please enter your email");
        emailid.focus();
        return false;

        return true;
    }

