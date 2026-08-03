// ===============================
// USERNAME SYSTEM
// ===============================

const usernameScreen = document.getElementById("usernameScreen");
const usernameInput = document.getElementById("usernameInput");
const continueBtn = document.getElementById("continueBtn");

const welcome = document.getElementById("welcome");
const loadingText = document.getElementById("loadingText");
const progressBar = document.getElementById("progress");

const bootSound = document.getElementById("bootSound");
const shutdownSound = document.getElementById("shutdownSound");

let userName = localStorage.getItem("waguriUser");

if(userName){

    usernameScreen.style.display = "none";

    startBoot();

}

continueBtn.onclick = function(){

    if(usernameInput.value.trim() === ""){

        alert("Please enter your name.");

        return;

    }

    userName = usernameInput.value;

    localStorage.setItem("waguriUser", userName);

    usernameScreen.style.display = "none";

    startBoot();

};

usernameInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        continueBtn.click();

    }

});


// ===============================
// BOOT SYSTEM
// ===============================

function startBoot(){

    welcome.style.display = "flex";

    if(bootSound){

        bootSound.currentTime = 0;
        bootSound.play().catch(()=>{});

    }

    let progress = 0;

    let messageIndex = 0;

    const messages = [

        "Starting Waguri OS...",

        "Loading Desktop...",

        "Checking system files...",

        "Preparing workspace...",

        "Welcome back, " + userName + "!",

        "Launching Desktop..."

    ];

    const boot = setInterval(function(){

        progress += 20;

        progressBar.style.width = progress + "%";

        loadingText.textContent =
        messages[Math.min(messageIndex, messages.length - 1)];

        messageIndex++;

        if(progress >= 100){

            clearInterval(boot);

            setTimeout(function(){

                welcome.style.opacity = "0";

                setTimeout(function(){

                    welcome.style.display = "none";

                },1000);

            },700);

        }

    },700);

}
// ===============================
// SHUTDOWN
// ===============================

const shutdownBtn =
document.getElementById("shutdownBtn");

const shutdownScreen =
document.getElementById("shutdownScreen");

shutdownBtn.onclick = function(){

    if(shutdownSound){

        shutdownSound.currentTime = 0;

        shutdownSound.play().catch(()=>{});

    }

    shutdownScreen.style.display = "flex";

    document.getElementById("taskbar").style.display = "none";

    myWindow.style.display = "none";

    if(settingsWindow)
        settingsWindow.style.display = "none";

    if(filesWindow)
        filesWindow.style.display = "none";

    if(photosWindow)
        photosWindow.style.display = "none";

};
// ===============================
// WINDOW REFERENCES
// ===============================

// About Me
const myWindow = document.getElementById("mydiv");
const minimizeBtn = document.getElementById("minimizeBtn");
const closeBtn = document.getElementById("closeBtn");
const aboutIcon = document.getElementById("aboutIcon");
const desktopAbout = document.getElementById("desktopAbout");

// Settings
const settingsWindow = document.getElementById("settingsWindow");
const settingsIcon = document.getElementById("settingsIcon");
const desktopSettings = document.getElementById("desktopSettings");
const settingsClose = document.getElementById("settingsClose");

// Files
const filesWindow = document.getElementById("filesWindow");
const filesIcon = document.getElementById("filesIcon");
const desktopFiles = document.getElementById("desktopFiles");
const filesClose = document.getElementById("filesClose");

// Photos
const photosWindow = document.getElementById("photosWindow");
const photosClose = document.getElementById("photosClose");


// ===============================
// ABOUT ME
// ===============================

function openNova(){

    myWindow.style.display = "block";
    myWindow.style.visibility = "visible";

}

aboutIcon.onclick = openNova;
desktopAbout.onclick = openNova;

minimizeBtn.onclick = function(){

    myWindow.style.visibility = "hidden";

};

closeBtn.onclick = function(){

    myWindow.style.display = "none";

};


// ===============================
// SETTINGS
// ===============================

function openSettings(){

    settingsWindow.style.display = "block";

}

settingsIcon.onclick = openSettings;
desktopSettings.onclick = openSettings;

settingsClose.onclick = function(){

    settingsWindow.style.display = "none";

};


// ===============================
// FILE EXPLORER
// ===============================

function openFiles(){

    filesWindow.style.display = "block";

}

filesIcon.onclick = openFiles;
desktopFiles.onclick = openFiles;

filesClose.onclick = function(){

    filesWindow.style.display = "none";

};


// ===============================
// PHOTOS
// ===============================

photosClose.onclick = function(){

    photosWindow.style.display = "none";

};
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("settingsWindow"));
dragElement(document.getElementById("filesWindow"));
dragElement(document.getElementById("photosWindow"));
const header =
document.getElementById(
element.id.replace("Window","") + "Header"
);
if(header){

    header.onmousedown = dragMouseDown;

}
// ===============================
// WALLPAPER SYSTEM
// ===============================

const wallpaperButtons = document.querySelectorAll(".wallpaperBtn");

const wallpaperUpload =
document.getElementById("wallpaperUpload");


// Restore saved wallpaper

const savedWallpaper =
localStorage.getItem("waguriWallpaper");

if(savedWallpaper){

    document.body.style.backgroundImage =
    `url('${savedWallpaper}')`;

}


// Built-in wallpaper buttons

wallpaperButtons.forEach(button=>{

    button.onclick=function(){

        let wallpaper="";

        switch(this.dataset.wall){

            case "pink":

                wallpaper="pink.jpg";

                break;

            case "anime":

                wallpaper="anime.jpg";

                break;

            case "live":

                wallpaper="dg7egt3-c4e91a6d-c40c-43f2-b256-7466bcc9a126.gif";

                break;

        }

        document.body.style.backgroundImage =
        `url('${wallpaper}')`;

        localStorage.setItem(
            "waguriWallpaper",
            wallpaper
        );

    };

});
// ===============================
// CUSTOM WALLPAPER
// ===============================

wallpaperUpload.addEventListener("change",function(e){

    const file=e.target.files[0];

    if(!file) return;

    const imageURL=URL.createObjectURL(file);

    document.body.style.backgroundImage=
    `url(${imageURL})`;

});
// ===============================
// FILE EXPLORER
// ===============================

const imageUpload = document.getElementById("imageUpload");
const gallery = document.getElementById("gallery");

const photoViewer = document.getElementById("photoViewer");
const photoMessage = document.getElementById("photoMessage");

imageUpload.addEventListener("change", function(event){

    const files = event.target.files;

    for(let i = 0; i < files.length; i++){

        const file = files[i];

        if(!file.type.startsWith("image/")){

            continue;

        }

        const imageURL = URL.createObjectURL(file);

        const img = document.createElement("img");

        img.src = imageURL;

        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        img.style.cursor = "pointer";
        img.style.border = "2px solid white";

        img.onclick = function(){

            openPhoto(imageURL);

        };

        gallery.appendChild(img);

    }

});
// ===============================
// PHOTO VIEWER
// ===============================

function openPhoto(image){

    photosWindow.style.display = "block";

    photoViewer.src = image;

    photoViewer.style.display = "block";

    photoMessage.style.display = "none";

}
// ===============================
// START MENU
// ===============================

const startButton =
document.getElementById("startButton");

const startMenu =
document.getElementById("startMenu");

startButton.onclick = function(){

    if(startMenu.style.display === "block"){

        startMenu.style.display = "none";

    }

    else{

        startMenu.style.display = "block";

    }

};

document.addEventListener("click",function(e){

    if(
        !startMenu.contains(e.target) &&
        e.target !== startButton
    ){

        startMenu.style.display="none";

    }

});
function shutdownSystem(){

    if(shutdownSound){

        shutdownSound.currentTime = 0;
        shutdownSound.play().catch(()=>{});

    }

    shutdownScreen.style.display = "flex";

    document.getElementById("taskbar").style.display = "none";

    myWindow.style.display = "none";

    settingsWindow.style.display = "none";
    filesWindow.style.display = "none";
    photosWindow.style.display = "none";

}

menuShutdown.onclick = shutdownSystem;
// ===============================
// APP STATE
// ===============================

const apps = {

    about: {
        window: myWindow,
        opened: true
    },

    settings: {
        window: settingsWindow,
        opened: false
    },

    files: {
        window: filesWindow,
        opened: false
    },

    photos: {
        window: photosWindow,
        opened: false
    }

};
// ===============================
// APP FUNCTIONS
// ===============================

function showApp(app){

    app.window.style.display = "block";
    app.window.style.visibility = "visible";

    app.opened = true;

}

function hideApp(app){

    app.window.style.visibility = "hidden";

}

function closeApp(app){

    app.window.style.display = "none";

    app.opened = false;

}

function toggleApp(app){

    if(!app.opened){

        showApp(app);

        return;

    }

    if(app.window.style.visibility === "hidden"){

        app.window.style.visibility = "visible";

    }

    else{

        app.window.style.visibility = "hidden";

    }

}
function openNova(){

    showApp(apps.about);

}

aboutIcon.onclick = function(){

    toggleApp(apps.about);

};

desktopAbout.onclick = openNova;

minimizeBtn.onclick = function(){

    hideApp(apps.about);

};

closeBtn.onclick = function(){

    closeApp(apps.about);

};
function openSettings(){

    showApp(apps.settings);

}

settingsIcon.onclick = function(){

    toggleApp(apps.settings);

};

desktopSettings.onclick = openSettings;

settingsClose.onclick = function(){

    closeApp(apps.settings);

};
function openFiles(){

    showApp(apps.files);

}

filesIcon.onclick = function(){

    toggleApp(apps.files);

};

desktopFiles.onclick = openFiles;

filesClose.onclick = function(){

    closeApp(apps.files);

};
photosClose.onclick = function(){

    closeApp(apps.photos);

};