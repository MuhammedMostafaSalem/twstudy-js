// start courses-section

let tabContent = Array.from(document.querySelectorAll('.tab-content .tab-pane'));
//let tabContent = Array.from(document.querySelectorAll('.nav .nav-link'));


let tabCount = tabContent.length;

let currentContent = 1;

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

// prevButton.onclick = prevPagination;
if(prevButton) {
    prevButton.addEventListener('click' , prevPagination)
}
// nextButton.onclick = nextPagination;
if(nextButton) {
    nextButton.addEventListener('click' , nextPagination)
}

// create the main ul elemet (pagination)
let paginationElement = document.createElement("ul");
// set id on created ul elemet
// paginationElement.setAttribute("id" , "pagination-ul");
if(paginationElement) {
    paginationElement.setAttribute("id" , "pagination-ul");
}


// create li based on slide count
for(let i = 1 ; i <= tabCount ; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("date-index" , i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

// add the created ul element to the page
// document.getElementById("indicators").appendChild(paginationElement);
let indicators = document.getElementById("indicators");
if(indicators) {
    indicators.appendChild(paginationElement);
}
// get the new created ul
let paginationCreateUl = document.getElementById("pagination-ul");


//  get pagination items
let paginatiosnUlBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
// loop through all bullets items
for(let i = 0 ; i < paginatiosnUlBullets.length ; i++) {
    paginatiosnUlBullets[i].onclick = function () {
        currentContent = parseInt(this.getAttribute("date-index"));

        checker();
    }
}

checker();


function prevPagination() {
    if(prevButton.classList.contains('disabled')) {
        return false;
    }
    else {
        currentContent--;
        checker();
    }
}

function nextPagination () {
    if(nextButton.classList.contains('disabled')) {
        return false;
    }
    else {
        currentContent++;
        checker();
    }
}




// craete checker function
function checker() {
    removeAllActive();
    // tabContent[currentContent - 1].classList.add('active');
    let checkTabContent = tabContent[currentContent - 1];
    if(checkTabContent) {
        checkTabContent.classList.add('active');
    }
    // set active class on current pagination item    |    علشان تخليه يركز بكلاس الاكتيف على ال ال ااي
    // paginationCreateUl.children[currentContent - 1].classList.add('active');
    let checkPagin = paginationCreateUl;
    if(checkPagin) {
        checkPagin.children[currentContent - 1].classList.add('active');
    }

// check if current slide is the first
    if(currentContent == 1) {
        // prevButton.classList.add('disabled');
        if(prevButton) {
            prevButton.classList.add('disabled');
        }
    }
    else{
        prevButton.classList.remove('disabled');
    }

// check if current slide is the last
    if(currentContent == tabCount) {
        nextButton.classList.add('disabled');
    }
    else{
        // nextButton.classList.remove('disabled');
        if(nextButton) {
            nextButton.classList.remove('disabled');
        }
    }
}

// remove all active classes from courses-section and ul>li
function removeAllActive() {
    tabContent.forEach(element => {
        element.classList.remove('active');
    });
    paginatiosnUlBullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}
// end courses-section







// start course preview video


function coursePreviewVideo() {
    let myModalEl = document.getElementById('video-model')
    if(myModalEl) {
        myModalEl.addEventListener('shown.bs.modal', function (event) {
            event.querySelector('.video-preview').play();
            event.querySelector('.video-preview').currentTime = 0 ;
        });

    }
    else {
        myModalEl.addEventListener('hide.bs.modal', function (e) {
            e.querySelector('.video-preview').pause();
        });
    }
}


// end course preview video



















// select toggle from log-in section to sign-up section

        // form message
setFormMessage=(formElement, type, message) =>{
    const messageElement = formElement.querySelector('.form-message');
    messageElement.textContent = message;
    messageElement.classList.remove('form-message--success' , 'form-message--error');
    messageElement.classList.add(`form_message--${type}`);
}
// setFormMessage(loginForm, 'success', "you're loged in !");

setInputError=(inputElemet, message) => {
    inputElemet.classList.add('form-input-error');
    inputElemet.parentElement.querySelector('.form__input-error-message').textContent = message;
}


clearInputError=(inputElemet) => {
    inputElemet.classList.remove('form-input-error');
    inputElemet.parentElement.querySelector('.form__input-error-message').textContent = '';
}






let loginForm = document.querySelector('#login');
let createAccountForm = document.querySelector('#createAccount');

let linkCreateAccount = document.querySelector("#linkCreateAccount");
let linkLogin = document.querySelector("#linkLogin");

if(linkCreateAccount) {
    linkCreateAccount.addEventListener("click" , e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
}

if(linkLogin) {
    linkLogin.addEventListener("click" , e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
}









// subbmit error in logIn & logUp
if(loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
    
        // perform your AJAX / Fetch login
        setFormMessage(loginForm, 'error', "incorrect username or password.");
    });
}
if(createAccountForm) {
    createAccountForm.addEventListener('submit', e => {
        e.preventDefault();
    
        // perform your AJAX / Fetch login
        setFormMessage(createAccountForm, 'error', "incorrect username or password.");
    });
}



// start logIn
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'logUserName' && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElemet, 'Username must be at least 10 characters in length');
        }
    });
        inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'passwordError' && e.target.value.length > 0 && e.target.value.length < 13) {
            setInputError(inputElemet, 'The password is incorrect');
        }
    });
        inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
// end logIn


// start signUp
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'logFullName' && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElemet, 'Fullname must be at least 10 characters in length');
        }
    });
        inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'logEmail' && e.target.value.length > 0 && e.target.value.length < 24) {
            setInputError(inputElemet, 'E-mail Address must be at least 24 characters in length');
        }
    });
    inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'logPassword' && e.target.value.length > 0 && e.target.value.length < 24) {
            setInputError(inputElemet, 'The password must be at least 12 characters or numbers in length');
        }
    });
    inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
document.querySelectorAll('.form-input').forEach(inputElemet => {
    inputElemet.addEventListener('blur', e => {
        if(e.target.id === 'logConfirm-Password' && e.target.value.length > 0 && e.target.value.length < 24) {
            setInputError(inputElemet, 'Password does not match');
        }
    });
    inputElemet.addEventListener('input', e=> {
        clearInputError(inputElemet);
    })
});
//end signUp