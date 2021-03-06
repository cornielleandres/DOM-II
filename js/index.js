// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll("img");
const aLinks = document.querySelectorAll("a");
const pElements = document.querySelectorAll("p");
const contentPick = document.querySelector(".content-pick");
const destination =document.querySelectorAll(".destination");
const funBusImg = document.getElementById("fun-bus-img");
const footerP = document.querySelector(".footer p");
const welcomeToFunBus = document.querySelector(".home .intro h2");

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
        event.target.style.fontWeight = "900";
    });
    a.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

Array.from(pElements).forEach(p => {
    p.addEventListener("wheel", (event) => {
        event.target.style.border = "1px solid black";
        event.target.style.borderRadius = "5px";
        event.target.style.padding = "5px";
        event.target.style.background = "#333333";
        event.target.style.color = "white";
        TweenLite.fromTo(p, 1, {x:-100}, {x:0});
    });
});

window.addEventListener("resize", () => {
    logoHeading.innerText = "Fun Bus (resized!)";
});

// Nested events
contentPick.style.border = "2px solid black";
contentPick.style.paddingLeft = "20px";
contentPick.style.marginBottom = "10px";
contentPick.style.borderRadius = "10px";

contentPick.addEventListener("click", () => {
    contentPick.style.background = "darkgray";
});

Array.from(destination).forEach(elem => {
    elem.addEventListener("click", (event) => {
        event.stopPropagation();
        event.currentTarget.style.borderRadius = "10px";
        event.currentTarget.style.padding = "5px";
        event.currentTarget.style.background = "gray";
    });
});

document.addEventListener("keypress", (event) => {
    const key = event.key;
    TweenLite.fromTo(welcomeToFunBus, 1, {opacity:0, y: -50}, {opacity:100, y:0});
    welcomeToFunBus.innerText = `Welcome To Fun Bus! (You pressed the ${key} key)`;
});

const secretMsgDiv = document.createElement("DIV");
const secretMsg = document.createElement("P");
secretMsg.innerText = "You right clicked on the copyright, so you get this secret message.";
secretMsgDiv.appendChild(secretMsg);

footerP.addEventListener("contextmenu", () => {
    document.getElementsByClassName("footer")[0].prepend(secretMsgDiv);
});

// Stretch Goal: Using GSAP
TweenLite.to(funBusImg, 1, {opacity:"1", width:"800px", height:"240px",});
// Also added a TweenLite to pElements
