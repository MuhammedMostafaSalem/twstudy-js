let body = document.body;
// localStorage

let mainColors = localStorage.getItem('color-choose');
body.style.background = mainColors;


console.log(mainColors)
if(mainColors ) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color-choose'));

    // remove active class from all colors li
    document.querySelectorAll('.theme-colors button').forEach(function (element) {
        element.classList.remove('active');

        if (element.dataset.color === mainColors) {
            element.classList.add('active');
        }
    });
}


// theme-colors
let themeColors = document.querySelectorAll('.theme-colors button');
themeColors.forEach(function (event) {
    event.addEventListener('click' , function(e) {
        console.log(e.target.dataset.color);
        let color = e.target.dataset.color;

        document.documentElement.style.setProperty('--main-color', color);
        body.style.background = color;

        localStorage.setItem('color-choose', color);
        // remove active class from all child
        e.target.parentElement.querySelectorAll('.active').forEach(function (element) {
            element.classList.remove('active');
        });
        // add active class
        e.target.classList.add('active');
    });
});





// selet style-switcher
let styleSwitcher = document.querySelector('.style-switcher');
let styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
let icon = document.querySelector('.fa-solid');

function styleSwitcherToggler() {
    styleSwitcherToggle.addEventListener('click' , function() {
        styleSwitcher.classList.toggle('open');
        icon.classList.toggle('fa-xmark');
    });
}styleSwitcherToggler();
















// theme dark effect

//We're going to use "check" to get the ckeckbox element
let darkModeCkeckBox = document.querySelector('.js-darkMode');

//If darkMode doesn’t exist in the LocalStorage, create it. False by default

if(localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode' , 'false');
}


//checkStatus is only called one time in the program, when you reload the page
//It gives the page it's default look, depening on waht darkMode is set to
checkStatus();

function checkStatus() {
    if(localStorage.getItem('darkMode') === "true") {
        darkModeCkeckBox.checked = true;                    //the checkbox is checked (if you load the page by default it isn’t)
        document.body.classList.add('t-dark');
    }
    else {
        darkModeCkeckBox.checked = false;
        document.body.classList.remove('t-dark');
    }
}


function changeStatus(){                                            //This function gets called every time the checkbox is clicked
    if (localStorage.getItem('darkMode')==="true"){                 //if darkMode was active and this function is called it means the user now wants light
        localStorage.setItem('darkMode', "false");                  //so we set it to false, to indicate we are in light mode
        document.body.classList.remove('t-dark')
    } else{
        localStorage.setItem('darkMode', "true");                   //same code but adapted for dark theme
        document.body.classList.add('t-dark')
    }
}
















// theme glass effect
