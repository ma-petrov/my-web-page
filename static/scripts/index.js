const ABOUT_ME = 0;
const CV = 1;

const about_me = document.querySelector('#about-me');
const cv = document.querySelector('#cv');

let prevScrollTop = window.pageYOffset;
let containerId = 0;

function setScrollTop(containerId) {
    prevScrollTop = document.documentElement.clientHeight * containerId;
    window.scroll({top: prevScrollTop, behavior: "smooth"});
}

function scrollPage() {
    const threshold = Math.floor(document.documentElement.clientHeight/5);
    const scrollTop = window.pageYOffset;
    const scrollDelta = scrollTop - prevScrollTop;
    console.log(`height: ${threshold}, scrollTop: ${scrollTop}, scrollDelta: ${scrollDelta}`);
    if (scrollDelta > threshold) {
        containerId += 1;
    }
    else if (scrollDelta < -threshold) {
        containerId -= 1;
    }
    setScrollTop(containerId)
}


let lastScrollTime = new Date();


document.addEventListener("scroll", () => {
    lastScrollTime = new Date();
    setTimeout(() => {
        let currentTime = new Date();
        if (currentTime - lastScrollTime > 90) { 
            document.dispatchEvent(new Event("scrollend", {bubbles: true}));
        }
    }, 100);
});


document.addEventListener("scrollend", scrollPage);
document.addEventListener("touchend", scrollPage);
document.querySelector("#open-aboutme-button").addEventListener("click", () => {
    if (containerId != ABOUT_ME) {
        containerId = ABOUT_ME;
        about_me.style.top = "0px";
        cv.style.top = "100vh";
    }
});

document.querySelector("#open-cv-button").addEventListener("click", () => {
    if (containerId != CV) {
        containerId = CV;
        about_me.style.top = "-100vh";
        cv.style.top = "0px";
    }
});