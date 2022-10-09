const ABOUT_ME = 1;
const CV = 2;

const aboutMe = document.getElementById("about-me");
const cv = document.getElementById("cv");

let currentPage = ABOUT_ME;
let ticking = false;                      
let touchY = null;

function openCvPage() {
    if (currentPage == ABOUT_ME) {
        aboutMe.style.top = "-100vh";
        cv.style.top = "0vh";
        currentPage = CV;
    }
}

function closeCvPage() {
    if (currentPage == CV) {
        aboutMe.style.top = "0vh";
        cv.style.top = "100vh";
        currentPage = ABOUT_ME;
    }
}

function switchPage(scrollDelta) {
    if (scrollDelta < 0) {
        openCvPage();
    }
    else {
        closeCvPage();
    }
}

function handleWheel(e) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            switchPage(e.wheelDeltaY);
            ticking = false;
        });
        ticking = true;
    }    
}

function getTouches(e) {
    return e.touches || e.originalEvent.touches;
}                                              
                                                                         
function handleTouchStart(e) {          
    touchY = getTouches(e)[0].clientX;
};                                                
                                                                         
function handleTouchMove(e) {
    if (!touchY) {
        return;
    }              
    let yDiff = touchY - e.touches[0].clientY;
    window.alert(yDiff);
    touchY = null;                                             
};

document.getElementById("open-cv-button").addEventListener("click", openCvPage);
document.getElementById("close-cv-button").addEventListener("click", closeCvPage);
document.addEventListener("wheel", handleWheel);
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);