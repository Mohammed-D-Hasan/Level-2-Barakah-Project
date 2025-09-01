const text = "Shop the most modern devices with jaw-dropping prices"
let animatedPar = document.getElementById("typing-text");

function typingAnimation() {
    for (let i = 1; i <= text.length; i++) {
        setTimeout(() => {
            animatedPar.innerHTML += text[i - 1];
        }, 80 * i);
    }

}
typingAnimation()

//hero slider
var hero_slider = [
    {
        url: 'img/hero_slider/hero (1).png'
    },
    {
        url: 'img/hero_slider/hero (2).png'
    },
    {
        url: 'img/hero_slider/hero (3).png'
    },
    {
        url: 'img/hero_slider/hero (4).png'
    },
    {
        url: 'img/hero_slider/hero (5).png'
    },
    {
        url: 'img/hero_slider/hero (6).png'
    },
    {
        url: 'img/hero_slider/hero (7).png'
    },
    {
        url: 'img/hero_slider/hero (8).png'
    },
    {
        url: 'img/hero_slider/hero (9).png'
    },
]
var heroImage = document.getElementById('hero-img');

let i = 0;
setInterval(() => {
    heroImage.setAttribute('src', hero_slider[i].url)
    heroImage.classList.remove('opacity-0');
    i++;
    if (i == hero_slider.length) {
        i = 0
    }


}, 2000)
/******************/
const products = {
    // PCs
    pc: [
        {
            id: 1, name: "Gaming PC Ryzen 7", description: "High-performance desktop PC with Ryzen 7 CPU and RTX 3060 GPU.", price: 1200, category: "PC", brand: "Custom Build", stock: 80, rate: 4.5, images: [
                "img/products/pcs/pc1/pc1 (1).jpg",
                "img/products/pcs/pc1/pc1 (2).jpg",
                "img/products/pcs/pc1/pc1 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 2, name: "Office PC i5", description: "Reliable office PC with Intel i5, 16GB RAM, 512GB SSD.", price: 750, category: "PC", brand: "Dell", stock: 12, rate: 4.3, images: [
                "img/products/pcs/pc2/pc2 (1).jpg",
                "img/products/pcs/pc2/pc2 (2).jpg",
                "img/products/pcs/pc2/pc2 (3).jpg"
            ],
            discount: 0.4
        },
        {
            id: 3, name: "Mini PC NUC", description: "Compact Intel NUC with i7 CPU and 16GB RAM.", price: 680, category: "PC", brand: "Intel", stock: 15, rate: 4.5, images: [
                "img/products/pcs/pc3/pc3 (1).jpg",
                "img/products/pcs/pc3/pc3 (2).jpg",
                "img/products/pcs/pc3/pc3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 4, name: "Gaming PC i9", description: "Beast gaming PC with Intel i9, RTX 4070, and water cooling.", price: 2100, category: "PC", brand: "MSI", stock: 5, rate: 4.8, images: [
                "img/products/pcs/pc4/pc4 (1).jpg",
                "img/products/pcs/pc4/pc4 (2).jpg",
                "img/products/pcs/pc4/pc4 (3).jpg"
            ],
            discount: 0
        },
    ],
    // Laptops
    laptop: [
        {
            id: 7, name: "Gaming Laptop i7", description: "Gaming laptop with Intel i7, RTX 3060, 144Hz display.", price: 1400, category: "Laptop", brand: "Asus ROG", stock: 7, rate: 4.6, images: [
                "img/products/laptops/laptop1/laptop1 (1).jpg",
                "img/products/laptops/laptop1/laptop1 (2).jpg",
                "img/products/laptops/laptop1/laptop1 (3).jpg"
            ],
            discount: 0.2
        },
        {
            id: 8, name: "Ultrabook X13", description: "Slim ultrabook with Ryzen 5, 16GB RAM, and 512GB SSD.", price: 1100, category: "Laptop", brand: "Lenovo", stock: 9, rate: 4.5, images: [
                "img/products/laptops/laptop2/laptop2 (1).jpg",
                "img/products/laptops/laptop2/laptop2 (2).jpg",
                "img/products/laptops/laptop2/laptop2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 9, name: "MacBook Air M2", description: "Apple laptop with M2 chip, 13-inch Retina display.", price: 1300, category: "Laptop", brand: "Apple", stock: 6, rate: 4.9, images: [
                "img/products/laptops/laptop3/laptop3 (1).jpg",
                "img/products/laptops/laptop3/laptop3 (2).jpg",
                "img/products/laptops/laptop3/laptop3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 10, name: "Business Laptop i5", description: "Reliable business laptop with Intel i5, 8GB RAM.", price: 850, category: "Laptop", brand: "Dell", stock: 14, rate: 4.3, images: [
                "img/products/laptops/laptop4/laptop4 (1).jpg",
                "img/products/laptops/laptop4/laptop4 (2).jpg",
                "img/products/laptops/laptop4/laptop4 (3).jpg"
            ],
            discount: 0
        },
    ],

    // Monitors
    monitor: [
        {
            id: 13, name: "Gaming Monitor 27”", description: "27-inch monitor, 165Hz, 1ms response, IPS panel.", price: 320, category: "Monitor", brand: "LG", stock: 10, rate: 4.7, images: [
                "img/products/monitors/monitor1/monitor1 (1).jpg",
                "img/products/monitors/monitor1/monitor1 (2).jpg",
                "img/products/monitors/monitor1/monitor1 (3).jpg"
            ],
            discount: 0.3
        },
        {
            id: 14, name: "Office Monitor 24”", description: "24-inch FHD monitor with thin bezels.", price: 180, category: "Monitor", brand: "Dell", stock: 20, rate: 4.4, images: [
                "img/products/monitors/monitor2/monitor2 (1).jpg",
                "img/products/monitors/monitor2/monitor2 (2).jpg",
                "img/products/monitors/monitor2/monitor2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 15, name: "UltraWide Monitor 34", description: "34-inch ultrawide for multitasking and design work.", price: 550, category: "Monitor", brand: "Samsung", stock: 8, rate: 4.6, images: [
                "img/products/monitors/monitor3/monitor3 (1).jpg",
                "img/products/monitors/monitor3/monitor3 (2).jpg",
                "img/products/monitors/monitor3/monitor3 (3).jpg"
            ],
            discount: 0
        }
    ],

    // Mice
    mouse: [
        {
            id: 19, name: "Gaming Mouse RGB", description: "Wired gaming mouse with 16000 DPI and RGB lighting.", price: 60, category: "Mouse", brand: "Razer", stock: 15, rate: 3.5, images: [
                "img/products/mice/mouse1/mouse1 (1).jpg",
                "img/products/mice/mouse1/mouse1 (2).jpg",
                "img/products/mice/mouse1/mouse1 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 20, name: "Wireless Mouse", description: "Compact wireless mouse with long battery life.", price: 30, category: "Mouse", brand: "Logitech", stock: 25, rate: 4.4, images: [
                "img/products/mice/mouse2/mouse2 (1).jpg",
                "img/products/mice/mouse2/mouse2 (2).jpg",
                "img/products/mice/mouse2/mouse2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 21, name: "Ergonomic Mouse", description: "Ergonomic mouse for office use, vertical design.", price: 45, category: "Mouse", brand: "Anker", stock: 18, rate: 4.5, images: [
                "img/products/mice/mouse3/mouse3 (1).jpg",
                "img/products/mice/mouse3/mouse3 (2).jpg",
                "img/products/mice/mouse3/mouse3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 22, name: "Budget Mouse", description: "Simple wired mouse for daily use.", price: 12, category: "Mouse", brand: "HP", stock: 40, rate: 4.1, images: [
                "img/products/mice/mouse4/mouse4 (1).jpg",
                "img/products/mice/mouse4/mouse4 (2).jpg",
                "img/products/mice/mouse4/mouse4 (3).jpg"
            ],
            discount: 0
        },
    ],

    // Keyboards
    keyboard: [
        {
            id: 25, name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard with blue switches.", price: 90, category: "Keyboard", brand: "Corsair", stock: 12, rate: 3, images: [
                "img/products/keyboards/keyboard1/keyboard1 (1).jpg",
                "img/products/keyboards/keyboard1/keyboard1 (2).jpg",
                "img/products/keyboards/keyboard1/keyboard1 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 26, name: "Wireless Keyboard", description: "Slim wireless keyboard with rechargeable battery.", price: 50, category: "Keyboard", brand: "Logitech", stock: 18, rate: 4.4, images: [
                "img/products/keyboards/keyboard2/keyboard2 (1).jpg",
                "img/products/keyboards/keyboard2/keyboard2 (2).jpg",
                "img/products/keyboards/keyboard2/keyboard2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 27, name: "Gaming Keyboard", description: "Gaming keyboard with macro keys and RGB lighting.", price: 120, category: "Keyboard", brand: "Razer", stock: 10, rate: 4.7, images: [
                "img/products/keyboards/keyboard3/keyboard3 (1).jpg",
                "img/products/keyboards/keyboard3/keyboard3 (2).jpg",
                "img/products/keyboards/keyboard3/keyboard3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 28, name: "Budget Keyboard", description: "Affordable wired keyboard for daily use.", price: 20, category: "Keyboard", brand: "HP", stock: 30, rate: 4.1, images: [
                "img/products/keyboards/keyboard4/keyboard4 (1).jpg",
                "img/products/keyboards/keyboard4/keyboard4 (2).jpg",
                "img/products/keyboards/keyboard4/keyboard4 (3).jpg"
            ],
            discount: 0
        },
    ],

    // Cooling Pads
    coolingpad: [
        {
            id: 29, name: "Gaming Cooling Pad", description: "RGB laptop cooling pad with 5 fans.", price: 45, category: "CoolingPad", brand: "Cooler Master", stock: 16, rate: 2, images: [
                "img/products/coolingpads/coolingpad1/coolingpad1 (1).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (2).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (3).jpg"
            ],
            discount: 0.5
        },
        {
            id: 30, name: "Slim Cooling Pad", description: "Portable slim cooling pad for laptops up to 15”.", price: 25, category: "CoolingPad", brand: "Havit", stock: 22, rate: 4.3, images: [
                "img/products/coolingpads/coolingpad2/coolingpad2 (1).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (2).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 31, name: "Heavy-Duty Cooling Pad", description: "Strong cooling pad for gaming laptops up to 17”.", price: 60, category: "CoolingPad", brand: "Thermaltake", stock: 10, rate: 4.5, images: [
                "img/products/coolingpads/coolingpad3/coolingpad3 (1).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (2).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 32, name: "Budget Cooling Pad", description: "Affordable cooling pad with dual fans.", price: 20, category: "CoolingPad", brand: "Zebronics", stock: 30, rate: 4.1, images: [
                "img/products/coolingpads/coolingpad4/coolingpad4 (1).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (2).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (3).jpg"
            ],
            discount: 0
        },
    ],

    // Printers
    printer: [
        {
            id: 34, name: "Laser Printer", description: "Fast monochrome laser printer for offices.", price: 200, category: "Printer", brand: "Brother", stock: 12, rate: 5, images: [
                "img/products/printers/printer1/printer1 (1).jpg",
                "img/products/printers/printer1/printer1 (2).jpg",
                "img/products/printers/printer1/printer1 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 35, name: "Inkjet Printer", description: "High-resolution color inkjet printer for home use.", price: 120, category: "Printer", brand: "HP", stock: 18, rate: 4.3, images: [
                "img/products/printers/printer2/printer2 (1).jpg",
                "img/products/printers/printer2/printer2 (2).jpg",
                "img/products/printers/printer2/printer2 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 36, name: "All-in-One Printer", description: "Print, scan, copy, fax – all-in-one machine.", price: 180, category: "Printer", brand: "Canon", stock: 10, rate: 4.4, images: [
                "img/products/printers/printer3/printer3 (1).jpg",
                "img/products/printers/printer3/printer3 (2).jpg",
                "img/products/printers/printer3/printer3 (3).jpg"
            ],
            discount: 0
        },
        {
            id: 37, name: "Photo Printer", description: "Compact printer for high-quality photo prints.", price: 150, category: "Printer", brand: "Epson", stock: 14, rate: 4.6, images: [
                "img/products/printers/printer4/printer4 (1).jpg",
                "img/products/printers/printer4/printer4 (2).jpg",
                "img/products/printers/printer4/printer4 (3).jpg"
            ],
            discount: 0
        },
    ],
    // Headphones
    headphone: [
        {
            id: 42, name: "Wireless Headphones", description: "Over-ear Bluetooth headphones with noise cancellation.", price: 150, category: "Headphone", brand: "Sony", stock: 1, rate: 4.1, images: [
                "img/products/headphones/headphone1/headphone1 (1).jpg",
                "img/products/headphones/headphone1/headphone1 (2).jpg",
                "img/products/headphones/headphone1/headphone1 (3).jpg"
            ],
            discount: 0.3
        },
        {
            id: 43, name: "Gaming Headset", description: "Wired gaming headset with surround sound.", price: 80, category: "Headphone", brand: "HyperX", stock: 15, rate: 4.6, images: [
                "img/products/headphones/headphone2/headphone2 (1).jpg",
                "img/products/headphones/headphone2/headphone2 (2).jpg",
                "img/products/headphones/headphone2/headphone2 (3).jpg"
            ],
            discount: 0.6
        },
    ]
};

var productsSection = document.querySelector('#products')
let firstProduct = Object.values(products).map((el) => {
    return el[0]
})

function genFn(arrg, div) {
    arrg.map((el) => {
        // Assign rate dynamically function        
        let stars = '';
        function getRate(element) {
            for (let v = 1; v <= 5; v++) {

                if (v <= Math.floor(element.rate)) {
                    stars = stars + '<i class="fas fa-star text-gold"></i>'
                }
                else if (v == Math.floor(element.rate) + 1 && element.rate % 1 >= 0.5) {
                    stars = stars + '<i class="fas fa-star-half-alt text-gold"></i>'
                }
                else {
                    stars = stars + '<i class="far fa-star text-gray-300"></i>'
                }
            }
        }
        getRate(el)
        //data-aos="fade-up" data-aos-duration="1000"
        var pcard = `
        <div class="card product-card bg-white w-full md:w-[45%] lg:w-[30%]  flex-col shadow-xl p-3 rounded-lg relative border border-2 border-transparent !transition-all !duration-300 !ease-in-out hover:border-blue-500 hover:-translate-y-2" data-aos="fade-up" data-aos-duration="1000">
            <div class="edit absolute right-4 top-2">
                <button class="btn editProduct " data-id=${el.id} data-cat=${el.category}><i class="fas fa-edit text-orange-400"></i></button>
                <button class="btn AddToWishList" data-id=${el.id} data-cat=${el.category}>${wishlist.some(item => item.id === el.id)
                ? '<i class="fas fa-heart text-red-500"></i>'
                : '<i class="far fa-heart text-red-500"></i>'

            }</button>
            </div>
            <div class="productImage w-full flex justify-center items-center  h-full p-4">
                <img id="pImg" data-imgOne="${el.images[0]}" data-imgTwo="${el.images[1]}" data-imgThree="${el.images[2]}" src="${el.images[0]}" alt="${el.name}" class=" w-full h-50 object-contain">
            </div>
            <div class="details  flex flex-col gap-5 mb-6">
                <h1 id="pName" class="text-xl font-bold truncate" title="${el.name}">${el.name}</h1>
                <p id="pDisc" class="truncate" title="${el.description}">${el.description}</p>
                <p class="flex flex-col gap-1 w-full">

                    <span id="pRate" name="rate" data-rate='${el.rate}'>
                        <span class="stars">${stars}</span>
                        (${el.rate})
                    </span>
                    <span id="pCategory" class="badge category border border-gray-400 px-2 rounded-lg hidden">Category: ${el.category}</span>
                                        <span id="pBrand" class="badge brand border border-gray-400 p-3 rounded-lg hidden">Brand: ${el.brand}</span>
                    <span id="pStock" class="badge border stock border-gray-400 w-fit px-2 rounded-lg " data-stock='${el.stock}'>${el.stock} left</span>
                </p>
                <p class="flex items-center gap-3">
                    ${el.discount != 0 ? `<span id="pPrice" class="text-3xl text-blue-500 font-bold">$${el.price - (el.price * el.discount)}</span><span class="oldPrice line-through text-xl text-gray-400">$${el.price}</span><span class="text-xl absolute top-0 left-0 bg-blue-500 p-2 rounded-tl-lg text-white opacity-80">${el.discount * 100}% Off</span>` : `<span id="pPrice" class="text-3xl text-blue-500 font-bold">$${el.price}</span>`}                
                </p>
                            <div class="viewDetails">
                <button id="viewDetailsBtn"
                    class="viewDetailsBtn btn text-white bg-blue-500 w-full ${el.stock == 0 ? 'btn-disabled' : ''}" data-id=${el.id} data-category=${el.category}>View Details</button>
            </div>
                </div>

        </div>
        `
        div.innerHTML += pcard;
        AddToWishList();
        viewDtls();
        toggleView()
    })

}

var detailsWindow = document.createElement('div');
detailsWindow.className = 'dtlsWindow flex justify-center items-center fixed z-50 inset-0 bg-black/70 hidden'

// data-aos="fade-up" data-aos-duration="1000"
detailsWindow.innerHTML = `
<div
            class="dtlsWindowCard overflow-y-scroll overscroll-contain relative bg-white  w-[90%] md:w-[75%]  h-[75%] py-4 z-50 shadow-md p-3 lg:p-3 rounded-lg flex flex-col lg:flex-row  justify-around items-center gap-4 ">
                        <button id="closeWindow" class="closeWindow btn absolute top-2 right-2 bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>

            <div class="productImage flex flex-col gap-2 h-[50%] justify-center items-center w-[100%] lg:w-[50%] lg:h-[100%] p-2 lg:p-4">
                <img src="" alt="" class="img mainproductimage w-full h-[75%] lg:h-[70%] object-contain">
                <div class="productImages  border-gray-300 flex  w-[80%] gap-3 !h-[30%] lg:h-[30%] rounded-lg ">  
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[32%] h-[100%] object-contain">
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[32%] h-[100%] object-contain">
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[32%] h-[100%] object-contain">
                </div>
            </div>
            <div class="details  w-[100%]  flex flex-col gap-2">
                <h1 class="productName text-xl font-bold " title=""></h1>
                <p class="productDisc w-half" title=""></p>
                <p class="flex items-center gap-3">
                    <span class="productPrice flex gap-3 items-center"></span>
                </p>
                <p class="flex w-full">
                    <span class="productRate" name="rate">
                    
                    </span>
                </p>
                <p class="flex flex-col  gap-3">
                    <span class="badge productBrand border border-gray-400 px-2 rounded-lg w-fit"></span>
                    <span class="badge productCategory border border-gray-400 px-2 rounded-lg"></span>
                </p>
                <p>
                    Stock: <span class="badge productStock border stock border-green-400 bg-green-400 text-white px-2 rounded-lg" value=''></span>
                </p>
                <p class="flex justify-between gap-2 w-[30%]">
                    Quantity: <button id="decrease" class="btn w-7 h-full text-lg bg-red-500 text-white">-</button> <input id="quantity" class="input w-20 text-center h-full text-lg" type="number" readonly value="" min="1" max="" ><button id="increase" class="btn w-7 h-full text-lg text-white bg-green-500" >+</button>
                </p>
                <div class="AddToCart w-full lg:w-1/2">
                    <button class="AddToCartBtn btn text-white bg-blue-500 w-full ">Add to
                        cart </button>
                </div>
            </div>
        </div>
`
//Close Details Window
detailsWindow.addEventListener('click', () => {
    detailsWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    detailsWindow.querySelector('#quantity').value = 1;
    var increaseBtn = detailsWindow.querySelector('#increase');
    increaseBtn.classList.contains('btn-disabled') ? increaseBtn.classList.remove('btn-disabled') : '';
})

//Search for an element
function searchById(productCategory, productID) {
    return products[productCategory].find(product => product.id == productID);
}

//Append Details Window to body
document.body.appendChild(detailsWindow);

//Fill details window with product data
function viewDtls() {
    var viewDetailsBtn = document.querySelectorAll('.viewDetailsBtn');
    viewDetailsBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            //Search for the matching product 
            let productID = parseInt(btn.getAttribute('data-id'));
            let productCategory = (btn.getAttribute('data-category')).toLowerCase();
            const foundProduct = searchById(productCategory, productID);

            detailsWindow.querySelector('.mainproductimage').src = foundProduct.images[0];
            detailsWindow.querySelector('.mainproductimage').alt = foundProduct.name;
            var thumbnails = detailsWindow.querySelectorAll('.thumbnail')
            for (let i = 0; i < thumbnails.length; i++) {
                thumbnails[i].src = foundProduct.images[i];
                thumbnails[i].alt = foundProduct.name;
                thumbnails[i].classList.remove('ring-2', 'ring-blue-500')
            }
            thumbnails[0].classList.add('ring-2', 'ring-blue-500')
            //Fill Data
            detailsWindow.querySelector('.productName').textContent = foundProduct.name;
            detailsWindow.querySelector('.productDisc').textContent = foundProduct.description;
            // detailsWindow.querySelector('.productPrice').textContent = `$${foundProduct.price}`;
            detailsWindow.querySelector('.productPrice').innerHTML = `
                ${foundProduct.discount != 0 ? `<span id="pPrice" class="text-3xl text-blue-500 font-bold">$${foundProduct.price - (foundProduct.price * foundProduct.discount)}</span><span class="oldPrice line-through text-xl text-gray-400">$${foundProduct.price}</span><span class="text-sm p-1 bg-blue-600 rounded-tl-lg rounded-br-lg text-white opacity-80">${foundProduct.discount * 100}% Off</span>` : `<span id="pPrice" class="text-3xl text-blue-500 font-bold">$${foundProduct.price}</span>`}
            `;
            let card = btn.closest('.product-card');
            var rateStars = card.querySelector('span.stars');
            detailsWindow.querySelector('.productRate').innerHTML = `${rateStars.innerHTML} (${foundProduct.rate})`;
            detailsWindow.querySelector('.productBrand').textContent = `Brand: ${foundProduct.brand}`;
            detailsWindow.querySelector('.productCategory').textContent = `Category: ${foundProduct.category}`;
            detailsWindow.querySelector('.productStock').textContent = `${foundProduct.stock} left`;
            detailsWindow.classList.remove('hidden');
            document.body.classList.add('overflow-hidden')
            var AddToCartBtn = detailsWindow.querySelector('.AddToCartBtn')
            AddToCartBtn.innerHTML = `Add to Cart`
            AddToCartBtn.setAttribute('data-id', foundProduct.id);
            AddToCartBtn.setAttribute('data-category', foundProduct.category)
            buy(foundProduct)
            showCart(cart)
        })
    })
}

let cart = [];
let purchasedItems = [];
let wallet = 5000
//Generate DOM in cart
function showCart(cartArr) {
    if (cartArr.length == 0) {
        cartCard.innerHTML = `<p class="relative font-bold text-2xl w-full text-center text-gray-400">Your Shopping Cart 🛒 is empty</p>`
        document.getElementById('cartNotification').classList.add('hidden');
        return
    }
    cartCard.innerHTML = ``
    cartArr.forEach((item, index) => {
        cartCard.innerHTML +=
            `
            <div class="cartItem relative p-2 border border-gray-200 flex flex-col lg:flex-row gap-2 lg:gap-0 rounded-lg h-[90%] lg:h-[40%]">
                <button class="btn removeFromCart  hover:bg-red-500 text-red-500 font-bold hover:text-white border-2 border-red-500 absolute top-1 right-1 w-5 h-5 p-3  z-10" title="Reomve Product From Cart"><i class="fas fa-trash-alt"></i></button>
                <div class="cartItemImg w-full p-2 lg:w-[35%] flex justify-center h-[60%] lg:h-[100%]">
                    <img src="${item.images[0]}" alt="${item.name}" class="img p-1 w-[90%] h-[60%] object-contain">
                </div>
                <div class="cartItemInfo table w-full lg:w-[65%] lg:h-full flex flex-col h-fit">
                    <div class="table-row !border-b-1 border-gray-500"><h1 class="table-cell font-bold text-sm">${item.name}</h1></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Quantity: </span><span class=" flex items-center gap-2"><button class="btn w-7 h-1/2 text-lg minus" data-index=${index}>-</button><i class=" text-gray-600 font-bold">${item.quantity}</i><button class="btn w-7 h-1/2 text-lg plus" data-index=${index}>+</button></span></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Price Per Unit: </span><i class="table-cell  text-gray-600 ">${item.price - (item.price * item.discount)}$</i></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Discount Per Unit: </span><i class="table-cell  text-gray-600 ">${item.discount * 100}%</i></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Total: </span><i class="table-cell  text-gray-600 font-bold">${item.quantity * (item.price - (item.price * item.discount))}$</i></div>
                </div>
            </div>
        `
    })
    var minusBtns = cartCard.querySelectorAll('.minus');
    minusBtns.forEach((minusBtn) => {
        minusBtn.onclick = () => {
            var index = parseInt(minusBtn.getAttribute('data-index'));
            cart[index].quantity != 1 ? cart[index].quantity-- : ''
            showCart(cart);
        }
    })
    var plusBtns = cartCard.querySelectorAll('.plus');
    plusBtns.forEach((plusBtn) => {
        plusBtn.onclick = () => {
            var index = parseInt(plusBtn.getAttribute('data-index'));
            cart[index].quantity < cart[index].stock ? cart[index].quantity++ : cart[index].quantity = cart[index].stock;
            showCart(cart);
        }
    })

    let totalsArray = cart.map(purchasedProduct => {
        return purchasedProduct.quantity * (purchasedProduct.price - (purchasedProduct.price * purchasedProduct.discount));
    });
    var totalOfTotals = totalsArray.reduce((ToT, el) => {
        return ToT + el;
    })

    let quantitiesArray = cart.map(purchasedProduct => {
        return purchasedProduct.quantity;
    });
    var bottomLineItems = quantitiesArray.reduce((sum, el) => {
        return sum + el;
    })

    var bottomLine = document.createElement('div');
    bottomLine.innerHTML = `
    <div class="text-right p-2 border border-gray-200 rounded-lg">
        <div class="flex flex-col">
            <span class=" text-center text-xl"><i class="fas fa-receipt"></i></span>
            <span class=" text-center">Overall Items: <b class="text-gray-600">${bottomLineItems}</b></span>
            <span class=" text-center">Overall Total: <b class="text-gray-600">${totalOfTotals}$</b></span>
        </div>
    </div>`
    cartCard.append(bottomLine)
    //Remove item From Cart
    var removeFromCartBtn = cartCard.querySelectorAll('.removeFromCart');
    removeFromCartBtn.forEach((btn, index) => {
        btn.onclick = () => {
            cart.splice(index, 1);
            showCart(cart);
        }
    })
    var placeOrder = document.createElement('div');
    placeOrder.className = ('placeOrder w-full p-2 flex justify-center gap-2 border border-gray-200');
    placeOrder.innerHTML = `
    <button class="btn bg-red-500 text-white rounded-lg" title="Cancel Order" id="cancelOrder">Cancel Order</button>
    <button class="btn bg-green-500 text-white rounded-lg" title="Place Order" id="PlaceOrder">Place Order</button>
    `
    cartCard.append(placeOrder)
    //Clear Cart Pop Up 
    var confirmClearCart = document.createElement('div');
    confirmClearCart.className = ('confirmClearCart bg-gray-100 shadow-lg border border-blue-500 w-fit rounded-lg p-5 absolute left-1/2 top-1/2 -translate-1/2 hidden');
    confirmClearCart.innerHTML = `
        <p class="capitalize">
        Are you sure you want to clear your cart?
        </p>
        <div class="w-full flex justify-center gap-2 p-2">
            <button class="btn bg-green-500 text-white rounded-lg" id="YesCancelOrder">Yes</button>
            <button class="btn bg-red-500 text-white rounded-lg" id="noCancelOrder">No</button>
        </div>
    `
    cartCard.append(confirmClearCart)
    //Show Cancel Order Pop Up
    var cancelOrderBtn = cartCard.querySelector('#cancelOrder');
    cancelOrderBtn.onclick = () => {
        confirmClearCart.classList.remove('hidden')
    }
    //Cancel Order and Clear Cart
    var yesCancelOrderBtn = cartCard.querySelector('#YesCancelOrder');
    yesCancelOrderBtn.onclick = () => {
        cart = [];
        confirmClearCart.classList.add('hidden');
        showCart(cart)
    }
    //Close Clear Cart Pop Up
    var noCancelOrder = cartCard.querySelector('#noCancelOrder');
    noCancelOrder.onclick = () => {
        confirmClearCart.classList.add('hidden');
    }
    //Place Order Functionallity
    //Show Warning Message If Balance Isn't Enough
    var warningMsg = document.createElement('div');
    warningMsg.className = 'bg-red-500 opacity-90 p-3 text-white'
    warningMsg.innerHTML = `
        <p>Sorry, Your Balance Isn't Enough. Current Balance: ${wallet}</p>
    `
    //Confirm Place Order Pop Up
    var confirmPlaceOrder = document.createElement('div');
    confirmPlaceOrder.className = ('confirmPlaceOrder bg-gray-100 shadow-lg border border-blue-500 w-[75%] md:w-fit rounded-lg flex flex-col gap-3  p-5 absolute left-1/2 top-1/2 -translate-1/2 hidden');
    confirmPlaceOrder.innerHTML = `
        <p class="capital">
            Are you sure you want to place the order?
        </p>
        <p class="text-sm text-gray-500">
            <b>${totalOfTotals}$</b> Will Be Deducted From Your Wallet.
        </p>
        <p class="text-sm text-gray-500">
            Current Balnce in your wallet <b>${wallet}$</b>.
        </p>
        <div class="w-full flex justify-center gap-2 p-2">
            <button class="btn bg-green-500 text-white rounded-lg" id="YesPlaceOrder">Yes</button>
            <button class="btn bg-red-500 text-white rounded-lg" id="noPlaceOrder">No</button>
        </div>
    `
    cartCard.append(confirmPlaceOrder)
    //Close Place Order Pop Up
    var noPlaceOrder = cartCard.querySelector('#noPlaceOrder');
    noPlaceOrder.onclick = () => {
        confirmPlaceOrder.classList.add('hidden');
    }
    //Show Warning Message If Balance Isn't Enough
    var successMsg = document.createElement('div');
    successMsg.className = 'bg-green-500 opacity-90 p-3 text-white'
    successMsg.innerHTML = `
        <p>Order Placed Successfuly</p>
    `

    //proceed To Place Order 
    var yesPlaceOrder = cartCard.querySelector('#YesPlaceOrder');
    yesPlaceOrder.onclick = () => {
        confirmPlaceOrder.classList.add('hidden');

        var copyCart = cart.map(i => ({ ...i }));
        purchasedItems = purchasedItems.concat(copyCart);


        cart = [];
        showCart(cart)
        showPurchaseLogfn()
        wallet = wallet - totalOfTotals;
        cartCard.append(successMsg)
        setTimeout(() => {
            successMsg.classList.add('hidden')
        }, 2000);
        //Update the stock for the original product in the big DB
        copyCart.forEach((item) => {
            var boughtItem = products[item.category.toLowerCase()].find(p => p.id == item.id);
            boughtItem.stock = boughtItem.stock - item.quantity;
        })
        refreshProductCards()
    }
    //Show Place Order Pop Up
    var placeOrderBtn = cartCard.querySelector('#PlaceOrder');
    var placeOrderBtn = cartCard.querySelector('#PlaceOrder');
    placeOrderBtn.onclick = () => {
        if (totalOfTotals > wallet) {
            warningMsg.classList.remove('hidden')
            cartCard.append(warningMsg);
            setTimeout(() => {
                warningMsg.classList.add('hidden')
            }, 2000)
            return
        }
        confirmPlaceOrder.classList.remove('hidden')
    }
}

function buy(ProductToBuy) {
    var AddToCartBtn = detailsWindow.querySelector('.AddToCartBtn')
    AddToCartBtn.innerHTML = `Add To Cart`
    var quantityInput = detailsWindow.querySelector('#quantity');
    quantityInput.value = 1;
    var total = quantityInput.value * (ProductToBuy.price - (ProductToBuy.price * ProductToBuy.discount));

    var decreaseBtn = detailsWindow.querySelector('#decrease');
    var increaseBtn = detailsWindow.querySelector('#increase');
    decreaseBtn.onclick = () => {
        quantityInput.value != 1 ? quantityInput.value-- : '';
        if (quantityInput.value < ProductToBuy.stock && increaseBtn.classList.contains('btn-disabled')) {
            increaseBtn.classList.remove('btn-disabled')
        }
        total = quantityInput.value * (ProductToBuy.price - (ProductToBuy.price * ProductToBuy.discount));
        quantityInput.value == 1 ? AddToCartBtn.innerHTML = `Add To Cart` : AddToCartBtn.innerHTML = `Add To Cart $${total}`;
    }

    increaseBtn.onclick = () => {
        quantityInput.value < ProductToBuy.stock ? quantityInput.value++ : increaseBtn.classList.add('btn-disabled');

        total = quantityInput.value * (ProductToBuy.price - (ProductToBuy.price * ProductToBuy.discount));
        AddToCartBtn.innerHTML = `Add To Cart $${total}`
    }

    AddToCartBtn.onclick = () => {
        var cartNotification = document.getElementById('cartNotification');
        var eleIndex = cart.findIndex(product => product.id == ProductToBuy.id);
        // var newQuantity = parseInt(quantityInput.value);
        // var newQuantity = 0

        if (eleIndex === -1) {
            // newQuantity > ProductToBuy.stock ? newQuantity = ProductToBuy.stock : '';
            parseInt(quantityInput.value) > ProductToBuy.stock ? parseInt(quantityInput.value) = ProductToBuy.stock : '';

            var clonedProduct = { ...ProductToBuy }
            clonedProduct.quantity = parseInt(quantityInput.value);
            cart.push(clonedProduct);

            detailsWindow.classList.add('hidden')
            document.body.classList.remove('overflow-hidden')
        }
        else {

            var overallQuantity = cart[eleIndex].quantity + parseInt(quantityInput.value);
            overallQuantity > ProductToBuy.stock ? overallQuantity = ProductToBuy.stock : '';
            cart[eleIndex].quantity = overallQuantity;

            detailsWindow.classList.add('hidden')
            document.body.classList.remove('overflow-hidden')
        }
        cartNotification.classList.remove('hidden')
        cartNotification.innerText = cart.length;
        showCart(cart)
        showPurchaseLogfn()
    }
}
// Don't Close Window When Card Itself Is Clicked
detailsWindow.querySelector('div.dtlsWindowCard').addEventListener('click', (e) => {
    e.stopPropagation();
})
//Close Cart Window
detailsWindow.querySelector('#closeWindow').addEventListener('click', () => {
    detailsWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    detailsWindow.querySelector('#quantity').value = 1;
    var increaseBtn = detailsWindow.querySelector('#increase');
    increaseBtn.classList.contains('btn-disabled') ? increaseBtn.classList.remove('btn-disabled') : '';
})
/*Select Product Image*/
function selectImg() {
    var productImageMain = detailsWindow.querySelector('.mainproductimage');
    var thumbnails = detailsWindow.querySelectorAll('.thumbnail');

    [...thumbnails].forEach((el) => {
        el.addEventListener('click', () => {
            [...thumbnails].forEach((img) => {
                img.classList.remove('ring-2', 'ring-blue-500')

            })
            el.classList.add('ring-2', 'ring-blue-500')
            productImageMain.setAttribute('src', el.src)
        })
    })
}

selectImg();

/*Toggle list or grid*/
function toggleView() {
    var displayStyle = document.getElementById('displayStyle');
    var toggleGrid = displayStyle.querySelector('#toggleGrid');
    var toggleList = displayStyle.querySelector('#toggleList');

    var productCard = document.querySelectorAll('.product-card')
    var productCardImage = document.querySelectorAll('.productImage')
    var productCardDetails = document.querySelectorAll('.details')
    var productBrandBadge = document.querySelectorAll('span.brand')
    var productCategoryBadge = document.querySelectorAll('span.category')
    var viewDetailsButtons = document.querySelectorAll('.viewDetailsBtn')

    toggleList.onclick = () => {
        toggleGrid.classList.remove('bg-green-600', 'text-white')
        toggleList.classList.add('bg-green-600', 'text-white')
        productsSection.classList.remove('md:flex-row')
        productCard.forEach(card => {
            card.classList.remove('md:w-[30%]', 'flex-col')
            card.classList.add('md:flex-row', '!w-[90%]')
        });
        productCardImage.forEach(imgDiv => {
            imgDiv.classList.remove('w-full')
            imgDiv.classList.add('w-1/2', 'h-[100%]', 'flex', 'flex-col', 'justify-center')
        })
        productCardDetails.forEach(detailsDiv => {
            detailsDiv.classList.add('w-1/2')
        })

        productBrandBadge.forEach(badge => {
            badge.classList.remove('hidden')
        })
        productCategoryBadge.forEach(badge => {
            badge.classList.remove('hidden')
        })
        viewDetailsButtons.forEach(btn => {
            btn.classList.remove('w-full')
            btn.classList.add('w-1/2')
        })
    }
    toggleGrid.onclick = () => {
        toggleList.classList.remove('bg-green-600', 'text-white')
        toggleGrid.classList.add('bg-green-600', 'text-white')
        productsSection.classList.add('md:flex-row')

        productCard.forEach(card => {
            card.classList.add('md:w-[30%]', 'flex-col')
            card.classList.remove('md:flex-row',)
            card.classList.remove('md:flex-row', '!w-[90%]')
        });
        productCardImage.forEach(imgDiv => {
            imgDiv.classList.add('w-full')
            imgDiv.classList.remove('w-1/2')
        })
        productCardDetails.forEach(detailsDiv => {
            detailsDiv.classList.add('w-full')
        })
        productBrandBadge.forEach(badge => {
            badge.classList.add('hidden')
        })
        productCategoryBadge.forEach(badge => {
            badge.classList.add('hidden')
        })
        viewDetailsButtons.forEach(btn => {
            btn.classList.add('w-full')
            btn.classList.remove('w-1/4')
        })
    }
}

/*Wishlist */
// Create Wishlist Window
var wishListWindow = document.createElement('div');
wishListWindow.className = 'fixed inset-0 bg-black/70 flex justify-center items-center hidden';
document.body.appendChild(wishListWindow);
wishListWindow.innerHTML = `
<div class="wishlistCard bg-white flex flex-col gap-2 w-[90%] md:w-1/2 h-[80%] md:h-1/2 overflow-y-scroll p-4 rounded-lg">
</div>
`

// Show Wishlist Window
var showWishListBtn = document.getElementById('showWishList');
showWishListBtn.onclick = () => {
    wishListWindow.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')
}
// Close Wishlist Window
wishListWindow.onclick = () => {
    wishListWindow.classList.add('hidden');
    document.body.classList.remove('overflow-hidden')
}
// Don't Close Window When Card Itself Is Clicked
var wishlistCard = document.querySelector('.wishlistCard')
wishlistCard.innerHTML = `<p class="font-bold text-2xl w-full text-center text-red-200">Your Wishlist❤ is empty</p>`
wishlistCard.addEventListener('click', (event) => {
    event.stopPropagation();
})
let wishlist = [];
//Render Wishlist
function showWishList() {
    wishlistCard.innerHTML = '';
    if (wishlist.length === 0) {
        wishlistCard.innerHTML = `<p class="font-bold text-2xl w-full text-center text-red-200">Your Wishlist❤ is empty</p>`
        document.getElementById('wishListNotification').classList.add('hidden');
        return;
    }
    wishlist.forEach((ele) => {
        wishlistCard.innerHTML += `
             <div class="wishListItem flex-col relative p-2 border border-gray-200 flex md:items-center md:flex-row gap-2 lg:gap-0 rounded-lg h-[40%] p-2 md:h-[50%] !scollbar-color:gold">
                 <button class="btn removeFromWishList  hover:bg-red-500 text-red-500 font-bold hover:text-white border-2 border-red-500 absolute top-1 right-1 w-fit h-fit p-1" title="Reomve Product From Wish List"><i class="fas fa-trash-alt"></i></button>
                 <div class="wishItemImg w-full p-1 md:w-[35%] flex justify-center h-[50%] md:h-[100%]">
                     <img src="${ele.images[0]}" alt="${ele.name}" class="img  w-[100%] h-[full] md:h-[100%] object-contain">
                 </div>
                 <div class="wishItemInfo  w-[100%] lg:h-full !h-fit flex flex-col justify-center">
                     <h1 class="font-bold ">${ele.name}</h1>
                    <p class="flex flex-col  gap-3">
                        <span class="badge productBrand border border-gray-400 px-1 !text-sm rounded-lg w-fit">Brand: ${ele.brand}</span>
                        <span class="badge productCategory border border-gray-400 px-1 text-sm rounded-lg">Category: ${ele.category}</span>
                    </p>
                 </div>
             </div>`
    })
    var removeWishListBtns = wishlistCard.querySelectorAll('.removeFromWishList');
    removeWishListBtns.forEach((button, index) => {
        button.onclick = () => {
            var deletedItem = wishlist[index];
            wishlist.splice(index, 1);
            showWishList();
            var notification = document.getElementById('wishListNotification');
            notification.innerText = wishlist.length;
            wishlist.length === 0 ? notification.classList.add('hidden') : '';

            if (deletedItem) {
                var loveBtns = document.querySelectorAll('.AddToWishList');
                loveBtns.forEach(loveBtn => {
                    if (loveBtn.getAttribute('data-id') == deletedItem.id) {
                        loveBtn.innerHTML = `<i class="far fa-heart text-red-500"></i>`
                    }
                })
            }

        }
    })

    var notification = document.getElementById('wishListNotification');
    notification.classList.remove('hidden');
    notification.innerText = wishlist.length > 9 ? '+9' : wishlist.length
}
//Add to Wishlist
function AddToWishList() {
    var addToWishListBtns = document.querySelectorAll('.AddToWishList');
    addToWishListBtns.forEach((btn) => {
        btn.onclick = () => {
            var itemID = parseInt(btn.getAttribute('data-id'));
            var itemCat = (btn.getAttribute('data-cat')).toLowerCase()
            const foundItem = searchById(itemCat, itemID);

            var eleIndex = wishlist.findIndex(product => product.id == foundItem.id);
            if (eleIndex === -1) {
                btn.innerHTML = `<i class="fas fa-heart text-red-500"></i>`
                wishlist.push(foundItem);
            }
            else {
                wishlist.splice(eleIndex, 1)
                btn.innerHTML = `<i class="far fa-heart text-red-500"></i>`
            }
            showWishList()
        }
    })
}
AddToWishList()

/*Cart*/
//Create Cart Window
var cartWindow = document.createElement('div');
cartWindow.className = 'fixed inset-0 bg-black/70 flex justify-center items-center hidden';
document.body.appendChild(cartWindow);
cartWindow.innerHTML = `<div class="cartCard bg-white flex flex-col gap-2 w-[90%] md:w-1/2 h-[80%]  overflow-y-scroll p-4 rounded-lg"></div>`
//Show Cart Window showCart
var showCartBtn = document.getElementById('showCart');
showCartBtn.onclick = () => {
    cartWindow.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')
}

// Close Wishlist Window
cartWindow.onclick = () => {
    cartWindow.classList.add('hidden');
    document.body.classList.remove('overflow-hidden')
}

// Don't Close Window When Card Itself Is Clicked
var cartCard = document.querySelector('.cartCard')
cartCard.innerHTML = `
<p class="font-bold text-2xl w-full text-center text-gray-400">Your Shopping Cart 🛒 is empty</p>
`
cartCard.addEventListener('click', (event) => {
    event.stopPropagation();
})

// var themeToggle = document.getElementById('toggleDarkOrLight');
// console.log(themeToggle);
// themeToggle.addEventListener('click', ()=>{
//     var elements = document.querySelectorAll('.bg-white');
//     // console.log(elements);
//     elements.forEach((ele)=>{
//         ele.classList.remove('bg-white');
//         ele.classList.add('bg-Dark','border','border-gray-100');
//     })})

function search(input) {
    let prdcts = firstProduct.filter((el) => {
        var userInput = input.trim().toLowerCase();
        return el.name.toLowerCase().includes(userInput) ||
            el.description.toLowerCase().includes(userInput) ||
            el.category.toLowerCase().includes(userInput) ||
            el.brand.toLowerCase().includes(userInput) || el.price.toString().includes(userInput) || ''
    })
    if (prdcts.length == 0) {
        productsSection.innerHTML = `<p class="ring ring-gray-500 rounded-lg w-full p-3 text-center">Sorry, Product Not Found <span class="font-bold text-4xl text-red-500">:-( </span></p>`;
    }
    else {
        productsSection.innerHTML = '';
        genFn(prdcts, productsSection);
        toggleView();
        editProducts()
    }


}

var searchBar = document.getElementById('searchbar');
searchBar.addEventListener('input', () => {
    var searchTxt = searchBar.value || '';
    search(searchTxt)
})

genFn(firstProduct, productsSection);

function refreshProductCards() {
    productsSection.innerHTML = '';
    categoriesSection.innerHTML = ''
    genFn(firstProduct, productsSection);
    catFn()
    toggleView();
    editProducts()
}
//Purchase Log Window

// showPurchaseLog()
var purchaseLogWindow = document.createElement('div');
purchaseLogWindow.className = ('absolute fixed inset bg-black/70 hidden')
document.body.append(purchaseLogWindow);
purchaseLogWindow.innerHTML = `
        <div class="purchasedCard w-half h-half bg-white flex flex-col jsutify-center overflow-scroll">

        </div>
    `





// Edit a Product


var editBtns = productsSection.querySelectorAll('.editProduct');

var editWindow = document.createElement('div')
editWindow.className = ('editWindow fixed inset-0 bg-black/70 z-50 flex items-center justify-center hidden')
document.body.append(editWindow)
editWindow.innerHTML = `
<div id="editWindowCard" class="editWindowCard overflow-y-scroll overscroll-contain relative bg-white w-[90%] h-[70%]  lg:w-[60%] lg:h-[60%] py-4 z-50 shadow-md p-3 lg:p-3 rounded-lg flex flex-col gap-4">
  
 <form class="flex flex-col p-4 gap-4 overflow-y-scroll overscoll-contain">
 <div class="w-full flex">
    <button id="closeEditWindow" class="closeWindow ml-auto btn bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>
 </div>
 <div class="text-center font-bold text-Dark">Edit Product</div>
  <div class="inpuDiv flex flex-col gap-4">
    <div class="flex md:items-center flex-col md:flex-row gap-4">
        <label for="EWId" class="w-32 text-blue-600 text-left font-bold">ID:</label>
        <input data-required="required" id="EWId" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="number" placeholder="ID">
    </div>
 </div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWimage1" class="w-32 text-blue-600 text-left font-bold">Image 1:</label>
    <input data-required="required" id="EWimage1" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-1 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWimage2" class="w-32 text-blue-600 text-left font-bold">Image 2:</label>
    <input data-required="required" id="EWimage2" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-2 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWimage3" class="w-32 text-blue-600 text-left font-bold">Image 3:</label>
    <input data-required="required" id="EWimage3" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-3 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductName" class="w-32 text-blue-600 text-left font-bold">Name:</label>
    <input data-required="required" id="EWproductName" type="text" class="input focus:outline-none focus:border-blue-400 productName p-2 border rounded flex-grow" placeholder="Product Name">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex items-start flex-col md:flex-row gap-4">
    <label for="EWproductDiscreption" class="w-32 text-blue-600 text-left font-bold pt-2">Discreption:</label>
    <textarea data-required="required" id="EWproductDiscreption" class="input focus:outline-none focus:border-blue-400 textarea p-2 border rounded flex-grow resize-y" placeholder="Product Discreption"></textarea>
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductPrice" class="w-32 text-blue-600 text-left font-bold">Price:</label>
    <input data-required="required" id="EWproductPrice" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Price">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductRate" class="w-32 text-blue-600 text-left font-bold">Rate:</label>
    <input data-required="required" id="EWproductRate" type="number" class="input number focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" min="1" max="5" step="0.1" placeholder="Rate 0 -> 5">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductBrand" class="w-32 text-blue-600 text-left font-bold">Brand:</label>
    <input data-required="required" id="EWproductBrand" type="text" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Brand">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductCat" class="w-32 text-blue-600 text-left font-bold">Category:</label>
    <input data-required="required" id="EWproductCat" type="text" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Category e.g Laptop, PC etc...">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductStock" class="w-32 text-blue-600 text-left font-bold">Stock:</label>
    <input data-required="required" id="EWproductStock" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Stock">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="EWproductDiscount" class="w-32 text-blue-600 text-left font-bold">Discount:</label>
    <input data-required="required" id="EWproductDiscount" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Discount 0 -> 1, (ex:0.3 = 30%)">
  </div>
</div>

  <div class="flex justify-end">
    <button class="btn w-1/4 bg-green-500 text-white" type="submit" id="EWok">OK</button>
  </div>
</div>
</form>

</div>
`

assignNamesToInputs(editWindow)
var closeEditWindowBtn = editWindow.querySelector('#closeEditWindow');
closeEditWindowBtn.onclick = () => {
    editWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden');
}
editWindow.onclick = () => {
    editWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden');
}
var editWindowCard = editWindow.querySelector('#editWindowCard');
editWindowCard.addEventListener('click', (e) => {
    e.stopPropagation();
})
function editProducts() {
    var editBtns = document.querySelectorAll('.editProduct');
    editBtns.forEach(((btn) => {
        btn.onclick = () => {
            var errors = editWindow.querySelectorAll('.errorMsg');
            if (errors) {
                errors.forEach(error => { error.classList.add('hidden') });
            }
            var inps = editWindow.querySelectorAll('input');
            inps.forEach(inp => {
                //('border', 'border-2', 'border-red-500')

                if (inp.classList.contains('border-red-500') || inp.classList.contains('border-2')) {
                    inp.classList.remove('border-red-500')
                    inp.classList.remove('border-2')
                }
            })
            editWindow.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            var ProCat = btn.getAttribute('data-cat').toLowerCase();
            var ProId = parseInt(btn.getAttribute('data-id'))
            var product = searchById(ProCat, ProId);
            fillEditWindow(product);
            saveEdits(ProCat, ProId);
        }
    }))
}
function fillEditWindow(product) {
    editWindow.querySelector('#EWId').value = product.id;
    editWindow.querySelector('#EWimage1').value = product.images[0];
    editWindow.querySelector('#EWimage2').value = product.images[1];
    editWindow.querySelector('#EWimage3').value = product.images[2];
    editWindow.querySelector('#EWproductName').value = product.name;
    editWindow.querySelector('#EWproductDiscreption').value = product.description;
    editWindow.querySelector('#EWproductPrice').value = product.price
    editWindow.querySelector('#EWproductRate').value = product.rate;
    editWindow.querySelector('#EWproductBrand').value = product.brand;
    editWindow.querySelector('#EWproductCat').value = product.category;
    editWindow.querySelector('#EWproductStock').value = product.stock;
    editWindow.querySelector('#EWproductDiscount').value = product.discount;
}
function saveEdits(Cat, Id) {
    var okBtn = editWindow.querySelector('#EWok');
    var item = products[Cat].find(p => p.id == Id);
    okBtn.onclick = (e) => {
        console.log('hello from ok edit btn');

        e.preventDefault();
        if (!validate(editWindow)) {
            return
        }
        item.images[0] = editWindow.querySelector('#EWimage1').value;
        item.images[1] = editWindow.querySelector('#EWimage2').value;
        item.images[2] = editWindow.querySelector('#EWimage3').value;
        item.name = editWindow.querySelector('#EWproductName').value;
        item.description = editWindow.querySelector('#EWproductDiscreption').value;
        item.price = parseInt(editWindow.querySelector('#EWproductPrice').value);
        item.rate = editWindow.querySelector('#EWproductRate').value;
        item.brand = editWindow.querySelector('#EWproductBrand').value;
        item.category = editWindow.querySelector('#EWproductCat').value;
        item.stock = parseInt(editWindow.querySelector('#EWproductStock').value);
        item.discount = editWindow.querySelector('#EWproductDiscount').value;
        console.log(item);
        refreshProductCards()
        editWindow.classList.add('hidden')
        document.body.classList.remove('overflow-hidden')
        // catFn()
    }
}

editProducts(productsSection)
//Attach Red Asterisk
function AttachRedAstersik(window) {
    var inputDivs = window.querySelectorAll('.inpuDiv');
    inputDivs.forEach(div => {
        var fieldDiv = div.querySelector('div:first-child');
        fieldDiv.classList.add('relative')
        var Asterisk = document.createElement('i');
        Asterisk.className = 'text-red-500 text-xl font-bold absolute right-1 top-1/2 md:top-0 z-100'
        Asterisk.innerHTML = '*'
        fieldDiv.append(Asterisk)
    });
}
AttachRedAstersik(editWindow)




// Add Product



// assignNamesToInputs(editWindow)
// assignNamesToInputs(addWindow)
// <button class="btn w-1/4 bg-green-500 text-white" id="ok">OK</button>
var addWindow = document.createElement('div')
addWindow.className = ('addWindow fixed inset-0 bg-black/70 z-50 flex items-center justify-center hidden')
document.body.append(addWindow)
addWindow.innerHTML = `
<div id="addWindowCard" class="addWindowCard overflow-y-scroll overscroll-contain relative card p-3 bg-white w-[90%] h-[70%]  lg:w-[60%] lg:h-[60%] py-4 z-50 shadow-md p-3 lg:p-3 rounded-lg flex flex-col gap-4">
  
<form class="flex flex-col p-4 gap-4 overflow-y-scroll overscoll-contain">
 <div class="w-full flex">
    <button id="closeAddWindow" class="closeWindow ml-auto btn bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>
 </div>
 <div class="text-center font-bold text-Dark">Add a Product</div>
  <div class="inpuDiv flex flex-col gap-4">
    <div class="flex md:items-center flex-col md:flex-row gap-4">
        <label for="proId" class="w-32 text-blue-600 text-left font-bold">ID:</label>
        <input data-required="required" id="proId" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="number" placeholder="ID">
    </div>
 </div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWimage1" class="w-32 text-blue-600 text-left font-bold">Image 1:</label>
    <input data-required="required" id="AWimage1" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-1 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWimage2" class="w-32 text-blue-600 text-left font-bold">Image 2:</label>
    <input data-required="required" id="AWimage2" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-2 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWimage3" class="w-32 text-blue-600 text-left font-bold">Image 3:</label>
    <input data-required="required" id="AWimage3" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" type="text" placeholder="Image-3 URL: Ex- C/images/image.jpg">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductName" class="w-32 text-blue-600 text-left font-bold">Name:</label>
    <input data-required="required" id="AWproductName" type="text" class="input focus:outline-none focus:border-blue-400 productName p-2 border rounded flex-grow" placeholder="Product Name">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex items-start flex-col md:flex-row gap-4">
    <label for="AWproductDiscreption" class="w-32 text-blue-600 text-left font-bold pt-2">Discreption:</label>
    <textarea data-required="required" id="AWproductDiscreption" class="input focus:outline-none focus:border-blue-400 textarea p-2 border rounded flex-grow resize-y" placeholder="Product Discreption"></textarea>
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductPrice" class="w-32 text-blue-600 text-left font-bold">Price:</label>
    <input data-required="required" id="AWproductPrice" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Price">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductRate" class="w-32 text-blue-600 text-left font-bold">Rate:</label>
    <input data-required="required" id="AWproductRate" type="number" class="input number focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" min="1" max="5" step="0.1" placeholder="Rate 0 -> 5">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductBrand" class="w-32 text-blue-600 text-left font-bold">Brand:</label>
    <input data-required="required" id="AWproductBrand" type="text" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Brand">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductCat" class="w-32 text-blue-600 text-left font-bold">Category:</label>
    <input data-required="required" id="AWproductCat" type="text" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Category e.g Laptop, PC etc...">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductStock" class="w-32 text-blue-600 text-left font-bold">Stock:</label>
    <input data-required="required" id="AWproductStock" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Stock">
  </div>
</div>

<div class="inpuDiv flex flex-col gap-4">
  <div class="flex md:items-center flex-col md:flex-row gap-4">
    <label for="AWproductDiscount" class="w-32 text-blue-600 text-left font-bold">Discount:</label>
    <input data-required="required" id="AWproductDiscount" type="number" class="input focus:outline-none focus:border-blue-400 p-2 border rounded flex-grow" placeholder="Discount 0 -> 1, (ex:0.3 = 30%)">
  </div>
</div>

  <div class="flex justify-end">
    <button class="btn w-1/4 bg-green-500 text-white" type="submit" id="AWok">OK</button>
  </div>
</div>
</form>
`

//

//
var addProductBtn = document.getElementById('addProduct');
// console.log(addProductBtn);

addProductBtn.onclick = () => {
    addWindow.classList.remove('hidden')
    document.body.classList.add('overflow-hidden');
}
var closeaddWindowBtn = addWindow.querySelector('#closeAddWindow');
closeaddWindowBtn.onclick = () => {
    addWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden');
}
addWindow.onclick = () => {
    addWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden');
}
var addWindowCard = addWindow.querySelector('#addWindowCard');
addWindowCard.addEventListener('click', (e) => {
    e.stopPropagation();
})

function saveProduct() {
    var okBtn = addWindow.querySelector('#AWok');
    // var item = products[Cat].find(p => p.id == Id);
    var productToPush = {
        id: '',
        name: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        stock: '',
        rate: '',
        images: [],
        discount: 0
    };
    okBtn.onclick = (e) => {
        e.preventDefault();
        if (!validate(addWindow)) {
            return
        }

        productToPush.id = parseInt(addWindow.querySelector('#proId').value);
        productToPush.images[0] = addWindow.querySelector('#AWimage1').value;
        productToPush.images[1] = addWindow.querySelector('#AWimage2').value;
        productToPush.images[2] = addWindow.querySelector('#AWimage3').value;
        productToPush.name = addWindow.querySelector('#AWproductName').value;
        productToPush.description = addWindow.querySelector('#AWproductDiscreption').value;
        productToPush.price = parseInt(addWindow.querySelector('#AWproductPrice').value);
        productToPush.rate = parseFloat(addWindow.querySelector('#AWproductRate').value);
        productToPush.brand = addWindow.querySelector('#AWproductBrand').value;
        productToPush.category = (addWindow.querySelector('#AWproductCat').value).toLowerCase();
        productToPush.stock = parseInt(addWindow.querySelector('#AWproductStock').value);
        productToPush.discount = parseFloat(addWindow.querySelector('#AWproductDiscount').value);
        // console.log(item);
        products[[productToPush.category]].push(productToPush)
        firstProduct.push(productToPush)

        refreshProductCards()
        addWindow.classList.add('hidden')
        document.body.classList.remove('overflow-hidden')
    }
}
saveProduct();


AttachRedAstersik(addWindow);




function assignNamesToInputs(window) {
    var validatedInputs = window.querySelectorAll('*[data-required]');
    var labels = window.querySelectorAll('label');
    // console.log(labels.);
    var inputData = [...labels].map(label => {
        return label.textContent.slice(0, label.textContent.length - 1);
    })
    validatedInputs.forEach((input, index) => {
        input.setAttribute('name', inputData[index]);
    })
}
assignNamesToInputs(addWindow)
assignNamesToInputs(editWindow)


function validate(windowV) {
    //ssssssss
    // ssssssss

    // if(errors){errors.forEach(error =>{error.classList.add('hidden')})}
    var validatedInputs = windowV.querySelectorAll('*[data-required]')
    validatedInputs.forEach((input) => {
        // if(windowV.querySelectorAll('.errorMsg')){input.parentNode.parentNode.removeChild(errorMsg)}
        input.addEventListener("input", () => {
            if (input.value.trim().length > 0) {
                let errorMsg = input.parentNode.parentNode.querySelector('.errorMsg');
                input.classList.remove('border', 'border-2', 'border-red-500')
                input.parentNode.parentNode.removeChild(errorMsg)
            }
        });
    });

    var isValid = true;
    let numberArray = []
    validatedInputs.forEach((input) => {
        if (input.value.trim().length == 0) {
            var errorMsg = document.createElement('p');
            errorMsg.className = "errorMsg bg-red-500 p-2 text-white rounded-lg w-half self-end";
            errorMsg.innerText = `${input.getAttribute('name')} is required`;
            input.classList.add('border', 'border-2', 'border-red-500')
            // input.after(errorMsg)
            !(input.parentNode.parentNode.querySelector('.errorMsg')) ? input.parentNode.parentNode.append(errorMsg) : ''
            // input.parentNode.parentNode.append(errorMsg)
            isValid = false
        }
        if (input.getAttribute('type') == 'number') {
            numberArray.push(input);
            numberArray.forEach((numInput) => {
                if (numInput.getAttribute('id') == 'AWproductRate' || numInput.getAttribute('id') == 'EWproductRate') {
                    if (!(numInput.value >= 1 && numInput.value <= 5)) {
                        var errorMsg = document.createElement('p');
                        errorMsg.className = "errorMsg bg-red-500 p-2 text-white rounded-lg w-half self-end";
                        errorMsg.innerText = `Rate must be in range 1 to 5 e.g (1) (3.5) (5)`;
                        !(numInput.parentNode.parentNode.querySelector('.errorMsg')) ? numInput.parentNode.parentNode.append(errorMsg) : ''
                        numInput.classList.add('border', 'border-2', 'border-red-500')
                        isValid = false;
                    }
                }
                if (numInput.getAttribute('id') == 'AWproductDiscount' || numInput.getAttribute('id') == 'EWproductDiscount') {
                    if (!(numInput.value >= 0 && numInput.value <= 1)) {
                        var errorMsg = document.createElement('p');
                        errorMsg.className = "errorMsg bg-red-500 p-2 text-white rounded-lg w-half self-end";
                        errorMsg.innerText = `Discount must be in range 0 to 1 e.g(0) (0.1/10%) (1/100%)`;
                        // numInput.parentNode.parentNode.append(errorMsg)
                        !(numInput.parentNode.parentNode.querySelector('.errorMsg')) ? numInput.parentNode.parentNode.append(errorMsg) : ''
                        numInput.classList.add('border', 'border-2', 'border-red-500')
                        isValid = false;
                    }
                }
                if (numInput.getAttribute('id') == 'AWproductPrice' || numInput.getAttribute('id') == 'EWproductPrice') {
                    if ((Number(numInput.value) <= 0)) {
                        var errorMsg = document.createElement('p');
                        errorMsg.className = "errorMsg bg-red-500 p-2 text-white rounded-lg w-half self-end";
                        errorMsg.innerText = `Price Can't be 0 or Negative`;
                        // numInput.parentNode.parentNode.append(errorMsg)
                        !(numInput.parentNode.parentNode.querySelector('.errorMsg')) ? numInput.parentNode.parentNode.append(errorMsg) : ''
                        numInput.classList.add('border', 'border-2', 'border-red-500')
                        isValid = false;
                    }
                }
            })
        }
    })
    return isValid;
}


//Tabs Slider

var categoriesSection = document.getElementById('shopCats');
function catFn() {
    var tabsSlider = document.getElementById('btnsSlider');
    tabsSlider.innerHTML = ''

    var categories = Object.keys(products);
    console.log(categories);
    categories.forEach((cat) => {
        if (cat === 'mouse') {
            tabsSlider.innerHTML += `
    <button class="btn bg-gray-800  border-transparent  shadow-none text-white w-[30%] md:w-[20%]" data-cat=${cat}>MICE</button>
    `
        }
        else {
            tabsSlider.innerHTML += `
    <button class="btn bg-gray-800  border-transparent shadow-none text-white w-fit md:w-[20%]" data-cat=${cat}>${cat.toUpperCase()}S</button>
    `
        }

    })
    var btns = tabsSlider.querySelectorAll('.btn');
    var btnWidth = btns[btns.length - 1].offsetWidth;
    // console.log(btnWidth);

    var slideLeft = document.getElementById('slide-left');
    var slideRight = document.getElementById('slide-right');
    var maxSlide = 0;

    slideRight.onclick = () => {
        if (maxSlide < btns.length - 1) {
            maxSlide++;
            tabsSlider.style.transform = `translateX(-${maxSlide * btnWidth}px)`;
        }
    }

    slideLeft.onclick = () => {
        if (maxSlide > 0) {
            maxSlide--;
            tabsSlider.style.transform = `translateX(-${maxSlide * btnWidth}px)`;
        }
    }

    // [...btns].map(btn=>{
    //     if(btn.getAttribute('data-active')==='active'){
    //         categoriesSection.innerHTML=''
    //         console.log(btn.getAttribute('data-active'), btn.getAttribute('data-cat'));
    //         genFn(products[btn.getAttribute('data-cat')], categoriesSection)
    //     }
    //     else{
    // btn.getAttribute('data-cat')==='pc'?btn.classList.add('!bg-blue-600'):''
    var initiallyActive = [...btns].find(btn => btn.getAttribute('data-cat') === 'pc')
    initiallyActive.classList.add('!bg-blue-600');
    categoriesSection.innerHTML = ''
    genFn(products['pc'], categoriesSection)
    //     }
    // })
    // categoriesSection.innerHTML = ''
    editProducts()
    btns.forEach(btn => {
        // btn.classList.remove('!bg-blue-600')
        btn.onclick = () => {
            btns.forEach(btn => {
                btn.classList.remove('!bg-blue-600');
                initiallyActive.classList.remove('!bg-blue-600')
                btn.setAttribute('data-active', '');
            })
            btn.classList.add('!bg-blue-600')
            btn.setAttribute('data-active', 'active')

            categoriesSection.innerHTML = ''
            genFn(products[btn.getAttribute('data-cat')], categoriesSection)
            // refreshProductCards();
            editProducts()
        }
    });
}

catFn();

//sort by price
var sortBtn = document.getElementById('sortProducts');
sortBtn.addEventListener('change', () => {
    var sortedProducts = [...firstProduct];
    if (sortBtn.value == 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortBtn.value == 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    productsSection.innerHTML = ''
    genFn(sortedProducts, productsSection)
    editProducts()
})




/*Wishlist */
// Create Wishlist Window
var purchaseLogWindow = document.createElement('div');
purchaseLogWindow.className = 'fixed inset-0 bg-black/70 flex justify-center items-center hidden';
document.body.appendChild(purchaseLogWindow);
purchaseLogWindow.innerHTML = `
<div class="purchaseLogCard bg-white flex flex-col gap-2 w-[90%] md:w-1/2 h-[80%] md:h-[65%] overflow-y-scroll p-4 rounded-lg">
</div>
`

// Show Wishlist Window
var showPurchaseLog = document.getElementById('purchaseLog');
showPurchaseLog.onclick = () => {
    purchaseLogWindow.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')
}
// Close Wishlist Window
purchaseLogWindow.onclick = () => {
    purchaseLogWindow.classList.add('hidden');
    document.body.classList.remove('overflow-hidden')
}
// Don't Close Window When Card Itself Is Clicked
var purchaseLogCard = document.querySelector('.purchaseLogCard')

// cartCard.innerHTML = `
// <p class="font-bold text-2xl w-full text-center text-gray-400">Your Shopping Cart 🛒 is empty</p>
// `
purchaseLogCard.innerHTML = `<p class="font-bold text-2xl w-full text-center text-green-300"><i class="fas fa-money-bill"></i> Your Purchase Log Is Empty</p>`
purchaseLogCard.addEventListener('click', (event) => {
    event.stopPropagation();
})


function showPurchaseLogfn() {
    purchaseLogCard.innerHTML = '';
    if (purchasedItems.length === 0) {
        purchaseLogCard.innerHTML = `<p class="font-bold text-2xl w-full text-center text-green-300"><i class="fas fa-money-bill"></i> Your Purchase Log Is Empty</p>`
        return;
    }
    purchasedItems.forEach((ele) => {
        purchaseLogCard.innerHTML += `
             <div class="purchasedItem flex-col relative p-2 border border-gray-200 flex md:items-center md:flex-row gap-2 lg:gap-0 rounded-lg h-[90%] p-2 md:h-[80%] ">
                 <div class="purchasedItemImg w-full p-1 md:w-[45%] flex justify-center h-[50%] md:h-[100%]">
                     <img src="${ele.images[0]}" alt="${ele.name}" class="img  w-[100%] h-[full] md:h-[100%] object-contain">
                 </div>
                 <div class="purchasedItemInfo  w-[100%] lg:h-full !h-fit flex flex-col justify-center">
                     <h1 class="font-bold ">${ele.name}</h1>
                    <p class="flex flex-col  gap-3">
                        <span class="badge  border border-gray-400 px-1 !text-sm rounded-lg w-fit">Item Price:</b> ${ele.price}$</span>
                        <span class="badge  border border-gray-400 px-1 !text-sm rounded-lg w-fit">Item Discount:</b> ${ele.discount * 100}%</span>
                        <span class="badge  border border-gray-400 px-1 !text-sm rounded-lg w-fit">Item Price After Discount:</b> ${ele.price - (ele.price * ele.discount)}$</span>
                        <span class="badge  border border-gray-400 px-1 text-sm rounded-lg">Purchased Quantity:</b> ${ele.quantity} items</span>
                        <span class="badge  border border-gray-400 px-1 text-sm rounded-lg">Total:</b> ${(ele.price - (ele.price * ele.discount)) * ele.quantity}$</span>
                    </p>
                 </div>
             </div>`
    })
}

