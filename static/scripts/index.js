/* Tabs controll */

const tabs = document.getElementsByClassName("data");
const tabSwitches = document.getElementsByClassName("topbar-element");

function activateTabsSwitch(ts) {
    ts.style.color = "var(--accent-color)";
    ts.style.borderBottom = "3px solid var(--accent-color)";
}

function deactivateTabsSwitch(ts) {
    ts.style.color = "var(--text-color)";
    ts.style.borderBottom = "3px solid var(--bg-color)";
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

    // if (clientWidth < 600) {
    //     setAvatarSize(clientWidth);
    // }
    // else {
    //     setAvatarSize(600);
    // }

    setAvatarSize(Math.min(clientWidth, 600));
}

function showTabsOnLoad() {
    let i = 400;
    [...tabSwitches].forEach(ts => {
        setTimeout(() => { ts.style.fontSize = "24px"; }, i);
        setTimeout(() => { ts.style.fontSize = "20px"; }, i + 500);
        i += 400;
    })
}

window.onresize = resize;

window.onload = () => {
    resize();
    switchTabs('about-me');
    showTabsOnLoad();
}