document.querySelector(".icon-menu").addEventListener("click", function(){
    
    const iconMenu = document.getElementById("icon").classList

    if (iconMenu[1] == "close"){
       
            document.querySelector(".icon-menu").classList.remove("close")
            document.querySelector(".navbar-container").classList.remove("active-nav")
            document.querySelector(".main-page").classList.toggle("main-page-active")
            setTimeout(function(){
                document.querySelector(".navbar-container").classList.remove("active")
            },500)
    } else {
        document.querySelector(".icon-menu").classList.add("close")
        document.querySelector(".navbar-container").classList.add("active")
        document.querySelector(".main-page").classList.add("main-page-active")
        setTimeout(function(){
        document.querySelector(".navbar-container").classList.add("active-nav")
        },100)
    }
    
})



$("li").click(function(){
    document.querySelector(".close").classList.remove("active-nav")
    document.querySelector(".main-page").classList.toggle("main-page-active")
    setTimeout(function(){
        document.querySelector(".close").classList.remove("active")
    },500)
});

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".ha");

hamburger_menu.addEventListener("click", () => {
  hamburger_menu.classList.toggle("active-icon-animation");


})

setTimeout(function(){
    document.querySelector(".scroll").classList.remove("scroll")
    document.querySelector(".loader-wraper").classList.add("loader-wraper-off-loader")
    document.querySelector(".loader-wraper h1").classList.add("loader-wraper-off")
    document.querySelector(".loader-wraper .loader").classList.add("loader-wraper-off")
  },60000)