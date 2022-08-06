const aboutMe = document.getElementById("about-me");
const cv = document.getElementById("cv");
document.body.classList.add("scroll-turned-off");

document.getElementById("open-cv-button").addEventListener("click", () => {
    aboutMe.style.top = "-100vh";
    cv.style.top = "0vh";
    document.body.classList.remove("scroll-turned-off");
});

document.getElementById("close-cv-button").addEventListener("click", () => {
    aboutMe.style.top = "0vh";
    cv.style.top = "100vh";
    document.body.classList.add("scroll-turned-off");
    cv.querySelectorAll(".cv-transition-wrapper-h1").forEach(item => {item.classList.add("cv-transition-h1")});
    cv.querySelectorAll(".cv-transition-wrapper-p").forEach(item => {item.classList.add("cv-transition-p")});
});

function boserverFabric(items, transitionClassName) {
    items.forEach(item => {
        item.classList.add(transitionClassName);
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    item.classList.remove(transitionClassName);
                }
                else {
                    // item.classList.add(transitionClassName);
                }
            });
        });
        observer.observe(item);
    });
}

boserverFabric(cv.querySelectorAll(".cv-transition-wrapper-h1"), "cv-transition-h1");
boserverFabric(cv.querySelectorAll(".cv-transition-wrapper-p"), "cv-transition-p");



