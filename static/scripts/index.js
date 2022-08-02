const aboutMe = document.getElementById("about-me");
const cv = document.getElementById("cv");

document.getElementById("open-cv-button").addEventListener("click", () => {
    aboutMe.style.top = "-100vh";
    cv.style.top = "0vh";
});

document.getElementById("close-cv-button").addEventListener("click", () => {
    aboutMe.style.top = "0vh";
    cv.style.top = "100vh";
});