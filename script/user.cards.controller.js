const userCardsBox = document.getElementById("cards-box");
const countCart = document.getElementById("count-cart");
const userCardsDiv = document.getElementById("user-cards")
const confButton = document.getElementById("confirum-btn")
const emptyCardButton = document.getElementById("empty-card-button")


// LocalStorage dan mavjud savatni olish
let cartData = JSON.parse(localStorage.getItem("user-cards-data")) || [];

// Sahifa yuklanganda savatcha sonini ko‘rsatish
countCart.innerText = cartData.reduce((acc, item) => acc + item.count, 0);

function renderCart() {
    if (cartData.length === 0) {
        if (emptyCardButton.classList.contains("hidden")) {
            emptyCardButton.classList.remove("hidden")
        }
        if (!confButton.classList.contains("hidden")) {
            confButton.classList.add("hidden")
        }
        userCardsBox.innerHTML = `<img class="block size-36" src="./IMG/illustration-empty-cart.svg" alt="">`;
        countCart.innerText = 0;
        return;
    }
    userCardsDiv.style.overflowY = "scroll"
    userCardsDiv.style.boxSizing = "border-box"
    let total = 0;
    userCardsBox.innerHTML = cartData.map(item => {
        let subtotal = item.price * item.count;
        total += subtotal;
        return `
                            <div class="card flex gap-2 items-center p-2">
                                <img class="block size-12 rounded-full" src="${item.image}" alt="">
                                <div>
                                    <p class="text-[10px]">${item.title}</p>
                                    <p class="text-[12px]">${item.name}</p>
                                    <p class="text-[12px]">$${item.price.toFixed(2)}</p>
                                    <p class="text-[12px]">Count: ${item.count}</p>
                                    <p class="text-[12px]">Subtotal: $${subtotal.toFixed(2)}</p>
                                </div>

                            </div>
                            <div class="control-card flex">
                                <div class="counter border-b w-full">
                                    <button class="add-btn inline-block w-[40px] h-[25px] rounded-2xl bg-amber-50 text-green-400">
                                        +
                                    </button>
                                    <button class="minus-btn inline-block w-[40px] h-[25px] rounded-2xl bg-amber-50 text-red-400">
                                        -
                                    </button>
                                    <button class="delete-btn inline-block w-[40px] h-[25px] rounded-2xl bg-amber-50 text-red-400"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            </div>
        `;
    }).join("");

    // Umumiy summa
    userCardsBox.innerHTML += `
        <div class="p-2 font-bold text-right">
            Total: $${total.toFixed(2)}
        </div>
    `;

    // Savat sonini yangilash
    countCart.innerText = cartData.reduce((acc, item) => acc + item.count, 0);

    // Storage yangilash
    localStorage.setItem("user-cards-data", JSON.stringify(cartData));

    if (!emptyCardButton.classList.contains("hidden")) {
        emptyCardButton.classList.add("hidden")
    }
    if (confButton.classList.contains("hidden")) {
        confButton.classList.remove("hidden")
        // confButton.classList.add("fixed")
    }
}

renderCart();


// Add to Cart tugmasi ishlashi
Array.from(listItems.children).forEach((li, index) => {
    li.querySelector("button").addEventListener("click", () => {
        const item = productNameAndTitles[index];
        console.log(item, index, typeof index)
        
        // Mahsulot savatda bormi?
        const existingItem = cartData.find(p => p.name === item.name);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            cartData.push({ ...item, count: 1 });
        }

        renderCart();
    });
});

// Cart ichidagi tugmalarni click orqali boshqarish (delegatsiya)

userCardsBox.addEventListener("click", (e) => {

    const controlCard = e.target.closest(".control-card");
    if (!controlCard) return;

    const name = controlCard.previousElementSibling.querySelector("p:nth-child(2)").innerText;

    // Plus bosilganda
    if (e.target.closest(".add-btn")) {
        cartData = cartData.map(item =>
            item.name === name ? { ...item, count: item.count + 1 } : item
        );
        renderCart();
        return;
    }

    // Minus bosilganda
    if (e.target.closest(".minus-btn")) {
        cartData = cartData.map(item =>
            item.name === name
                ? { ...item, count: item.count - 1 }
                : item
        ).filter(item => item.count > 0); 
        renderCart();
        return;
    }

    // Delete bosilganda
    if (e.target.closest(".delete-btn")) {
        cartData = cartData.filter(item => item.name !== name);
        renderCart();
        return;
    }
});
