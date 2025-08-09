const navList = document.getElementById("head-nav-list")
const iconList = document.getElementById("head-icons")
const menuDiv = document.createElement("div")
menuDiv.classList.add("container")

const breakpoints = [
        { point: 768, element: navList.children[3] },
        { point: 718, element: navList.children[2] },
        { point: 568, element: navList.children[1] },
        { point: 518, element: navList.children[0] },
        { point: 468, element: iconList.children[0] },
        { point: 418, element: iconList.children[1] },
        { point: 368, element: iconList.children[2] },
        { point: 318, element: iconList.children[3] },
];
