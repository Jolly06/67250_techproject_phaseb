var x =5
var y = 7
var z = x+y
console.log(z)

var A = "Hello"
var B = "world!"
var C = A + B
console.log(C)

function sumPrint(x,y){
    console.log(x+y)
}

sumPrint(x,y)
sumPrint(A,B)

if(C.length>z){
    if(C.length<z){
        console.log(z)
    }

}
else{
    console.log("good job!")
}



L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(x){
    for(let i=0;i<x.length;i++){
        if(x[i]=="Banana"){
            alert("banana found")
        }
    }
}

/*
findTheBanana(L1)
findTheBanana(L2) */

function greeting(x){
    if(x<5 || x>=20){
        document.getElementById("greeting").innerHTML = "Good night. Welcome to the MonoMuse Museum"
    }
    else if(x<12){
        document.getElementById("greeting").innerHTML = "Good Morning. Welcome to the MonoMuse Museum"

    }
    else if(x<18){
        document.getElementById("greeting").innerHTML = "Good afternoon. Welcome to the MonoMuse Museum"
    }
    else{
        document.getElementById("greeting").innerHTML = "Good evening. Welcome to the MonoMuse Museum"
    }
}

if(document.getElementById("greeting")!=null){
    const d = new Date();
    greeting(d.getHours());
}   

function addYear(){
    var date = new Date();
    var yr = date.getFullYear();
    document.getElementById("copy").innerHTML = "&copy;" + yr+" Monomuse. All rights reserved.";
}


function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();


function showTicketForm(date) {
  document.getElementById("forms").style.display = "block";
  document.getElementById("selected-date").value = date;
  document.getElementById("selected-date-display").textContent = "Selected date: " + date;
  updateTotal();
}

function updateTotal() {
  const typeSelect = document.getElementById("ticket-type");
  const qty = parseInt(document.getElementById("qty").value);
  const totalBox = document.getElementById("total-box");
  const totalDisplay = document.getElementById("total-display");

  const prices = { "Adult – $18": 18, "Student – $10": 10, "Member – $15": 15 };
  const price = prices[typeSelect.value];

  if (price && qty >= 1) {
    totalBox.style.display = "flex";
    totalDisplay.textContent = "$" + (price * qty);
  } else {
    totalBox.style.display = "none";
  }
}

const slides = [
    { src: "./static/gallery.webp", alt: "Museum gallery" },
    { src: "./static/dino.jpg", alt: "Dinosaur exhibit" },
    { src: "./static/elephant.jpg", alt: "Elephant exhibit" }
];
let currentSlide=0
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    $("#slide-img").attr("src", slides[currentSlide].src);
    $("#slide-img").attr("alt", slides[currentSlide].alt);
}
$(document).ready(function() {
  $(".slide-arrow").eq(0).on("click", function() { changeSlide(-1); });
  $(".slide-arrow").eq(1).on("click", function() { changeSlide(1); });
});

function handleSubmit() {
  alert("Redirecting to payment system.");
}


 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
$("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });




function loadLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    console.log("Leaflet did not load.");
    return;
  }

  if (mapElement._leaflet_id) return;

  const museumLat = 40.4443;
  const museumLng = -79.9436;

  const map = L.map("map").setView([museumLat, museumLng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([museumLat, museumLng])
    .addTo(map)
    .bindPopup("Museum Location")
    .openPopup();
}

document.addEventListener("DOMContentLoaded", function () {
  loadLeafletMap();
});


function toggleMenu() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}


function handleSubmit(event) {
    event.preventDefault();
    const qty = document.getElementById("qty").value;
    const type = document.getElementById("ticket-type").value;
    const prices = { "Adult – $18": 18, "Student – $10": 10, "Member – $15": 15 };
    const total = prices[type] * parseInt(qty);
    sessionStorage.setItem("confirmMessage", "Thank you for purchasing your tickets to MonoMuse!");
    sessionStorage.setItem("confirmAmount", "$" + total);
    window.location.href = "confirmation.html";
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("purchase-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const qty = document.getElementById("qty").value;
    const type = document.getElementById("ticket-type").value;
    const prices = { "Adult – $18": 18, "Student – $10": 10, "Member – $15": 15 };
    const total = prices[type] * parseInt(qty);
    sessionStorage.setItem("confirmMessage", "Thank you for purchasing your tickets to MonoMuse!");
    sessionStorage.setItem("confirmAmount", "$" + total);
    window.location.href = "confirmation.html";
}

function handleMembershipSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("membership-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const plan = document.getElementById("mem-plan").value;
    const prices = { "Basic – $50/year": "$50", "Standard – $90/year": "$90", "Premium – $150/year": "$150" };
    const total = prices[plan] || "N/A";
    sessionStorage.setItem("confirmMessage", "Thank you for becoming a MonoMuse member!");
    sessionStorage.setItem("confirmAmount", total);
    window.location.href = "confirmation.html";
}

function handleDonateSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("donate-form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const amount = document.getElementById("don-amount").value;
    sessionStorage.setItem("confirmMessage", "Thank you for your generous donation to MonoMuse!");
    sessionStorage.setItem("confirmAmount", "$" + amount);
    window.location.href = "confirmation.html";
}

function loadConfirmation() {
    const message = sessionStorage.getItem("confirmMessage");
    const amount = sessionStorage.getItem("confirmAmount");
    if (message) $("#confirm-message").text(message);
    if (amount) $("#confirm-amount").text(amount);
    sessionStorage.removeItem("confirmMessage");
    sessionStorage.removeItem("confirmAmount");
}