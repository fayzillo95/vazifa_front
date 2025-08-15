const listItems = document.getElementById("list-items");


let productNameAndTitles = [
    { title: "Waffle", name: "Waffle with Berries", price: 6.50, image: "./IMG/image_GROUP_1_-desktop.jpg" },
    { title: "Crème Brûlée", name: "Vanilla Bean Crème Brûlée", price: 7.00, image: "./IMG/image_GROUP_2_-desktop.jpg" },
    { title: "Macaron", name: "Macaron Mix of Five", price: 8.00, image: "./IMG/image_GROUP_3_-desktop.jpg" },
    { title: "Tiramisu", name: "Classic Tiramisu", price: 5.50, image: "./IMG/image_GROUP_4_-desktop.jpg" },
    { title: "Baklava", name: "Pistachio Baklava", price: 4.00, image: "./IMG/image_GROUP_5_-desktop.jpg" },
    { title: "Pie", name: "Lemon Meringue Pie", price: 5.00, image: "./IMG/image_GROUP_6_-desktop.jpg" },
    { title: "Cake", name: "Red Velvet Cake", price: 4.50, image: "./IMG/image_GROUP_7_-desktop.jpg" },
    { title: "Brownie", name: "Salted Caramel Brownie", price: 5.50, image: "./IMG/image_GROUP_8_-desktop.jpg" },
    { title: "Panna Cotta", name: "Vanilla Panna Cotta", price: 6.50, image: "./IMG/image_GROUP_9_-desktop.jpg" }
];

for (let i = 0; i < productNameAndTitles.length; i++) {
    const item = productNameAndTitles[i];
    const li = `
        <li class="item-box flex w-full flex-col gap-4">
            <div class="image-box w-full relative flex flex-col justify-center items-center z-8">
                <img class="relative block rounded-[12px] size-44 z-9"
                    src="${item.image}" alt="product image">
                <button class="flex justify-betwen absolute -bottom-3 bg-white rounded-3xl py-1 z-10 px-3.5">
                    <img class="size-5 block rounded-2xl" src="./IMG/korzinka_.svg" alt="">
                    <h3 class="">Add to Cart</h3>
                </button>
            </div>
            <div class="info-item pl-[30px]">
                <p class="text-[10px]">${item.title}</p>
                <p class="text-[12px]">${item.name}</p>
                <h2>$${item.price.toFixed(2)}</h2>
            </div>
        </li>
    `;
    listItems.innerHTML += li;
}
