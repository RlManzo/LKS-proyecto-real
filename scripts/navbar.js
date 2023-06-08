const buttonBurguerNavbar = document.getElementById("burgerNavbar");
const boxNavbar = document.getElementById("menuNavbar");
const items = document.querySelectorAll(".all");

buttonBurguerNavbar.addEventListener("click", ()=>{
    buttonBurguerNavbar.classList.toggle("is-active");
    buttonBurguerNavbar.classList.contains("is-active") ? boxNavbar.classList.add("is-active-navbar") : boxNavbar.classList.remove("is-active-navbar");
    animacionNavbar()
})

items.forEach((e) => {
    e.addEventListener("click", () =>{
        setTimeout(() => {
            items.forEach((button) => button.classList.remove("all-colour"));
            e.classList.add("all-colour");
            buttonBurguerNavbar.classList.remove("is-active");
            boxNavbar.classList.remove("is-active-navbar");
            animacionNavbar()
        }, 500);
    });
});

function animacionNavbar(){
    if(boxNavbar.classList.contains("is-active-navbar")){
        boxNavbar.classList.remove("fade-out-top");
        boxNavbar.classList.add("fade-in-top");
    }else{
        boxNavbar.classList.remove("fade-in-top");
        boxNavbar.classList.add("fade-out-top");
    }
}