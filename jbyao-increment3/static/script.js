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