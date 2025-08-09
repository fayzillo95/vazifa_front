const menu = document.getElementsByClassName("menu")[0]
const menuBtn = document.getElementById("menu-btn")

function menuBthUpdate() {
    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars")
        menuBtn.classList.add("fa-times")
    }
    else if (menuBtn.classList.contains("fa-times")) {
        menuBtn.classList.remove("fa-times")
        menuBtn.classList.add("fa-bars")
    }
}

function removerNavItem(event) {
    const width = window.innerWidth

    if (width <= 768) {
        menuBtn.classList.remove("none-disp")
        if (menu.classList.contains("show")) {
            menu.classList.remove("show")
            menuBthUpdate()
        }
    } else {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show")
            menuBthUpdate()
        }
        menuBtn.classList.add("none-disp")
    }
    breakpoints.forEach(({point,element} ,index) => {
        if (width <= point) {
            menu.appendChild(element)
        } else {
            index > 3 ? iconList.appendChild(element) : navList.appendChild(element)
        }
    })
}


window.addEventListener('resize', (event) => removerNavItem(event))
removerNavItem()


menuBtn.addEventListener("click", (event) => {
    console.log(menu.classList)
    menu.classList.toggle("show")
    menuBthUpdate()
})
