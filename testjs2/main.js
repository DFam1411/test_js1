const id = document.getElementById('user_id');
console.log(id)

const signInObject = {
    username: ``,
    email: ``,
    password: ``
}

if(signInObject.username.length==0){

}
function formSubmitted(){
    if(id.value.length==0){
        id.style.borderColor = 'red';
    }
}

const objectTest = {
    username: ``,
    email: ``,
    password: ``
}
function checkUsername() {
    const uName = document.getElementById('user_id');

    if(uName.value.length >0){
        uName.style.font = 'Arial';
    }
}
/*
function ValidateEmail()
{
    const mailValidate = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailValidate.value))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
 */
function checkPass(){
    const pass = document.getElementById('passID');
    const colorOK = "#AAEBA8";
    const colorNotOK = "red";
    const message = document.getElementById('error');
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(pass.value.length ==0){
        pass.style.backgroundColor = '#F6F0F8'
    }
        if (pass.value.length >= 8) {
            pass.style.backgroundColor = colorOK;
            pass.style.color = '#000'
            pass.style.font = 'large';
            message.style.color = '#000';
            message.style.font = 'large';
            message.innerHTML = "password is strong enough";
        } else {
            pass.style.color = colorNotOK;
            message.style.color = '#000';
            message.style.font = 'large';
            message.innerHTML = 'please, make sure your password is at least 8 symbols';
        }
    }

function usernameStoring() {
    let username1 = document.getElementById('user_id').value;
    alert(username1);
    objectTest.username = username1;
}
function emailStoring() {
    let email1 =document.getElementById('email').value;
    alert(email1);
    objectTest.email = email1;
}
function passStoring() {
    let password1 =document.getElementById('passID').value;
    alert(password1);
    objectTest.password = password1;
}



/*
document.getElementById('account').innerHTML = objectTest.username +' '+objectTest.email+' '+objectTest.password;
*/

