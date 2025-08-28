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

/*--------------------------------------*/
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
            ]
        },
        {
            id: 2, name: "Office PC i5", description: "Reliable office PC with Intel i5, 16GB RAM, 512GB SSD.", price: 750, category: "PC", brand: "Dell", stock: 12, rate: 4.3, images: [
                "img/products/pcs/pc2/pc2 (1).jpg",
                "img/products/pcs/pc2/pc2 (2).jpg",
                "img/products/pcs/pc2/pc2 (3).jpg"
            ]
        },
        {
            id: 3, name: "Mini PC NUC", description: "Compact Intel NUC with i7 CPU and 16GB RAM.", price: 680, category: "PC", brand: "Intel", stock: 15, rate: 4.5, images: [
                "img/products/pcs/pc3/pc3 (1).jpg",
                "img/products/pcs/pc3/pc3 (2).jpg",
                "img/products/pcs/pc3/pc3 (3).jpg"
            ]
        },
        {
            id: 4, name: "Gaming PC i9", description: "Beast gaming PC with Intel i9, RTX 4070, and water cooling.", price: 2100, category: "PC", brand: "MSI", stock: 5, rate: 4.8, images: [
                "img/products/pcs/pc4/pc4 (1).jpg",
                "img/products/pcs/pc4/pc4 (2).jpg",
                "img/products/pcs/pc4/pc4 (3).jpg"
            ]
        },
    ],
    // Laptops
    laptop: [
        {
            id: 7, name: "Gaming Laptop i7", description: "Gaming laptop with Intel i7, RTX 3060, 144Hz display.", price: 1400, category: "Laptop", brand: "Asus ROG", stock: 7, rate: 4.6, images: [
                "img/products/laptops/laptop1/laptop1 (1).jpg",
                "img/products/laptops/laptop1/laptop1 (2).jpg",
                "img/products/laptops/laptop1/laptop1 (3).jpg"
            ]
        },
        {
            id: 8, name: "Ultrabook X13", description: "Slim ultrabook with Ryzen 5, 16GB RAM, and 512GB SSD.", price: 1100, category: "Laptop", brand: "Lenovo", stock: 9, rate: 4.5, images: [
                "img/products/laptops/laptop2/laptop2 (1).jpg",
                "img/products/laptops/laptop2/laptop2 (2).jpg",
                "img/products/laptops/laptop2/laptop2 (3).jpg"
            ]
        },
        {
            id: 9, name: "MacBook Air M2", description: "Apple laptop with M2 chip, 13-inch Retina display.", price: 1300, category: "Laptop", brand: "Apple", stock: 6, rate: 4.9, images: [
                "img/products/laptops/laptop3/laptop3 (1).jpg",
                "img/products/laptops/laptop3/laptop3 (2).jpg",
                "img/products/laptops/laptop3/laptop3 (3).jpg"
            ]
        },
        {
            id: 10, name: "Business Laptop i5", description: "Reliable business laptop with Intel i5, 8GB RAM.", price: 850, category: "Laptop", brand: "Dell", stock: 14, rate: 4.3, images: [
                "img/products/laptops/laptop4/laptop4 (1).jpg",
                "img/products/laptops/laptop4/laptop4 (2).jpg",
                "img/products/laptops/laptop4/laptop4 (3).jpg"
            ]
        },
    ],

    // Monitors
    monitor: [
        {
            id: 13, name: "Gaming Monitor 27”", description: "27-inch monitor, 165Hz, 1ms response, IPS panel.", price: 320, category: "Monitor", brand: "LG", stock: 10, rate: 4.7, images: [
                "img/products/monitors/monitor1/monitor1 (1).jpg",
                "img/products/monitors/monitor1/monitor1 (2).jpg",
                "img/products/monitors/monitor1/monitor1 (3).jpg"
            ]
        },
        {
            id: 14, name: "Office Monitor 24”", description: "24-inch FHD monitor with thin bezels.", price: 180, category: "Monitor", brand: "Dell", stock: 20, rate: 4.4, images: [
                "img/products/monitors/monitor2/monitor2 (1).jpg",
                "img/products/monitors/monitor2/monitor2 (2).jpg",
                "img/products/monitors/monitor2/monitor2 (3).jpg"
            ]
        },
        {
            id: 15, name: "UltraWide Monitor 34", description: "34-inch ultrawide for multitasking and design work.", price: 550, category: "Monitor", brand: "Samsung", stock: 8, rate: 4.6, images: [
                "img/products/monitors/monitor3/monitor3 (1).jpg",
                "img/products/monitors/monitor3/monitor3 (2).jpg",
                "img/products/monitors/monitor3/monitor3 (3).jpg"
            ]
        }
    ],

    // Mice
    mouse: [
        {
            id: 19, name: "Gaming Mouse RGB", description: "Wired gaming mouse with 16000 DPI and RGB lighting.", price: 60, category: "Mouse", brand: "Razer", stock: 15, rate: 3.5, images: [
                "img/products/mice/mouse1/mouse1 (1).jpg",
                "img/products/mice/mouse1/mouse1 (2).jpg",
                "img/products/mice/mouse1/mouse1 (3).jpg"
            ]
        },
        {
            id: 20, name: "Wireless Mouse", description: "Compact wireless mouse with long battery life.", price: 30, category: "Mouse", brand: "Logitech", stock: 25, rate: 4.4, images: [
                "img/products/mice/mouse2/mouse2 (1).jpg",
                "img/products/mice/mouse2/mouse2 (2).jpg",
                "img/products/mice/mouse2/mouse2 (3).jpg"
            ]
        },
        {
            id: 21, name: "Ergonomic Mouse", description: "Ergonomic mouse for office use, vertical design.", price: 45, category: "Mouse", brand: "Anker", stock: 18, rate: 4.5, images: [
                "img/products/mice/mouse3/mouse3 (1).jpg",
                "img/products/mice/mouse3/mouse3 (2).jpg",
                "img/products/mice/mouse3/mouse3 (3).jpg"
            ]
        },
        {
            id: 22, name: "Budget Mouse", description: "Simple wired mouse for daily use.", price: 12, category: "Mouse", brand: "HP", stock: 40, rate: 4.1, images: [
                "img/products/mice/mouse4/mouse4 (1).jpg",
                "img/products/mice/mouse4/mouse4 (2).jpg",
                "img/products/mice/mouse4/mouse4 (3).jpg"
            ]
        },
    ],

    // Keyboards
    keyboard: [
        {
            id: 25, name: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard with blue switches.", price: 90, category: "Keyboard", brand: "Corsair", stock: 12, rate: 3, images: [
                "img/products/keyboards/keyboard1/keyboard1 (1).jpg",
                "img/products/keyboards/keyboard1/keyboard1 (2).jpg",
                "img/products/keyboards/keyboard1/keyboard1 (3).jpg"
            ]
        },
        {
            id: 26, name: "Wireless Keyboard", description: "Slim wireless keyboard with rechargeable battery.", price: 50, category: "Keyboard", brand: "Logitech", stock: 18, rate: 4.4, images: [
                "img/products/keyboards/keyboard2/keyboard2 (1).jpg",
                "img/products/keyboards/keyboard2/keyboard2 (2).jpg",
                "img/products/keyboards/keyboard2/keyboard2 (3).jpg"
            ]
        },
        {
            id: 27, name: "Gaming Keyboard", description: "Gaming keyboard with macro keys and RGB lighting.", price: 120, category: "Keyboard", brand: "Razer", stock: 10, rate: 4.7, images: [
                "img/products/keyboards/keyboard3/keyboard3 (1).jpg",
                "img/products/keyboards/keyboard3/keyboard3 (2).jpg",
                "img/products/keyboards/keyboard3/keyboard3 (3).jpg"
            ]
        },
        {
            id: 28, name: "Budget Keyboard", description: "Affordable wired keyboard for daily use.", price: 20, category: "Keyboard", brand: "HP", stock: 30, rate: 4.1, images: [
                "img/products/keyboards/keyboard4/keyboard4 (1).jpg",
                "img/products/keyboards/keyboard4/keyboard4 (2).jpg",
                "img/products/keyboards/keyboard4/keyboard4 (3).jpg"
            ]
        },
    ],

    // Cooling Pads
    coolingpad: [
        {
            id: 29, name: "Gaming Cooling Pad", description: "RGB laptop cooling pad with 5 fans.", price: 45, category: "CoolingPad", brand: "Cooler Master", stock: 16, rate: 2, images: [
                "img/products/coolingpads/coolingpad1/coolingpad1 (1).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (2).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (3).jpg"
            ]
        },
        {
            id: 30, name: "Slim Cooling Pad", description: "Portable slim cooling pad for laptops up to 15”.", price: 25, category: "CoolingPad", brand: "Havit", stock: 22, rate: 4.3, images: [
                "img/products/coolingpads/coolingpad2/coolingpad2 (1).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (2).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (3).jpg"
            ]
        },
        {
            id: 31, name: "Heavy-Duty Cooling Pad", description: "Strong cooling pad for gaming laptops up to 17”.", price: 60, category: "CoolingPad", brand: "Thermaltake", stock: 10, rate: 4.5, images: [
                "img/products/coolingpads/coolingpad3/coolingpad3 (1).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (2).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (3).jpg"
            ]
        },
        {
            id: 32, name: "Budget Cooling Pad", description: "Affordable cooling pad with dual fans.", price: 20, category: "CoolingPad", brand: "Zebronics", stock: 30, rate: 4.1, images: [
                "img/products/coolingpads/coolingpad4/coolingpad4 (1).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (2).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (3).jpg"
            ]
        },
    ],

    // Printers
    printer: [
        {
            id: 34, name: "Laser Printer", description: "Fast monochrome laser printer for offices.", price: 200, category: "Printer", brand: "Brother", stock: 12, rate: 5, images: [
                "img/products/printers/printer1/printer1 (1).jpg",
                "img/products/printers/printer1/printer1 (2).jpg",
                "img/products/printers/printer1/printer1 (3).jpg"
            ]
        },
        {
            id: 35, name: "Inkjet Printer", description: "High-resolution color inkjet printer for home use.", price: 120, category: "Printer", brand: "HP", stock: 18, rate: 4.3, images: [
                "img/products/printers/printer2/printer2 (1).jpg",
                "img/products/printers/printer2/printer2 (2).jpg",
                "img/products/printers/printer2/printer2 (3).jpg"
            ]
        },
        {
            id: 36, name: "All-in-One Printer", description: "Print, scan, copy, fax – all-in-one machine.", price: 180, category: "Printer", brand: "Canon", stock: 10, rate: 4.4, images: [
                "img/products/printers/printer3/printer3 (1).jpg",
                "img/products/printers/printer3/printer3 (2).jpg",
                "img/products/printers/printer3/printer3 (3).jpg"
            ]
        },
        {
            id: 37, name: "Photo Printer", description: "Compact printer for high-quality photo prints.", price: 150, category: "Printer", brand: "Epson", stock: 14, rate: 4.6, images: [
                "img/products/printers/printer4/printer4 (1).jpg",
                "img/products/printers/printer4/printer4 (2).jpg",
                "img/products/printers/printer4/printer4 (3).jpg"
            ]
        },
    ],
    // Headphones
    headphone: [
        {
            id: 42, name: "Wireless Headphones", description: "Over-ear Bluetooth headphones with noise cancellation.", price: 150, category: "Headphone", brand: "Sony", stock: 0, rate: 4.1, images: [
                "img/products/headphones/headphone1/headphone1 (1).jpg",
                "img/products/headphones/headphone1/headphone1 (2).jpg",
                "img/products/headphones/headphone1/headphone1 (3).jpg"
            ]
        },
        {
            id: 43, name: "Gaming Headset", description: "Wired gaming headset with surround sound.", price: 80, category: "Headphone", brand: "HyperX", stock: 15, rate: 4.6, images: [
                "img/products/headphones/headphone2/headphone2 (1).jpg",
                "img/products/headphones/headphone2/headphone2 (2).jpg",
                "img/products/headphones/headphone2/headphone2 (3).jpg"
            ]
        },
    ]
};
// console.log(products);
// var wtf = document.getElementById('train');
// wtf.addEventListener('click',(e)=>{
//     console.log('WTF!!!!!!11');
//     console.log(e);

// })
// window.addEventListener('keydown', function(e){
//     // console.log(e);
//     if(e.code == 'Space'){
//         console.log('Space is pressed');
//     }

// })
// var inp = document.getElementById('inp');
// var grt = document.getElementById('greet');
// inp.addEventListener('input',(e)=>{
//     grt.innerText = "Hello" + e.target.value + ", how are you?"
// })

var productsSection = document.querySelector('#products')


let firstProduct = Object.values(products).map((el) => {
    return el[0]
})

//Check if objects properties are accessible
// console.log(Object.values(firstProduct[0]));
//Search Poducts



firstProduct.push({
    id: 4, name: "Gaming PC i9", description: "Beast gaming PC with Intel i9, RTX 4070, and water cooling.", price: 2100, category: "PC", brand: "MSI", stock: 5, rate: 4.8, images: [
        "img/products/pcs/pc4/pc4 (1).jpg",
        "img/products/pcs/pc4/pc4 (2).jpg",
        "img/products/pcs/pc4/pc4 (3).jpg"
    ]
})
firstProduct.push({
    id: 28, name: "Budget Keyboard", description: "Affordable wired keyboard for daily use.", price: 20, category: "Keyboard", brand: "HP", stock: 30, rate: 4.1, images: [
        "img/products/keyboards/keyboard4/keyboard4 (1).jpg",
        "img/products/keyboards/keyboard4/keyboard4 (2).jpg",
        "img/products/keyboards/keyboard4/keyboard4 (3).jpg"
    ]
})
firstProduct.push({
    id: 15, name: "UltraWide 34", description: "34-inch ultrawide for multitasking and design work.", price: 550, category: "Monitor", brand: "Samsung", stock: 8, rate: 4.6, images: [
        "img/products/monitors/monitor3/monitor3 (1).jpg",
        "img/products/monitors/monitor3/monitor3 (2).jpg",
        "img/products/monitors/monitor3/monitor3 (3).jpg"
    ]
})
firstProduct.push(
    {
        id: 9, name: "MacBook Air M2", description: "Apple laptop with M2 chip, 13-inch Retina display.", price: 1300, category: "Laptop", brand: "Apple", stock: 6, rate: 4.9, images: [
            "img/products/laptops/laptop3/laptop3 (1).jpg",
            "img/products/laptops/laptop3/laptop3 (2).jpg",
            "img/products/laptops/laptop3/laptop3 (3).jpg"
        ]
    }
)
// console.log(firstProduct);

// console.log(firstProduct);


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
        var pcard = `
        <div class="card product-card bg-white w-full md:w-[30%] flex-col shadow-md p-3 rounded-lg relative border border-transparent transition-1 hover:border-red-500">
            <div class="edit absolute right-4 top-2">
                <button class="btn"><i class="fas fa-edit text-gray-600"></i></button>
                <button class="btn AddToWishList" data-id=${el.id} data-cat=${el.category}>${wishlist.some(item => item.id === el.id)
                ? '<i class="fas fa-heart text-red-500"></i>'
                : '<i class="far fa-heart text-red-500"></i>'

            }</button>
            </div>
            <div class="productImage w-full flex justify-center items-center  h-full p-4">
                <img id="pImg" data-imgOne="${el.images[0]}" data-imgTwo="${el.images[1]}" data-imgThree="${el.images[2]}" src="${el.images[0]}" alt="${el.name}" class="img w-full h-50 object-contain">
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
                    <span id="pPrice" class="text-3xl text-purple-500 font-bold">$${el.price}</span>


                </p>
                            <div class="viewDetails">
                <button id="viewDetailsBtn"
                    class="viewDetailsBtn btn btn-primary w-full ${el.stock == 0 ? 'btn-disabled' : ''}" data-id=${el.id} data-category=${el.category}>View Details</button>
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

// genFn(firstProduct, productsSection);

var detailsWindow = document.createElement('div');
detailsWindow.className = 'dtlsWindow flex justify-center items-center fixed z-50 inset-0 bg-black/70 hidden'


detailsWindow.innerHTML = `
<div
            class="dtlsWindowCard overflow-y-scroll overscroll-contain relative bg-white  w-[95%]  h-[75%] py-4 z-50 shadow-md p-3 lg:p-3 rounded-lg flex flex-col lg:flex-row  justify-around items-center gap-4 ">
                        <button id="closeWindow" class="closeWindow btn absolute top-2 right-2 bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>

            <div class="productImage flex flex-col gap-2 h-[70%] justify-center items-center w-[100%] lg:w-[50%] lg:h-[100%] p-2 lg:p-4">
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
                    <span class="productPrice text-3xl text-purple-500 font-bold"></span>
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
                <div class="AddToCart w-full lg:w-1/4">
                    <button class="AddToCartBtn btn btn-primary w-full ">Add to
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
            detailsWindow.querySelector('.productName').textContent = foundProduct.name;
            detailsWindow.querySelector('.productDisc').textContent = foundProduct.description;
            detailsWindow.querySelector('.productPrice').textContent = `$${foundProduct.price}`;
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
// viewDtls()
let cart = [];
//Generate DOM in cart
function showCart(cartArr) {
    if (cartArr.length == 0) {
        cartCard.innerHTML = `<p class="font-bold text-2xl w-full text-center text-gray-400">Your Shopping Cart 🛒 is empty</p>`
        document.getElementById('cartNotification').classList.add('hidden');
        return
    }
    cartCard.innerHTML = ``
    cartArr.forEach((item,index) => {
        cartCard.innerHTML +=
            `
            <div class="cartItem relative p-2 border border-gray-200 flex flex-col lg:flex-row gap-2 lg:gap-0 rounded-lg h-[30%] lg:h-[40%]">
                <button class="btn removeFromCart  hover:bg-red-500 text-red-500 font-bold hover:text-white border-2 border-red-500 absolute top-1 right-1 w-5 h-5  z-10" title="Reomve Product From Cart"><i class="fas fa-trash-alt"></i></button>
                <div class="cartItemImg w-full p-2 lg:w-[35%] flex justify-center h-[50%] lg:h-[100%]">
                    <img src="${item.images[0]}" alt="${item.name}" class="img p-1 w-[90%] h-[75%%] object-contain">
                </div>
                <div class="cartItemInfo table w-full lg:w-[65%] lg:h-full flex flex-col h-fit">
                    <div class="table-row !border-b-1 border-gray-500"><h1 class="table-cell font-bold text-sm">${item.name}</h1></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Quantity: </span><span class="table-cell"><button class="btn w-7 h-full text-lg minus" data-index=${index}>-</button><i class=" text-gray-600 ">${item.quantity}</i><button class="btn w-7 h-full text-lg plus" data-index=${index}>+</button></span></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Price Per Unit: </span><i class="table-cell  text-gray-600 ">${item.price}$</i></div>
                    <div class="table-row !border-b-1 border-gray-500"><span class="text-sm table-cell">Total: </span><i class="table-cell  text-gray-600 font-bold">${item.quantity * item.price}$</i></div>
                </div>
            </div>
        `
    })
    var minusBtns = cartCard.querySelectorAll('.minus');
    minusBtns.forEach((minusBtn)=>{
        minusBtn.onclick = ()=>{
            var index = parseInt(minusBtn.getAttribute('data-index'));
            cart[index].quantity!=1?cart[index].quantity--:''
            showCart(cart);
        }
    })
    var plusBtns = cartCard.querySelectorAll('.plus');
    plusBtns.forEach((plusBtn)=>{
        plusBtn.onclick = ()=>{
            var index = parseInt(plusBtn.getAttribute('data-index'));
            cart[index].quantity<cart[index].stock?cart[index].quantity++:cart[index].quantity=cart[index].stock;
            showCart(cart);
        }
    })

    var removeFromCartBtn = cartCard.querySelectorAll('.removeFromCart');
    removeFromCartBtn.forEach((btn, index) => {
        btn.onclick = () => {
            cart.splice(index, 1);
            showCart(cart);
        }
    })
    // var minus = cartCard.querySelector('#minus')
    // console.log(minus);
    // minus.onclick = ()=>{

    // }

}
function buy(ProductToBuy) {
    var AddToCartBtn = detailsWindow.querySelector('.AddToCartBtn')
    AddToCartBtn.innerHTML = `Add To Cart`
    var quantityInput = detailsWindow.querySelector('#quantity');
    quantityInput.value = 1;
    var total = quantityInput.value * ProductToBuy.price;

    var decreaseBtn = detailsWindow.querySelector('#decrease');
    var increaseBtn = detailsWindow.querySelector('#increase');
    // var productToBuyStock = detailsWindow.querySelector('.productStock');
    decreaseBtn.onclick = () => {
        quantityInput.value != 1 ? quantityInput.value-- : '';
        if (quantityInput.value < ProductToBuy.stock && increaseBtn.classList.contains('btn-disabled')) {
            increaseBtn.classList.remove('btn-disabled')
        }
        total = quantityInput.value * ProductToBuy.price;
        quantityInput.value == 1 ? AddToCartBtn.innerHTML = `Add To Cart` : AddToCartBtn.innerHTML = `Add To Cart $${total}`;
    }

    increaseBtn.onclick = () => {
        quantityInput.value < ProductToBuy.stock ? quantityInput.value++ : increaseBtn.classList.add('btn-disabled');

        total = quantityInput.value * ProductToBuy.price;
        AddToCartBtn.innerHTML = `Add To Cart $${total}`
        // productToBuyStock.innerHTML = `${ProductToBuy.stock - parseInt(quantityInput.value)} left`;
    }

    AddToCartBtn.onclick = () => {
        // parseInt(quantityInput.value++);
        var cartNotification = document.getElementById('cartNotification');
        var eleIndex = cart.findIndex(product => product.id == ProductToBuy.id);

        var addedQuantity = parseInt(quantityInput.value);
        if (eleIndex === -1) {
            addedQuantity > ProductToBuy.stock ? addedQuantity = ProductToBuy.stock : '';
            ProductToBuy.quantity = addedQuantity;
            cart.push(ProductToBuy);
        }
        else {
            var overallQuantity = cart[eleIndex].quantity + addedQuantity;
            overallQuantity > ProductToBuy.stock ? overallQuantity = ProductToBuy.stock : '';
            cart[eleIndex].quantity = overallQuantity;
        }

        cartNotification.classList.remove('hidden')
        cartNotification.innerText = cart.length;
        showCart(cart)

        let totalsArray = cart.map(purchasedProduct => {
            return purchasedProduct.quantity * purchasedProduct.price;
        });
        var totalOfTotals = totalsArray.reduce((ToT, el) => {
            return ToT + el;
        })

        //  `<p class="overallTotal">${totalOfTotals}</p>`
        let quantitiesArray = cart.map(purchasedProduct => {
            return purchasedProduct.quantity;
        });
        var bottomLineItems = quantitiesArray.reduce((sum, el) => {
            return sum + el;
        })
        var bottomLine = document.createElement('p');
        bottomLine.innerHTML = `<div class="table text-right p-2 border border-gray-200 rounded-lg"><div class="table-row"><span class="table-cell">Receipt Date: <b class="text-gray-600 text-xsm">${new Date()}</b></span><span class="table-cell">Overall Items: <b class="text-gray-600">${bottomLineItems}</b></span> <span class="table-cell">Overall Total: <b class="text-gray-600">${totalOfTotals}$</b></span></div></div>`
        cartCard.append(bottomLine)
        console.log(quantitiesArray);

        // console.log(totalsArray);
        console.log(totalOfTotals);

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
            // el.classList.add('!border-blue-500', 'border-2')
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
    if (window.innerWidth <= 768) {
        toggleGrid.classList.add('hidden')
        toggleList.classList.add('hidden')
    }
    else {
        toggleGrid.classList.remove('hidden')
        toggleList.classList.remove('hidden')
    }
    var productCard = document.querySelectorAll('.product-card')
    var productCardImage = document.querySelectorAll('.productImage')
    var productCardDetails = document.querySelectorAll('.details')

    var productBrandBadge = document.querySelectorAll('span.brand')
    var productCategoryBadge = document.querySelectorAll('span.category')

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
        viewDetailsBtn.forEach(btn => {
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
        viewDetailsBtn.forEach(btn => {
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
<div class="wishlistCard bg-white flex flex-col gap-2 w-[75%] lg:w-1/2 h-[80%] lg:h-1/2 overflow-y-scroll p-4 rounded-lg">
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
             <div class="wishListItem relative p-2 border border-gray-200 flex flex-col lg:flex-row gap-2 lg:gap-0 rounded-lg h-[30%] lg:h-[50%]">
                 <button class="btn removeFromWishList  hover:bg-red-500 text-red-500 font-bold hover:text-white border-2 border-red-500 absolute top-1 right-1 w-fit h-fit p-1" title="Reomve Product From Wish List"><i class="fas fa-trash-alt"></i></button>
                 <div class="wishItemImg w-full p-2 lg:w-[25%] flex justify-center h-[60%] lg:h-[100%]">
                     <img src="${ele.images[0]}" alt="${ele.name}" class="img p-1 w-[90%] h-[100%] object-contain">
                 </div>
                 <div class="wishItemInfo w-full lg:w-[75%] lg:h-full h-fit flex flex-col justify-center">
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
    // var notification = document.getElementById('wishListNotification');
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
cartWindow.innerHTML = `<div class="cartCard bg-white flex flex-col gap-2 w-[75%] lg:w-1/2 h-[80%]  overflow-y-scroll p-4 rounded-lg"></div>`
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
    // let prdcts = Object.values(firstProduct).flat();
    // return searchedProdyct.filter(el => el.name.includes(input)||el.description.includes(input)||el.category.includes(input)||el.brand.includes(input)||el.price.includes(input))
    // var  return prdcts.filter(el => el.name.includes(input) || el.description.includes(input))
    let prdcts = firstProduct.filter((el) => {
        // return el.name.toLowerCase().includes(input.toLowerCase())|| el.description.toLowerCase().includes(input.toLowerCase());
        var userInput = input.trim().toLowerCase();
        // return el.name.toLowerCase().includes(userInput);
        return el.name.toLowerCase().includes(userInput) ||
            el.description.toLowerCase().includes(userInput) ||
            el.category.toLowerCase().includes(userInput) ||
            el.brand.toLowerCase().includes(userInput) || el.price.toString().includes(userInput) || ''
        // el.price.toLowerCase().includes(input.toLowerCase())


    })
    if (prdcts.length == 0) {
        productsSection.innerHTML = `<p class="ring ring-gray-500 rounded-lg w-full p-3 text-center">Sorry, Product Not Found <span class="font-bold text-4xl text-red-500">:-( </span></p>`;
    }
    else {
        productsSection.innerHTML = '';
        genFn(prdcts, productsSection);
        toggleView()
        // viewDtls()
        // console.log(prdcts);
        // AddToWishList();
    }


}

var searchBar = document.getElementById('searchbar');
searchBar.addEventListener('input', () => {
    var searchTxt = searchBar.value || '';
    search(searchTxt)


})
genFn(firstProduct, productsSection);