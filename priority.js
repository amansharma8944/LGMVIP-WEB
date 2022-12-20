$(document).ready(()=>{
    
    
    
   


let tt=0;

let inputText=document.getElementById("input-todo-list")

let value=0;
let crossElement=0;
let add=document.getElementById("btn1");

// ----------------------------------------
add.addEventListener("click",()=>{
    if(inputText.value.length!=0){
$("#ull").append(`<li><i class="fa-solid  fa1 fa-check"></i></button><p class="pp">${inputText.value} </p><i class="fa-solid  fa2 fa-xmark"></i></li>`);

inputText.value="";}


let fa2=document.querySelectorAll(".fa2");
let fa1=document.querySelectorAll(".fa1");
tt=1;



if (tt==1) {
    fa2.forEach(element => {
        
        element.addEventListener("click",()=>{

            $(element).closest("li").remove();
           
        })
    });


    fa1.forEach((element)=>{
      
        element.addEventListener("click",()=>{
            // console.log("amandeep");
// console.log($(element).next());


// console.log($(element).next().has("div"))
//             if(!$(element).next().has("div")){
//                 console.log("amandeep");




    $(element).next().append(`<div class="vikasdeep"></div>`);
          
            // }

element.classList.remove("fa-check");

        })
      
    })

}




})


// -------------------------------


// let fa2=document.getElementsByClassName("fa2")[0];






})







