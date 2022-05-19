"use strict"

const humburger_menu = document.querySelector(".hamburger-menu");
const homeContainer = document.querySelector(".home-container");

humburger_menu.addEventListener("click", () => {
    homeContainer.classList.toggle("active");
});

const navLink = document.querySelectorAll(".links a");

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove("current"));
    this.classList.add("current");

    // Remove menu mobile
    homeContainer.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));






// reveal animation

const scaling = document.querySelectorAll(".animOne");

let observerScaling = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s forwards ease-out ${entry.target.dataset.delay}`;
        } else {
            entry.target.style.animation = "none";
        }
    })
});

scaling.forEach(anim => {
    observerScaling.observe(anim);
})


const animate = document.querySelectorAll(".animTwo");

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 2s forwards ease-out ${entry.target.dataset.delay}`;
        } else {
            entry.target.style.animation = 'none';
        }
    });
});

animate.forEach(anim => {
    observer.observe(anim);
});


const skillPer = document.querySelectorAll(".skill-per");

let skillPerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `fillbar 2s forwards ease-out ${entry.target.dataset.delay}`;
        } else {
            entry.target.style.animation = 'none'
        }
    });
});

skillPer.forEach(anim => {
    skillPerObserver.observe(anim);
});


// preloader

const main = document.querySelector(".main-cont");
const preloader = document.querySelector("#preloader");


window.addEventListener("load", () => {
    preloader.style.display = "none";
    main.style.display = "block";
});