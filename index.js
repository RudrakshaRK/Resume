document.querySelector(".icon-menu").addEventListener("click", function(){
    document.querySelector(".navbar-container").classList.add("active")
})
document.querySelector(".navbar-close").addEventListener("click", function(){
    document.querySelector(".navbar-container").classList.remove("active")
})