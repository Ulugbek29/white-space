const menuToggler = document.querySelector(".menu__icon");
const exitBtn = document.querySelector(".exit__btn");
const navLinks = document.querySelectorAll(".nav__links li");
const navList = document.querySelector(".nav__list")

menuToggler.addEventListener("click", ()=> {
    navList.classList.add("active")
})



exitBtn.addEventListener("click", ()=> {
    navList.classList.remove("active")
})

navLinks.forEach((e)=> {
    e.addEventListener("click", ()=> {
        navList.classList.remove("active")
    })
})