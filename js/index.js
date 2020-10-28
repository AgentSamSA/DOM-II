// Your code goes here
const mainHeader = document.querySelector(".main-navigation");
mainHeader.addEventListener("click", confirm2);

const nav = document.querySelector("nav");
nav.addEventListener("click", confirm1);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    colorChanges(link);
    link.addEventListener("click", () => {
        link.style.color = "green";
    });
});

const title = document.querySelector(".logo-heading");
title.style.opacity = 0;
title.style.transition = "2.5s";

const subTitles = document.querySelectorAll("h2");
subTitles.forEach((text) => {
    text.style.opacity = 0;
    showText(text);
});

const subSubTitles = document.querySelectorAll("h4");
subSubTitles.forEach((text) => {
    text.style.opacity = 0;
    showText(text);
});

const siteImages = document.querySelectorAll("img");
siteImages.forEach((image) => {
    image.style.opacity = 0;
    fadeIn(image);
    image.addEventListener("dblclick", () => image.classList.toggle("large"));
});

const bottomBtns = document.querySelectorAll(".btn");

window.addEventListener("resize", goodbyeBtn);

window.addEventListener("load", () => title.style.opacity = 1);

document.addEventListener("keydown", event => event.key === "d" ? swapMode() : 0);

function colorChanges(element) {
    element.addEventListener("mouseenter", function (event) {
        element.style.color = mainHeader.style.backgroundColor;
        element.style.backgroundColor = document.body.style.backgroundColor;
        event.preventDefault();
        event.stopPropagation();
    });
    element.addEventListener("mouseleave", function (event) {
        element.style.color = document.body.style.backgroundColor;
        element.style.backgroundColor = mainHeader.style.backgroundColor;
        event.preventDefault();
    });
}

function showText(element) {
    element.addEventListener("mouseenter", function () {
        element.style.transition = ".5s";
        element.style.opacity = 1;
    });
    element.addEventListener("mouseleave", function () {
        setTimeout(function () {
            element.style.opacity = 0;
        }, 500);
    });
}

function swapMode() {
    if (document.body.style.backgroundColor != "white") {
        document.body.style.backgroundColor = "white";
        document.querySelector(".main-navigation").style.backgroundColor = "#212529";
        navLinks.forEach((link) => {
            link.style.color = "white";
            link.style.backgroundColor = "#212529";
        });
        document.querySelector("footer").style.backgroundColor = "#44371F";
        document.querySelector("footer p").style.color = "white";
    } else {
        document.body.style.backgroundColor = "#212529";
        document.querySelector(".main-navigation").style.backgroundColor = "white";
        navLinks.forEach((link) => {
            link.style.color = "#212529";
            link.style.backgroundColor = "white";
        });
        document.querySelector("footer").style.backgroundColor = "#FFEBCD";
        document.querySelector("footer p").style.color = "#212529";
    }
}

function fadeIn(element) {
    element.addEventListener("load", () => {
        element.style.transition = "1s";
        element.style.opacity = 1;
    });
}

function goodbyeBtn() {
    if (window.innerWidth <= 650) {
        bottomBtns.forEach((btn) => btn.style.opacity = 0);
    } else {
        bottomBtns.forEach((btn) => btn.style.opacity = 1);
    }
}

function confirm1(event) {
    confirm("Nav is clicked");
    if (event.target === nav) {
        event.stopPropagation();
    }
}

function confirm2() {
    confirm("Header is clicked");
}