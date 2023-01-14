let reviewsTab = document.querySelector(".reviewsTab").addEventListener("click", move);
let i = 0;
function move() {
    if (i == 0) {
        let progressBar = document.querySelectorAll(".progress-bar");
        let width = 1;
        i = 1;
        progressBar.forEach(element => {
            console.log(element.nextElementSibling.textContent);
            let id = setInterval(frame, 100);
            function frame() {
                if(width >= element.nextElementSibling.textContent) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width ++;
                    element.style.width = width + '%';
                }
            }
        });
    }
}