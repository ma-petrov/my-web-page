/* Tabs controll */

const tabs = document.getElementsByClassName("data");
const tabSwitches = document.getElementsByClassName("topbar-element");

function activateTabsSwitch(ts) {
    ts.style.color = "var(--accent-color)";
    ts.style.borderBottom = "3px solid var(--accent-color)";
}

function deactivateTabsSwitch(ts) {
    ts.style.color = "var(--text-color)";
    ts.style.borderBottom = "3px solid transparent";
}

function activateTab(t) {
    t.style.display = "block";
}

function deactivateTab(t) {
    t.style.display = "none";
}

function switchTabs(currentTabSwitchId) {
    [...tabSwitches].forEach(ts => {
        console.log(`${currentTabSwitchId} ? ${ts.id}`);
        if (currentTabSwitchId == ts.id) {
            activateTabsSwitch(ts);
        }
        else {
            deactivateTabsSwitch(ts);
        }
    });

    currentTabId = `${currentTabSwitchId}-data`;
    [...tabs].forEach(t => {
        if (currentTabId == t.id) {
            activateTab(t);
        }
        else {
            deactivateTab(t);
        }
    });
}

[...tabSwitches].forEach(tabsSwitch => {
    tabsSwitch.addEventListener("click", (e) => {
        switchTabs(e.target.id);
    });
});



/* Resizing */

const centerColumnContainer = document.getElementsByClassName("container");
const avatar = document.getElementById("avatar");

function setCenterColumnContainersWidth(width) {
    [...centerColumnContainer].forEach(c => {
        c.style.width = `${width.toString()}px`;
    });
}

function setAvatarSize(width) {
    const avatarSize = `${Math.round(width/2, 3).toString()}px`;
    const avatarRadius = `${Math.round(width/4, 3).toString()}px`;
    console.log(`avatar size == ${avatarSize}`)
    avatar.style.width = avatarSize;
    avatar.style.height = avatarSize;
    avatar.style.borderRadius = avatarRadius;
}

function resize() {
    const clientWidth = document.documentElement.clientWidth;
    setCenterColumnContainersWidth(Math.min(clientWidth - 20, 800));
    setAvatarSize(Math.min(clientWidth, 600));
}

function highlightTab(tab, timeout) {
    setTimeout(() => { tab.style.backgroundColor = "#F0F0F0"; }, timeout);
    setTimeout(() => { tab.style.backgroundColor = "#E8E8E8"; }, timeout + 50);
    setTimeout(() => { tab.style.backgroundColor = "#E0E0E0"; }, timeout + 100);
    setTimeout(() => { tab.style.backgroundColor = "#D8D8D8"; }, timeout + 100);
    setTimeout(() => { tab.style.backgroundColor = "#E0E0E0"; }, timeout + 150);
    setTimeout(() => { tab.style.backgroundColor = "#E8E8E8"; }, timeout + 200);
    setTimeout(() => { tab.style.backgroundColor = "#F0F0F0"; }, timeout + 250);
    setTimeout(() => { tab.style.backgroundColor = "var(--bg-color)"; }, timeout + 300);
}

function showTabsOnLoad() {
    let timeout = 250;
    [...document.getElementsByClassName("topbar-element-container")].forEach(tab => {
        highlightTab(tab, timeout);
        timeout += 250;
    })
}

window.onresize = resize;

window.onload = () => {
    resize();
    switchTabs('about-me');
    showTabsOnLoad();
}