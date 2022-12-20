let button=document.getElementsByClassName("btn");
let mainb=document.getElementsByClassName("main-body");
let spinner=document.getElementsByClassName("spinner");



let arr=[
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ]

button[0].addEventListener("click",()=>{







button[0].style.display="none";

spinner[0].style.display="block";
let pp=5;

setInterval(() => {
spinner[0].innerText=pp;
pp--;
    
}, 1000);


setTimeout((


)=>{

spinner[0].style.display="none";
    

arr.forEach((element)=>{

    let users=document.createElement("div");
    users.classList.add("users");
    
    let im=document.createElement("img");
    im.classList.add("image");
    im.src=element.avatar;
    
    users.appendChild(im);
    
    let name1=document.createElement('p');
    name1.classList.add("name");
    name1.innerText=`${element.first_name}  ${element.last_name}`
    users.appendChild(name1);
    
    
    let email=document.createElement('p');
    email.classList.add("email");
    email.innerText=element.email;
    users.appendChild(email);
    
    let idno=document.createElement('p');
    idno.classList.add("idno");
    idno.innerText=`user ${element.id}`;
    users.appendChild(idno);
    
    
    mainb[0].appendChild(users);
    mainb[0].classList.add("io");
    
    
    
    })
    
    
    
    
    
    
},5500);


})