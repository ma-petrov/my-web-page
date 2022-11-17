const ABOUT_ME = 0;
const CV = 1;


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
// document.getElementById("open-aboutme-button").addEventListener("click", () => {if (containerId != ABOUT_ME) {setScrollTop(ABOUT_ME);}});
// document.getElementById("open-cv-button").addEventListener("click", () => {if (containerId != CV) {setScrollTop(CV);}});