// Get Slider items | Array.from[ES6 Feature]

var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img"),
);

// Get Number of Slides

var sildesCount = sliderImages.length;

// Set Current Slide

var currentSlide = 1;

// Slide Number String Element

var slideNumberEle = document.getElementById("slide-number");

// Previous and Next Button

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Handel Click on Previous and next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main ul Element
var paginationEle = document.createElement("ul");

// set id on created ul element
paginationEle.setAttribute("id", "pagination-ul");

//create li based on array slides count
for (var i = 1; i <= sildesCount; i++) {
  // create li
  var paginationItem = document.createElement("li");

  // create custom attribute
  paginationItem.setAttribute("data-index", i);

  //set item content
  paginationItem.appendChild(document.createTextNode(i));

  //append items to the main ul list

  paginationEle.appendChild(paginationItem);
}

// add the created ul element to page

document.getElementById("indicators").appendChild(paginationEle);

//Get the New Created ul
var ul = document.getElementById("pagination-ul");

// Get pagination items | Array.from[ES6 Feature]

var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li"),
);

//loop through all bullets item

for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick=function(){
    currentSlide=parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}

//Trigger the checker function
theChecker();

//Function nextSlide

function nextSlide() {
  // next slide function
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

//Function prevSlide

function prevSlide() {
  // prev slide function
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// created the checker function

function theChecker() {
  // set the slide Number
  slideNumberEle.textContent = "Slide # " + currentSlide + " of " + sildesCount;

  // remove All active classes
  removeAllActive();

  // Set active class On current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  //set active class on current pagination item
  ul.children[currentSlide - 1].classList.add("active");

  //check if current slide is the first

  if (currentSlide === 1) {
    // add disebled class is the button
    prevButton.classList.add("disabled");
  } else {
    //remove disabled class from previous button
    prevButton.classList.remove("disabled");
  }

  //check if current slide is the last

  if (currentSlide === sildesCount) {
    // add disebled class is the button
    nextButton.classList.add("disabled");
  } else {
    //remove disabled class from next button
    nextButton.classList.remove("disabled");
  }
}

// remove all active from images and pagination bullets

function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
