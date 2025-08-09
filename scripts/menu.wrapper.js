const menuBtn = document.getElementById("menu-btn")
const navList = document.getElementById("head-nav-list")

function menuBthUpdate() {
    navList.classList.toggle("show")
    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars")
        menuBtn.classList.add("fa-times")
    }
    else if (menuBtn.classList.contains("fa-times")) {
        menuBtn.classList.remove("fa-times")
        menuBtn.classList.add("fa-bars")
    }
    console.log(navList.classList)
}


menuBtn.addEventListener("click", (event) => {
    menuBthUpdate()
})

window.addEventListener("resize", () => {
    if (navList.classList.contains("show")) {
        navList.classList.remove("show")
    }
    if (menuBtn.classList.contains("fa-times")) {
        menuBtn.classList.remove("fa-times")
        menuBtn.classList.add("fa-bars")
    }
})

window.addEventListener("click", (event) => {
    if (event.target && event.target !== navList && event.target !== menuBtn) {
        if (menuBtn.classList.contains("fa-times")) {
            if (navList.classList.contains("show")) {
                navList.classList.remove("show")
            }
            menuBtn.classList.remove("fa-times")
            menuBtn.classList.add("fa-bars")
        }
    }
})