const burger = document.querySelector(".burger")
const navbar = document.querySelector(".navbar")
// nav-list = document.querySelector('.nav-list')

burger.addEventListener("click",() =>{
    navbar.classList.toggle("active");
    nav-list.classList.toggle("active");
    nav-list2.classList.toggle("active");
})
