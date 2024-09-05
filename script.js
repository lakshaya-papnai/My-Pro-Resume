let btn = document.querySelector(".switch");
let downloadCV= document.querySelector(".download-cv");
let Body=document.querySelector("body");
let logo = document.querySelector(".logo");

let currmode= "light";
btn.addEventListener("click",()=>{
    console.log("clicked");
   
if(currmode==="light") {
    currmode="dark";
    Body.classList.add("dark");
    Body.classList.remove("light");
    console.log("you are in dark mode");
    btn.style.backgroundColor="white";
        
    btn.innerHTML="<i class='fa-solid fa-sun'></i>";
    btn.style.color="black";

    downloadCV.style.color="black";
    downloadCV.style.backgroundColor="antiquewhite";

    logo.innerHTML="  <img src= 'photos/L.png' alt=''>   " ;

    

}
else{
    currmode="light";
    Body.classList.add("light");
    Body.classList.remove("dark");
    btn.style.backgroundColor="black";
    btn.style.color="white";


    console.log("you are in light mode");  
    btn.innerHTML="<i class='fa-solid fa-moon'></i>";

    downloadCV.style.color="antiquewhite";
    downloadCV.style.backgroundColor="black";
    logo.innerHTML="  <img src= 'photos/LP.png' alt=''>   " ;
}
});



 