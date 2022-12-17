function signUp(e){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var flname = document.getElementById('flname').value;
    var pwd = document.getElementById('pwd').value;

    var formData = {
        email: email,
        flname: flname,
        pwd: pwd,
    };
    var json = JSON.stringify(formData);
    localStorage.setItem(flname, json);
    alert('well done');
}
function loginfunc(e) {
event.preventDefault();
    var flname = document.getElementById('flname').value;
    var pwd = document.getElementById('pwd').value;
    var result = document.getElementById('result');

    var name = localStorage.getItem(flname);
    var data = JSON.parse(name);
    if (name == null) {
        result.innerHTML= "correct your username plz!!!";
    }
    else if (flname == data.flname && pwd == data.pwd) {
        window.location.href = "dashBoard.html";
    }
    else {
        result.innerHTML = "correct your password plz!!!";
    }
}