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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

var firstLink = document.querySelector('nav a:nth-child(1)')
var secondLink = document.querySelector('nav a:nth-child(2)')
var thirdLink = document.querySelector('nav a:nth-child(3)')
var fourthLink = document.querySelector('nav a:nth-child(4)')
var fifthLink = document.querySelector('nav a:nth-child(5)')
var sixthLink = document.querySelector('nav a:nth-child(6)')

var firstH1 = document.querySelector('.cta-text h1')
var firstButton = document.querySelector('.cta button')
var ctaImage = document.querySelector('.cta img')

var topContent = document.querySelector('.top-content')
var feature = topContent.firstElementChild.firstElementChild
var featureText = topContent.firstElementChild.firstElementChild.nextElementSibling
var about = topContent.firstElementChild.nextElementSibling.firstElementChild
var aboutText = topContent.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling

var middleImage = document.querySelector(".main-content img")

var services = document.querySelector('.bottom-content .text-content:nth-child(1) h4')
var product = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
var vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4')


// ## Task 2: Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

firstLink.textContent = siteContent.nav['nav-item-1']
secondLink.textContent = siteContent.nav['nav-item-2']
thirdLink.textContent = siteContent.nav['nav-item-3']
fourthLink.textContent = siteContent.nav['nav-item-4']
fifthLink.textContent = siteContent.nav['nav-item-5']
sixthLink.textContent = siteContent.nav['nav-item-6']

firstH1.textContent = siteContent.cta['h1']
firstButton.textContent = siteContent.cta['button']
ctaImage.setAttribute('src', siteContent.cta['img-src'])

feature.textContent = siteContent["main-content"]['features-h4']
featureText.textContent = siteContent["main-content"]['features-content']
about.textContent = siteContent["main-content"]['about-h4']
aboutText.textContent = siteContent["main-content"]['about-content']

middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

services.textContent = siteContent["main-content"]["services-h4"]
product.textContent = siteContent["main-content"]["product-h4"]
vision.textContent = siteContent["main-content"]["vision-h4"]



// ## Task 3: Add new content

// * [ ] Change the color of the navigation text to be green.



// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.



// * [ ] Check your work by looking at the [original html](original.html) in the browser

