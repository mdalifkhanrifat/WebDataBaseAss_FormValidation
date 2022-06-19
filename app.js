const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email validation
function checkEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,"Email is not valid");
    }
}
// check input  length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less then ${min} characters`);
    }
    else{
        showSuccess(input);
    }
}

// Check password match
function checkPasswordMatch(input1,input2){
    if(input1!==input2){
        showError(input2,"Password Not Match");
    }
}

// check requied
function checkRequired(inputarr){
    inputarr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is retuire`);
        }
        else{
            showSuccess(input);
        }
    })
}

// Get File Name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit',
function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,8,32);
    checkEmail(email);
    checkPasswordMatch(password,password2);

})