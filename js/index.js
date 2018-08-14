// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll("img");
const aLinks = document.querySelectorAll("a");
const pElements = document.querySelectorAll("p");
const body = document.querySelector("body");

logoHeading.addEventListener("mouseenter", () => {
    logoHeading.style.fontWeight = "bold";
    logoHeading.style.cursor = "pointer";
});

logoHeading.addEventListener("mouseleave", () => {
    logoHeading.style.fontWeight = "400";
});

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.innerText = "You've been signed up!";
    });
});

Array.from(images).forEach(image => {
    image.addEventListener("mouseover", (event) => {
        event.target.style.filter = "contrast(150%) brightness(75%)";
        document.querySelector(".main-navigation").style.zIndex = "1";
    });
    image.addEventListener("dblclick", (event) => {
        event.target.style.display = "none";
    });
    image.addEventListener("mouseleave", (event) => {
        event.target.style.filter = "none";
    });
    image.addEventListener("drag", () => {
        event.target.style.filter = "opacity(0)";
    })
});

Array.from(aLinks).forEach(a => {
    a.addEventListener("focus", (event) => {
        event.target.style.fontStyle = "italic";
    });
});

Array.from(pElements).forEach(p => {
    p.addEventListener("wheel", (event) => {
        event.target.style.border = "1px solid black";
        event.target.style.borderRadius = "5px";
        event.target.style.padding = "5px";
        event.target.style.background = "black";
        event.target.style.color = "white";
    });
});

window.addEventListener("resize", () => {
    logoHeading.innerText = "Fun Bus (resized!)";
});