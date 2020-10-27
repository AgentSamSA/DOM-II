// Your code goes here
const mainHeader = document.querySelector(".main-navigation");

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => colorChanges(link));

const title = document.querySelector(".logo-heading");
title.style.opacity = 0;
title.style.transition = "2.5s";

const subTitles = document.querySelectorAll("h2");
subTitles.forEach((text) => text.style.opacity = 0);
subTitles.forEach((text) => showText(text));

const subSubTitles = document.querySelectorAll("h4");
subSubTitles.forEach((text) => text.style.opacity = 0);
subSubTitles.forEach((text) => showText(text));

window.onload = function headingFadeIn() {
    title.style.opacity = 1;
}
document.addEventListener("keydown", event => event.key === "d" ? swapMode() : 0);

function colorChanges(element) {
    if (mainHeader.style.backgroundColor == "#FFFFFF") {
        element.addEventListener("mouseenter", function (event) {
            element.style.color = "#FFFFFF";
            element.style.backgroundColor = "#212529";
            event.preventDefault();
            event.stopPropagation();
        });
        element.addEventListener("mouseleave", function (event) {
            element.style.color = "#212529";
            element.style.backgroundColor = "#FFFFFF";
            event.preventDefault();
            event.stopPropagation();
        });
    }
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
    if (document.body.style.backgroundColor != "#FFFFFF") {
        document.body.style.backgroundColor = "#FFFFFF";
        document.querySelector(".main-navigation").style.backgroundColor = "#212529";
        navLinks.forEach((link) => {
            link.style.color = "#FFFFFF";
            link.style.backgroundColor = "#212529";
        });
    } else {
        document.body.style.backgroundColor = "#212529";
        document.querySelector(".main-navigation").style.backgroundColor = "#FFFFFF";
        navLinks.forEach((link) => {
            link.style.color = "#212529";
            link.style.backgroundColor = "#FFFFFF";
        });
    }
}