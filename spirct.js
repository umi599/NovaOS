console.log("🚀 Nova OS started successfully.");

// ===============================
// Window Controls
// ===============================

const myWindow = document.getElementById("mydiv");

const minimizeBtn = document.getElementById("minimizeBtn");

const closeBtn = document.getElementById("closeBtn");

const openBtn = document.getElementById("openBtn");

minimizeBtn.onclick = function(){

    myWindow.style.display = "none";

    openBtn.style.display = "inline-block";

};

closeBtn.onclick = function(){

    myWindow.style.display = "none";

    openBtn.style.display = "inline-block";

};

openBtn.onclick = function(){

    myWindow.style.display = "visible";

    openBtn.style.display = "hidden";

};