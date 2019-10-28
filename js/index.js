const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navATags = document.querySelectorAll("nav a");
navATags[0].style.color="green";
navATags[0].textContent = siteContent["nav"]["nav-item-1"];
navATags[1].textContent = siteContent["nav"]["nav-item-2"];
navATags[1].style.color="green";
navATags[2].textContent = siteContent["nav"]["nav-item-3"];
navATags[2].style.color="green";
navATags[3].textContent = siteContent["nav"]["nav-item-4"];
navATags[3].style.color="green";
navATags[4].textContent = siteContent["nav"]["nav-item-5"];
navATags[4].style.color="green";
navATags[5].textContent = siteContent["nav"]["nav-item-6"];
navATags[5].style.color="green";


let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let ctaBtn = document.querySelector(".cta-text button")
ctaBtn.textContent = siteContent["cta"]["button"];


let mainHeaders = document.querySelectorAll(".main-content h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"]
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"]
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"]
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"]
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

let mainContent = document.querySelectorAll(".main-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"]
mainContent[1].textContent = siteContent["main-content"]["about-content"]
mainContent[2].textContent = siteContent["main-content"]["services-content"]
mainContent[3].textContent = siteContent["main-content"]["product-content"]
mainContent[4].textContent = siteContent["main-content"]["vision-content"]

let mainImg = document.querySelector("#middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
let contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];

let nav = document.querySelector("nav")

let newATag1 = document.createElement("a");
newATag1.textContent = "SIGN IN";
nav.appendChild(newATag1)

let newATag2 = document.createElement("a");
newATag2.textContent = "Home";
nav.prepend(newATag2)




