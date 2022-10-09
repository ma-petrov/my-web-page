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

function scroll(deltaY) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            switchPage(deltaY);
            ticking = false;
        });
        ticking = true;
    }    
}

function getY(e) {
    let touches = e.touches || e.originalEvent.touches;
    return touches[0].clientY;
}                                              
                                                                         
function handleTouchStart(e) {          
    touchY = getY(e);
};                                                
                                                                         
function handleTouchMove(e) {
    if (!touchY) {
        return;
    }
    let deltaY = getY(e) - touchY;
    if (Math.abs(deltaY) > 15) {
        scroll(deltaY);
    }
    touchY = null;                                             
};

document.getElementById("open-cv-button").addEventListener("click", openCvPage);
document.getElementById("close-cv-button").addEventListener("click", closeCvPage);
document.addEventListener("wheel", () => {scroll(e.wheelDeltaY);});
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);