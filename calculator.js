let arr=document.querySelectorAll(".q");

let display=document.querySelector(".display-screen");

// console.log(arr);


setInterval(() => {
    if (display.innerText=="undefined") {
        
        
        display.innerText="0";
    }
}, .1);
let yyy=0;


arr.forEach((element)=>{


element.addEventListener("click",(e)=>{

if (yyy===1) {
    
    display.innerText="";
    yyy=0;
}


if (e.target.innerText==='=') {
   let yr= calcul(display.innerText);
    display.innerText=yr;
    yyy=1;
    
}
else{
let upd=e.target.innerText;
display.innerText+=upd;

}





})


})



let ui=window.addEventListener("keypress",(e)=>{





if (e.which==13) {

yyy=1;

let yy=display.innerText;
console.log(yy);

let dis=calcul(yy);
display.innerText=dis;





    
}





})





let calcul=(yy)=>{

  
console.log(eval(yy));
return eval(yy);



}