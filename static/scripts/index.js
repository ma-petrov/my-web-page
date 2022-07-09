/* Tabs controll */

const tabs = document.getElementsByClassName("data");
const tabSwitches = document.getElementsByClassName("topbar-element");

function activateTabsSwitch(ts) {
    ts.style.color = "var(--accent-color)";
}

function deactivateTabsSwitch(ts) {
    ts.style.color = "var(--text-color)";
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
    const avatarSize = `${Math.round(width/3, 3).toString()}px`;
    const avatarRadius = `${Math.round(width/6, 3).toString()}px`;
    console.log(`avatar size == ${avatarSize}`)
    avatar.style.width = avatarSize;
    avatar.style.height = avatarSize;
    avatar.style.borderRadius = avatarRadius;
}

function resize() {
    const clientWidth = document.documentElement.clientWidth;

    // let width = 800;
    // if (clientWidth < 820) {
    //     width = clientWidth - 20;
    // }
    // setCenterColumnContainersWidth(width);
    // setAvatarSize(width);

    if (clientWidth < 820) {
        setCenterColumnContainersWidth(clientWidth - 20);
    }
    else {
        setCenterColumnContainersWidth(800);
    }

    if (clientWidth < 600) {
        setAvatarSize(clientWidth);
    }
    else {
        setAvatarSize(300);
    }
}

window.onresize = resize;

window.onload = () => {
    resize();
    switchTabs('about-me');
}