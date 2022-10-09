const ABOUT_ME = 1;
const CV = 2;

const aboutMe = document.getElementById("about-me");
const cv = document.getElementById("cv");

let currentPage = ABOUT_ME;
let ticking = false;
let lastKnownScrollPosition = 0;

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

document.getElementById("open-cv-button").addEventListener("click", openCvPage);
document.getElementById("close-cv-button").addEventListener("click", closeCvPage);
document.addEventListener("wheel", (e) => {scroll(e.wheelDeltaY)});
myBlock.addEventListener("swipe", function() {
    window.alert(e.detail);
});

// document.addEventListener("scroll", () => {
//     lastKnownScrollPosition = window.scrollY;
//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             console.log(`aboutMe scroll position: ${lastKnownScrollPosition}`);
//             setTimeout(() => {ticking = false;}, TIMEOUT);
//         });
//         ticking = true;
//     }
// });

// document.addEventListener("scroll", () => {
//     lastKnownScrollPosition = window.scrollY;
//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             console.log(`cv scroll position: ${lastKnownScrollPosition}`);
//             setTimeout(() => {ticking = false;}, TIMEOUT);
//         });
//         ticking = true;
//     }
// });