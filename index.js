// var sidenav = document.querySelector(".side-navbar");

// function shownavbar() {
//     sidenav.style.display="block"
// }

// function closenavbar() {
//    sidenav.style.display="none"
// }
// // sliders
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${-100 * index}%)`;
//     });
// }

// function changeSlide(direction) {
//     slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
//     showSlide(slideIndex);
// }

// function autoPlay() {
//     slideIndex = (slideIndex + 1) % totalSlides;
//     showSlide(slideIndex);
// }

// // Set auto-play interval
// let autoPlayInterval = setInterval(autoPlay, 3000);
// //  Offer
// var offer=document.querySelector(".offer")
// function closeoffer(){
//     offer.style.display="none"
// }
// // new arrivals
// // Get the New Arrivals section
// var newarrival = document.querySelector(".new-arrivals");

// // Function to scroll to the New Arrivals section
// function moveto() {
//     newarrival.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
// }

// // Add click event listener to the New Arrival link in the navbar
// document.querySelectorAll('.navbar-link a')[1].addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     moveto(); // Call the function to scroll to the section
// });
// // most wanted
// function toggleHeart(event) {
//     const heartButton = event.target; // Get the button that was clicked
//     const isHearted = heartButton.textContent === '❤️'; // Check if it is currently hearted
    
//     // Change the heart button appearance based on the state
//     if (isHearted) {
//         heartButton.textContent = '🤍'; // Change to empty heart
//         heartButton.style.color = 'black'; // Reset color
//     } else { 
//         heartButton.textContent = '❤️'; // Change to filled heart
//         heartButton.style.color = 'red'; // Change color to indicate it's favored
//     }
// }
// // mostwanted
// var mostwanted = document.querySelector(".most-wanted");

// // Function to scroll to the New Arrivals section
// function movesto() {
//     mostwanted.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
// }

// // Add click event listener to the New Arrival link in the navbar
// document.querySelectorAll('.navbar-link a')[2].addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     movesto(); // Call the function to scroll to the section
// });

// //side navbar
// var sidebar = document.querySelector(".side-navbar");

// // Function to scroll to the New Arrivals section
// function goto() {
//     newarrival.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
// }

// // Add click event listener to the New Arrival link in the navbar
// document.querySelectorAll('.side-navbar-link a')[1].addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     goto(); // Call the function to scroll to the section
// });

// //mostwanted
// var mostsidebar = document.querySelector(".side-navbar");

// // Function to scroll to the New Arrivals section
// function goto() {
//     mostwanted.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
// }

// // Add click event listener to the New Arrival link in the navbar
// document.querySelectorAll('.side-navbar-link a')[2].addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     goto(); // Call the function to scroll to the section
// });
// Sidebar Navigation
var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
    sidenav.style.display = "block";
}

function closenavbar() {
    sidenav.style.display = "none";
}

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * index}%)`;
    });
}

function changeSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function autoPlay() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

// Set auto-play interval
let autoPlayInterval = setInterval(autoPlay, 3000);

// Offer
var offer = document.querySelector(".offer");
function closeoffer() {
    offer.style.display = "none";
}

// New Arrivals Section
var newarrival = document.querySelector(".new-arrivals");

function moveToNewArrivals() {
    newarrival.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll('.navbar-link a')[1].addEventListener('click', function(event) {
    event.preventDefault();
    moveToNewArrivals();
});

// Most Wanted Section
var mostwanted = document.querySelector(".most-wanted");

function moveToMostWanted() {
    mostwanted.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll('.navbar-link a')[2].addEventListener('click', function(event) {
    event.preventDefault();
    moveToMostWanted();
});

// Side Navbar - New Arrivals
document.querySelectorAll('.side-navbar-link a')[1].addEventListener('click', function(event) {
    event.preventDefault();
    moveToNewArrivals();
});

// Side Navbar - Most Wanted
document.querySelectorAll('.side-navbar-link a')[2].addEventListener('click', function(event) {
    event.preventDefault();
    moveToMostWanted();
});

// Heart Toggle for Most Wanted
function toggleHeart(event) {
    const heartButton = event.target;
    const isHearted = heartButton.textContent === '❤️';
    
    if (isHearted) {
        heartButton.textContent = '🤍';
        heartButton.style.color = 'black';
    } else { 
        heartButton.textContent = '❤️';
        heartButton.style.color = 'red';
    }
}
//collecrtion
document.addEventListener("DOMContentLoaded", () => {
    // Select checkboxes by their label text
    const occasionCheckboxes = document.querySelectorAll(".left-column .checkbox-group:nth-of-type(1) input[type='checkbox']");
    const colorCheckboxes = document.querySelectorAll(".left-column .checkbox-group:nth-of-type(2) input[type='checkbox']");

    // Get all image containers
    const images = document.querySelectorAll(".images-row div");

    // Function to filter images
    function filterImages() {
        // Get selected occasions and colors
        const selectedOccasions = Array.from(occasionCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.parentElement.textContent.trim());

        const selectedColors = Array.from(colorCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.parentElement.textContent.trim());

        images.forEach(image => {
            const imageTitle = image.querySelector("h3").textContent;

            // Check if the image matches any selected occasion and color
            const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.some(occasion => imageTitle.includes(occasion));
            const matchesColor = selectedColors.length === 0 || selectedColors.some(color => imageTitle.includes(color));

            // Show image if it matches the selected occasion and color
            image.style.display = matchesOccasion && matchesColor ? "block" : "none";
        });
    }

    // Attach event listeners to all checkboxes
    occasionCheckboxes.forEach(checkbox => checkbox.addEventListener("change", filterImages));
    colorCheckboxes.forEach(checkbox => checkbox.addEventListener("change", filterImages));
});
