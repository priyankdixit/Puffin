var blog = document.getElementById("blog");
blog.addEventListener("click", () => { });
var register = document.getElementById("register");
register.addEventListener("click", () => { });
var interactive=document.getElementsByClassName("interactive");

var login = document.getElementById("login").addEventListener("click", () => { });
var premium = document.getElementById("premium").addEventListener("click", () => { });
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

const userDetails = document.createElement('div');
userDetails.setAttribute("class", "userdetails");
const icon=document.createElement("i");
icon.setAttribute("class","fa-solid fa-circle-arrow-right");


btn1.addEventListener("click", () => {
  
  fetch('https://randomuser.me/api/?gender=male')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userDetails.innerHTML = `
      <img src="${user.picture.large}">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
       
      `;
      interactive[0].appendChild(userDetails);
      userDetails.appendChild(icon)
      icon.style.height="20vh";
      


    })
})

btn2.addEventListener("click", () => {
  
  fetch('https://randomuser.me/api/?gender=female')

  .then(response => response.json())
  .then(data => {
   
    const user = data.results[0];
    userDetails.innerHTML = `
  <img src="${user.picture.large}">
    <p>Name: ${user.name.first} ${user.name.last}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Location: ${user.location.city}, ${user.location.country}</p>
   >
  `;
    interactive[0].appendChild(userDetails);
    userDetails.body.appendChild(btn);
    userDetails.style.display = "flex";
    userDetails.style.paddingTop="50px";
    userDetails.appendChild(icon);

  })

})

const testimonials = [
  {
  quote: "I found my soulmate on this dating site! We're getting married soon!",
  author: "Esha, 27",
  },
  {
  quote: "I had so much fun meeting new people on this site. I highly recommend it!",
  author: "Mukesh, 32",
  },
  {
  quote: "I wasn't sure about online dating at first, but this site changed my mind. I met some amazing people!",
  author: "Rohit, 24",
  },
  {
  quote: "I've tried other dating sites before, but this one is by far the best. I met my current boyfriend here!",
  author: "Om ,27",
  },
  {
  quote: "Thanks to this site, I finally found someone who shares my interests and values. We're really happy together!",
  author: "Shreya, 22",
  },
  
  {
  quote: " Thanks to this site, I met my current partner and we've been together for over a year now. I highly recommend this site to anyone looking to find their soulmate!",
  author:"Parag,23",
  },
  ];
  
  const quoteElements = document.querySelectorAll(".quote");
  const authorElements = document.querySelectorAll(".author");
  
  for (let i = 0; i <6; i++) {
  const testimonial = testimonials[i];
  quoteElements[i].textContent = testimonial.quote;
  authorElements[i].textContent = testimonial.author;
  }
