function checkNameandEmail(frm){
    if (frm.firstName.value == "") {
        alert("You did not enter your name")
    }else if (frm.email.value == "") {
        alert("You did not enter your email address")
    }else {
        alert("Name: " + frm.firstName.value,
        "Email: " + frm.email.value)
    }
}

function cardspace(){
    var carddigit = document.getElementById('cardno').value;
    if(cardigit.length == 4 || cardigit.length == 9 || carddigit.length == 14){
        document.getElementById('cardno').value = carddigit+" ";
        document.getElementById('cardno').max = 1;
    }
}

function addSlashes(){
    var expiredate = document.getElementById('validtill').value;
    if(expiredate.length == 2){
        document.getElementById('validtill').value = expiredate+"/ ";
        document.getElementById('validtill').max = 1;
    }
}