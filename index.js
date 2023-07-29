document.querySelector(".icon-menu").addEventListener("click", function(){
    document.querySelector(".navbar-container").classList.add("active")
    document.querySelector(".main-page").classList.toggle("main-page-active")
    setTimeout(function(){
        document.querySelector(".navbar-container").classList.add("active-nav")
    },100)
})
document.querySelector(".navbar-close").addEventListener("click", function(){
    document.querySelector(".navbar-container").classList.remove("active-nav")
    document.querySelector(".main-page").classList.toggle("main-page-active")
    setTimeout(function(){
        document.querySelector(".navbar-container").classList.remove("active")
    },500)
})