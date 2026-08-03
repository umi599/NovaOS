// ==========================================
// WAGURI OS v2
// PART 1 - CORE SYSTEM
// ==========================================

// ------------------------------
// ELEMENTS
// ------------------------------

const usernameScreen = document.getElementById("usernameScreen");
const usernameInput = document.getElementById("usernameInput");
const continueBtn = document.getElementById("continueBtn");

const welcome = document.getElementById("welcome");
const progress = document.getElementById("progress");
const loadingText = document.getElementById("loadingText");

const desktop = document.getElementById("desktop");

const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");
const aboutUsername = document.getElementById("aboutUsername");
const welcomeUser = document.getElementById("welcomeUser");

const bootSound = document.getElementById("bootSound");
const shutdownSound = document.getElementById("shutdownSound");
const shutdownScreen = document.getElementById("shutdownScreen");

// ------------------------------
// BOOT MESSAGES
// ------------------------------

const bootMessages = [

    "Starting Waguri OS...",
    "Loading desktop...",
    "Checking system files...",
    "Preparing workspace...",
    "Loading user profile...",
    "Almost Ready..."

];

// ------------------------------
// USERNAME SETUP
// ------------------------------

window.addEventListener("load", function () {

    const savedUser = localStorage.getItem("waguriUsername");

    if (savedUser) {

        usernameInput.value = savedUser;

    }

});

continueBtn.addEventListener("click", function () {

    const username = usernameInput.value.trim();

    if (username === "") {

        alert("Please enter a username.");

        return;

    }

    localStorage.setItem("waguriUsername", username);

    usernameScreen.style.display = "none";

    startBoot(username);

});

// ------------------------------
// BOOT SEQUENCE
// ------------------------------

function startBoot(username) {

    welcome.style.display = "flex";

    if (bootSound) {

        bootSound.currentTime = 0;
        bootSound.play().catch(() => {});

    }

    let percent = 0;
    let message = 0;

    const boot = setInterval(function () {

        percent += 2;

        progress.style.width = percent + "%";

        if (message < bootMessages.length) {

            loadingText.textContent = bootMessages[message];
            message++;

        }

        if (percent >= 100) {

            clearInterval(boot);

            setTimeout(function () {

                welcome.style.display = "none";
                desktop.style.display = "block";

                if (aboutUsername) {

                    aboutUsername.textContent = username;

                }

                if (welcomeUser) {

                    welcomeUser.textContent =
                        "Welcome, " + username + "!";

                }

                notify(
                    "Welcome",
                    "Hello " + username + "! Waguri OS is ready."
                );

            }, 600);

        }

    }, 70);

}

// ------------------------------
// CLOCK
// ------------------------------

function updateClock() {

    const now = new Date();

    if (clock) {

        clock.textContent =
            now.toLocaleDateString() +
            " " +
            now.toLocaleTimeString([], {

                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"

            });

    }

}

updateClock();

setInterval(updateClock, 1000);

// ------------------------------
// GREETING
// ------------------------------

function updateGreeting() {

    if (!greeting) return;

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {

        greeting.textContent = "🌅 Good Morning!";

    }

    else if (hour < 15) {

        greeting.textContent = "☀️ Good Midday!";

    }

    else if (hour < 18) {

        greeting.textContent = "🌞 Good Afternoon!";

    }

    else {

        greeting.textContent = "🌙 Good Evening!";

    }

}

updateGreeting();

// ------------------------------
// NOTIFICATIONS
// ------------------------------

function notify(title, text) {

    const box = document.getElementById("notification");

    if (!box) return;

    document.getElementById("notificationTitle").textContent = title;
    document.getElementById("notificationText").textContent = text;

    box.style.display = "block";

    setTimeout(function () {

        box.style.display = "none";

    }, 3500);

}

// ------------------------------
// SHUTDOWN
// ------------------------------

function shutdownOS() {

    desktop.style.display = "none";

    shutdownScreen.style.display = "flex";

    if (shutdownSound) {

        shutdownSound.currentTime = 0;
        shutdownSound.play().catch(() => {});

    }

    setTimeout(function () {

        window.close();

        location.href = "about:blank";

    }, 3000);

}
// ==========================================
// PART 2 - WINDOW MANAGER
// ==========================================

// ------------------------------
// ABOUT WINDOW
// ------------------------------

const myWindow = document.getElementById("mydiv");
const minimizeBtn = document.getElementById("minimizeBtn");
const closeBtn = document.getElementById("closeBtn");

// ------------------------------
// SETTINGS
// ------------------------------

const settingsWindow = document.getElementById("settingsWindow");
const settingsIcon = document.getElementById("settingsIcon");
const settingsClose = document.getElementById("settingsClose");

// ------------------------------
// FILE EXPLORER
// ------------------------------

const filesWindow = document.getElementById("filesWindow");
const filesIcon = document.getElementById("filesIcon");
const filesClose = document.getElementById("filesClose");

// ------------------------------
// PHOTO VIEWER
// ------------------------------

const photosWindow = document.getElementById("photosWindow");
const photosClose = document.getElementById("photosClose");

// ------------------------------
// START MENU BUTTONS
// ------------------------------

const aboutIcon = document.getElementById("aboutIcon");
const desktopAbout = document.getElementById("desktopAbout");

const desktopFiles = document.getElementById("desktopFiles");
const desktopSettings = document.getElementById("desktopSettings");

const startAbout = document.getElementById("startAbout");
const startFiles = document.getElementById("startFiles");
const startSettings = document.getElementById("startSettings");

// ==========================================
// WINDOW FUNCTIONS
// ==========================================

function openWindow(win){

    if(!win) return;

    win.style.display="block";
    win.style.visibility="visible";

}

function closeWindow(win){

    if(!win) return;

    win.style.display="none";

}

function minimizeWindow(win){

    if(!win) return;

    win.classList.add("minimizeAnimation");

    setTimeout(function(){

        win.style.visibility="hidden";
        win.classList.remove("minimizeAnimation");

    },300);

}

function restoreWindow(win){

    if(!win) return;

    win.style.display="block";
    win.style.visibility="visible";

}

// ==========================================
// ABOUT ME
// ==========================================

if(aboutIcon){

    aboutIcon.onclick=function(){

        restoreWindow(myWindow);

    };

}

if(desktopAbout){

    desktopAbout.onclick=function(){

        restoreWindow(myWindow);

    };

}

if(startAbout){

    startAbout.onclick=function(){

        restoreWindow(myWindow);

    };

}

if(minimizeBtn){

    minimizeBtn.onclick=function(){

        minimizeWindow(myWindow);

    };

}

if(closeBtn){

    closeBtn.onclick=function(){

        closeWindow(myWindow);

    };

}

// ==========================================
// SETTINGS
// ==========================================

if(settingsIcon){

    settingsIcon.onclick=function(){

        restoreWindow(settingsWindow);

    };

}

if(desktopSettings){

    desktopSettings.onclick=function(){

        restoreWindow(settingsWindow);

    };

}

if(startSettings){

    startSettings.onclick=function(){

        restoreWindow(settingsWindow);

    };

}

if(settingsClose){

    settingsClose.onclick=function(){

        closeWindow(settingsWindow);

    };

}

// ==========================================
// FILE EXPLORER
// ==========================================

if(filesIcon){

    filesIcon.onclick=function(){

        restoreWindow(filesWindow);

    };

}

if(desktopFiles){

    desktopFiles.onclick=function(){

        restoreWindow(filesWindow);

    };

}

if(startFiles){

    startFiles.onclick=function(){

        restoreWindow(filesWindow);

    };

}

if(filesClose){

    filesClose.onclick=function(){

        closeWindow(filesWindow);

    };

}

// ==========================================
// PHOTO VIEWER
// ==========================================

if(photosClose){

    photosClose.onclick=function(){

        closeWindow(photosWindow);

    };

}

// ==========================================
// DRAG WINDOWS
// ==========================================

makeDraggable("mydiv","mydivheader");
makeDraggable("settingsWindow",".windowHeader");
makeDraggable("filesWindow",".windowHeader");
makeDraggable("photosWindow",".windowHeader");

function makeDraggable(windowId,headerSelector){

    const windowElement=document.getElementById(windowId);

    if(!windowElement) return;

    let header;

    if(headerSelector.startsWith(".")){

        header=windowElement.querySelector(headerSelector);

    }else{

        header=document.getElementById(headerSelector);

    }

    if(!header) return;

    let x=0,y=0,mx=0,my=0;

    header.onmousedown=dragMouseDown;

    function dragMouseDown(e){

        e.preventDefault();

        mx=e.clientX;
        my=e.clientY;

        document.onmouseup=stopDrag;
        document.onmousemove=drag;

    }

    function drag(e){

        e.preventDefault();

        x=mx-e.clientX;
        y=my-e.clientY;

        mx=e.clientX;
        my=e.clientY;

        windowElement.style.top=
            (windowElement.offsetTop-y)+"px";

        windowElement.style.left=
            (windowElement.offsetLeft-x)+"px";

    }

    function stopDrag(){

        document.onmouseup=null;
        document.onmousemove=null;

    }

}
// ==========================================
// PART 3 - SETTINGS + FILE EXPLORER
// ==========================================

// ------------------------------
// WALLPAPER BUTTONS
// ------------------------------

const wallpaperButtons =
document.querySelectorAll(".wallpaperBtn");

wallpaperButtons.forEach(button=>{

    button.onclick=function(){

        const wallpaper=this.dataset.wall;

        switch(wallpaper){

            case "pink":

                document.body.style.backgroundImage =
                "url('pink.jpg')";
                break;

            case "anime":

                document.body.style.backgroundImage =
                "url('anime.jpg')";
                break;

            case "live":

                document.body.style.backgroundImage =
                "url('dg7egt3-c4e91a6d-c40c-43f2-b256-7466bcc9a126.gif')";
                break;

        }

        localStorage.setItem(
            "waguriWallpaper",
            document.body.style.backgroundImage
        );

        notify(
            "Wallpaper Changed",
            "Wallpaper updated successfully."
        );

    };

});

// ------------------------------
// LOAD SAVED WALLPAPER
// ------------------------------

const savedWallpaper =
localStorage.getItem("waguriWallpaper");

if(savedWallpaper){

    document.body.style.backgroundImage =
    savedWallpaper;

}

// ------------------------------
// CUSTOM WALLPAPER
// ------------------------------

const wallpaperUpload =
document.getElementById("wallpaperUpload");

if(wallpaperUpload){

wallpaperUpload.addEventListener("change",function(e){

    const file=e.target.files[0];

    if(!file) return;

    const imageURL=
    URL.createObjectURL(file);

    document.body.style.backgroundImage=
    `url(${imageURL})`;

    localStorage.setItem(
        "waguriWallpaper",
        `url(${imageURL})`
    );

    notify(
        "Wallpaper",
        "Custom wallpaper applied."
    );

});

}

// ==========================================
// FILE EXPLORER
// ==========================================

const imageUpload =
document.getElementById("imageUpload");

const gallery =
document.getElementById("gallery");

if(imageUpload){

imageUpload.addEventListener("change",function(e){

    const files=e.target.files;

    for(let i=0;i<files.length;i++){

        const file=files[i];

        if(!file.type.startsWith("image/")){

            continue;

        }

        const url=
        URL.createObjectURL(file);

        const img=
        document.createElement("img");

        img.src=url;

        img.onclick=function(){

            openPhoto(url);

        };

        gallery.appendChild(img);

    }

    notify(
        "Files",
        "Images imported successfully."
    );

});

}

// ==========================================
// PHOTO VIEWER
// ==========================================

const photoViewer=
document.getElementById("photoViewer");

const photoMessage=
document.getElementById("photoMessage");

function openPhoto(image){

    restoreWindow(photosWindow);

    photoViewer.src=image;

    photoViewer.style.display="block";

    photoMessage.style.display="none";

}

// ==========================================
// START MENU
// ==========================================

const startButton=
document.getElementById("startButton");

const startMenu=
document.getElementById("startMenu");

if(startButton){

startButton.onclick=function(){

    if(startMenu.style.display==="block"){

        startMenu.style.display="none";

    }

    else{

        startMenu.style.display="block";

    }

};

}

document.addEventListener("click",function(e){

    if(
        !startMenu.contains(e.target) &&
        !startButton.contains(e.target)
    ){

        startMenu.style.display="none";

    }

});

// ==========================================
// SEARCH BAR
// ==========================================

const startSearch=
document.getElementById("startSearch");

if(startSearch){

startSearch.addEventListener("keyup",function(){

    const value=
    this.value.toLowerCase();

    const buttons=
    startMenu.querySelectorAll("button");

    buttons.forEach(btn=>{

        btn.style.display=
        btn.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";

    });

});

}

// ==========================================
// SHUTDOWN BUTTON
// ==========================================

const shutdownButton=
document.getElementById("shutdownButton");

if(shutdownButton){

shutdownButton.onclick=function(){

    shutdownOS();

};

}

console.log("🌸 Waguri OS Loaded Successfully");
// ==========================================
// PART 4 - POLISH & DESKTOP FEATURES
// ==========================================

// ------------------------------
// RIGHT CLICK MENU
// ------------------------------

const desktopMenu = document.getElementById("desktopMenu");
const openSettingsMenu = document.getElementById("openSettingsMenu");
const refreshDesktop = document.getElementById("refreshDesktop");
const changeWallpaperMenu = document.getElementById("changeWallpaperMenu");

document.addEventListener("contextmenu", function(e){

    if(e.target.closest("#desktop")){

        e.preventDefault();

        desktopMenu.style.display = "block";

        desktopMenu.style.left = e.pageX + "px";
        desktopMenu.style.top = e.pageY + "px";

    }

});

document.addEventListener("click", function(){

    desktopMenu.style.display = "none";

});

if(openSettingsMenu){

    openSettingsMenu.onclick = function(){

        restoreWindow(settingsWindow);

    };

}

if(changeWallpaperMenu){

    changeWallpaperMenu.onclick = function(){

        restoreWindow(settingsWindow);

    };

}

if(refreshDesktop){

    refreshDesktop.onclick = function(){

        notify(
            "Desktop",
            "Desktop refreshed successfully."
        );

    };

}

// ------------------------------
// WINDOW FOCUS
// ------------------------------

let highestZ = 10;

document.querySelectorAll(".window").forEach(win=>{

    win.addEventListener("mousedown", function(){

        highestZ++;

        this.style.zIndex = highestZ;

    });

});

// ------------------------------
// RECYCLE BIN
// ------------------------------

const recycleBin = document.getElementById("recycleBin");

if(recycleBin){

    recycleBin.onclick = function(){

        notify(
            "Recycle Bin",
            "The Recycle Bin is currently empty."
        );

    };

}

// ------------------------------
// KEYBOARD SHORTCUTS
// ------------------------------

document.addEventListener("keydown", function(e){

    // ESC closes Start Menu
    if(e.key === "Escape"){

        if(startMenu){

            startMenu.style.display = "none";

        }

    }

    // Ctrl + Alt + S
    if(e.ctrlKey && e.altKey && e.key.toLowerCase() === "s"){

        restoreWindow(settingsWindow);

    }

    // Ctrl + Alt + F
    if(e.ctrlKey && e.altKey && e.key.toLowerCase() === "f"){

        restoreWindow(filesWindow);

    }

    // Ctrl + Alt + A
    if(e.ctrlKey && e.altKey && e.key.toLowerCase() === "a"){

        restoreWindow(myWindow);

    }

});

// ------------------------------
// DESKTOP DOUBLE CLICK
// ------------------------------

document.getElementById("desktop").addEventListener("dblclick", function(){

    notify(
        "Desktop",
        "Welcome to Waguri OS 🌸"
    );

});

// ------------------------------
// STARTUP POLISH
// ------------------------------

window.addEventListener("load", function(){

    console.log("🌸 Waguri OS v2");

    console.log("Status: Online");

    console.log("Desktop Loaded");

});

// ------------------------------
// OPTIONAL: F11 REMINDER
// ------------------------------

setTimeout(function(){

    notify(
        "Tip",
        "Press F11 for full-screen mode."
    );

}, 5000);