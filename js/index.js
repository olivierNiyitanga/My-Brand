let popup = document.querySelector('.popup');
let button = document.querySelector('.popup button');
const validation = () => {
    if (document.formfill.username.value == "") {
        const user = document.getElementById("result");
        user.innerHTML = "Enter username*";
        user.style.display = 'block';
        return false;
    }
    else if (document.formfill.username.value.length <= 6) {
        const username = document.getElementById("result");
        username.innerHTML = "username must have 6 letters!";
        username.style.display = 'block';
        return false;
    }
    else if (document.formfill.email.value == "") {
        const mail = document.getElementById("result");
        mail.innerHTML = "Enter your email*";
        mail.style.display = 'block';
        return false;
    }
    else if (document.formfill.password.value == "") {
        const pwd = document.getElementById("result");
        pwd.innerHTML = "Enter your password";
        pwd.style.display = 'block';
        return false;
    }


    else if (document.formfill.password.value.length < 6) {
        const pscode = document.getElementById("result");
        pscode.innerHTML = "password must be 6-digit";
        pscode.style.display = 'block';
        return false;
    }
    else if (document.formfill.cpassword.value == "") {
        const comfPassword = document.getElementById("result");
        comfPassword.innerHTML = " Enter confirm password";
        comfPassword.style.display = 'block';
        return false;
    }
    else if (document.formfill.cpassword.value !== document.formfill.password.value) {
        const mPasscode = document.getElementById("result");
        mPasscode.innerHTML = "Password does not match";
        mPasscode.style.display = 'block';
        return false;
    }
    else if (document.formfill.password.value == document.formfill.cpassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
    validation.reset();
}
const onclose = () => {
    popup.classList.remove("open-slide");
}

