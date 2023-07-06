const fullNameElement = document.getElementById('fullName');
const emailIdElement = document.getElementById('emailId');
const phoneNumberElement = document.getElementById('phoneNumber');
const passwordElement = document.getElementById('password');
const addElement = document.getElementById('add');

function signup() {
    console.log(fullNameElement.value, emailIdElement.value, passwordElement.value, phoneNumberElement.value , addElement.value);
    let data = {
        fullName: fullNameElement.value,
        email: emailIdElement.value,
        password: passwordElement.value,
        phoneNumber:phoneNumberElement.value,
        add: addElement.value
    }
    axios.post('http://localhost:3001/signup',data).then((result) => {
        console.log(result);
        alert(result.data.message);
        document.getElementById('fullName').value='';
        document.getElementById('emailId').value='';
    }).catch((err) => {
        console.log(err);
    });
}


