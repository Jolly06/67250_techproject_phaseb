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
}

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
