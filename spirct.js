minimizeBtn.onclick = function () {

    myWindow.style.visibility = "hidden";

    openBtn.style.display = "inline-block";

};

closeBtn.onclick = function () {

    myWindow.style.display = "none";

    openBtn.style.display = "inline-block";

};

openBtn.onclick = function () {

    myWindow.style.display = "block";

    myWindow.style.visibility = "visible";

    openBtn.style.display = "none";

};