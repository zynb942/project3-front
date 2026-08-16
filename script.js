
// wait for commits.......

const productsDiv = document.querySelector(".products-section .products")

let products = [
    {
        name: "Hot Espresso",
        ctegory: "Hot",
        price: 60,
        img: "images/images-removebg-preview.png",
        bcolors: ["#f4f2ef", "#f0f2f5", "#f8f9fa", "#ffffff"]
    },
    {
        name: "Iced Americano",
        ctegory: "Cold",
        price: 60,
        img: "images/purple.png",
        bcolors: ["#5C1D5B", "#451147", "#310933", "#1E0320"]
    },
    {
        name: "Iced Latte",
        ctegory: "Cold",
        price: 95,
        img: "images/brown.png",
        bcolors: ["#3E2723", "#8D6E63", "#5D4037", "#3E2723"]
    },
    {
        name: "Turkish Coffee",
        ctegory: "Hot",
        price: 45,
        img: "images/5e014ba924d370834a7800ef53d45165-removebg-preview.png",
        bcolors: ["#1d8322", "#388e3c", "#2e7d32", "#1d8322"]
    },
]

for (let i = 0; i < products.length; i++) {

    productsDiv.innerHTML += `
     <div class="product product2">

                    <img class="prod2Img" src=${products[i].img} alt="coffee image">
                    <div class="pro-info">
                        <button class="showInfoBtn">show info</button>
                    </div>

                    <svg class="white-hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400"
                        preserveAspectRatio="none">
                        <rect width="1000" height="400" fill=${products[i].bcolors[0]} />
                        <path d="M 0,140 Q 250,40 500,160 T 1000,90 L 1000,400 L 0,400 Z" fill=${products[i].bcolors[1]} />
                        <path d="M 0,210 Q 300,310 600,170 T 1000,240 L 1000,400 L 0,400 Z" fill=${products[i].bcolors[2]} />
                        <path d="M 0,270 Q 400,190 750,340 T 1000,280 L 1000,400 L 0,400 Z" fill=${products[i].bcolors[3]} />
                    </svg>

                </div>
    
    `

}


const showInfoBtn = document.querySelectorAll(".products .product .pro-info .showInfoBtn")



showInfoBtn.forEach(function (btn, i) {
    btn.addEventListener("click", () => {
        const btnparent = btn.parentElement;
       btnparent.insertAdjacentHTML("beforeend", `
        <p>${products[i].name}</p>
        <span>${products[i].ctegory}</span>
        <div class="sizes">
                <label>
                choose size: 
                    <input type="radio" name="coffe-size" value="L"> L
                </label>
                <label>
                    <input type="radio" name="coffe-size" value="M"> M
                </label>
                <label>
                    <input type="radio" name="coffe-size" value="S"> S
                </label>
            </div>

            <div class="sizes">
             <label>
                 number of cups: 
                    <input class="cupsAmount" type="number"  value="1" min="1" max="100"> 
                </label>
            </div>
           <button class="addcart">add to cart</button>


        `);
        // btn.style.display = "none";
    })

}
)



