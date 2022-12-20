let namee=document.getElementById("name1");
let email=document.getElementById("email1");
let website=document.getElementById("website1");
let es=document.getElementsByClassName("btn1");
let clearstudent=document.getElementsByClassName("btn2");
let flexcol=document.getElementsByClassName("flexcol");
let imagecont=document.getElementsByClassName("mar");
let btn2=document.getElementsByClassName("btn2");
btn2[0].addEventListener("click",(element)=>{
element.preventDefault();
    window.location.reload(true);
})
// let aman=" ";


// if (namee.innerText.value.length!=0 && email.innerText.value.length!=0 && website.innerText.value.length!=0 ) {
//     console.log(aman);
// }
let aman="";





es[0].addEventListener("click",(e)=>{

e.preventDefault();
if(namee.value.length!=0 && email.value.length!=0 && website.value.length!=0){
let op=document.getElementsByClassName("hiddendiv");
op[0].style.opacity=1;
let nameinsert=namee.value;
let emailinsert=email.value;
let websiteinsert=website.value;

let newdiv=document.createElement("div");
newdiv.setAttribute("class","content");
flexcol[0].appendChild(newdiv);


let infdiv=document.createElement("div");
infdiv.setAttribute("class","information");




let h2new=document.createElement("h2");
h2new.setAttribute("class","nameinf");

h2new.innerHTML=nameinsert;



let emailp=document.createElement("p");

emailp.setAttribute("class","emailinf")
emailp.innerText=emailinsert;


let webditep=document.createElement("p");
webditep.setAttribute("class","websiteinf");
let anchor=document.createElement("a");
anchor.innerText=websiteinsert;
anchor.href=websiteinsert;
webditep.appendChild(anchor);
// webditep.innerText=websiteinsert;
//-----------------------

newdiv.appendChild(infdiv);




infdiv.appendChild(h2new);


infdiv.appendChild(emailp);
infdiv.appendChild(webditep);


//---------------------------------------------------


let skillsp=document.createElement("p");
skillsp.setAttribute("class","skills1");

let check=Array.from(document.getElementsByClassName("check"));

//-----------------------

check.forEach(element => {
    // console.log(skillsp.innerText +"a");
    // console.log(element);
    // console.log(element.checked)
    if(element.checked){
// console.log("amande");
        skillsp.innerText+=" "+element.value;
        // console.log(aman);
        // console.log("amandeepsharmajaininm");
    }
});
// skillsfin(skillsp);
infdiv.appendChild(skillsp);




let genderp=document.createElement("p");
genderp.setAttribute("class","gender")


let fender=document.getElementsByClassName("gender");
Array.from(fender).forEach(element=>{

    if (element.checked) {
        genderp.innerText=element.value;
    }
})

infdiv.appendChild(genderp);


//-----------------------------------------------------------








// for image
let imgdivi=document.createElement("div");
imgdivi.setAttribute("class","imge");

// let imagetagg=document.createElement("img");
// imagetagg.setAttribute("class",)
let newimg=document.createElement("img");

    newimg.src="https://jedloapp.in/wp-content/uploads/2020/08/img-person-placeholder-1.png";


imgdivi.appendChild(newimg);
newdiv.appendChild(imgdivi);









email.value="";
namee.value="";
website.value="";
document.getElementById("text1").innerText="";
Array.from(fender).forEach(element=>{

    if (element.checked) {
       element.checked=false;
    }
})



check.forEach(element => {
  
    if(element.checked){
// console.log("amande");
    element.checked=false;
        // console.log(aman);
        // console.log("amandeepsharmajaininm");
    }
});



}


})











