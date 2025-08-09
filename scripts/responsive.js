const navList = document.getElementById("head-nav-list")
const iconList = document.getElementById("head-icons")
const menuDiv = document.createElement("div")
menuDiv.classList.add("container")

window.addEventListener('resize', (event) => removerNavItem(event))

function removerNavItem(event) {
    const width = window.innerWidth
    if (width <= 992) {
        iconList.children[4].classList.remove("none-disp")
    } else {
        iconList.children[4].classList.add("none-disp")
    }
    if (width <= 768) {
        navList.children[3].classList.add("none-disp")
    } else {
        navList.children[3].classList.remove("none-disp")
    }
    if (width <= 650) {
        navList.children[2].classList.add("none-disp")
    } else {
        navList.children[2].classList.remove("none-disp")
    }
    if (width <= 520) {
        navList.children[1].classList.add("none-disp")
    } else {
        navList.children[1].classList.remove("none-disp")
    }
    if (width <= 450) {
        navList.children[0].classList.add("none-disp")
    } else {
        navList.children[0].classList.remove("none-disp")
    }
    if (width <= 368) {
        iconList.children[0].classList.add("none-disp")
    } else {
        iconList.children[0].classList.remove("none-disp")
    }
    if (width <= 318) {
        iconList.children[1].classList.add("none-disp")
    } else {
        iconList.children[1].classList.remove("none-disp")
    }
}

removerNavItem()