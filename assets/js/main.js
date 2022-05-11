let navbar = document.querySelector(".navbar")
document.addEventListener("scroll",() =>{
    if(document.documentElement.scrollTop >= 70){
        navbar.style.position = "fixed"
        navbar.style.top="0"
        navbar.style.backgroundColor="#1a5221"
        navbar.style.borderBottom="3px solid #ffbf00"
        logo2.classList.remove("display:none")
        logo1.classList.add("display:none")
    }
    else{
        navbar.style.position="static"
        navbar.style.backgroundColor="transparent"
        navbar.style.borderBottom="none"
        logo1.classList.remove("display:none")
        logo2.classList.add("display:none")
    }
})