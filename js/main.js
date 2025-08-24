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
    monitor:[
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
    mouse:[
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
    keyboard:[
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
                "img/products/keyboards/keyboard2/keyboard1 (3).jpg"
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
    coolingpad:[
        {
            id: 29, name: "Gaming Cooling Pad", description: "RGB laptop cooling pad with 5 fans.", price: 45, category: "Cooling Pad", brand: "Cooler Master", stock: 16, rate: 2, images: [
                "img/products/coolingpads/coolingpad1/coolingpad1 (1).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (2).jpg",
                "img/products/coolingpads/coolingpad1/coolingpad1 (3).jpg"
            ]
        },
        {
            id: 30, name: "Slim Cooling Pad", description: "Portable slim cooling pad for laptops up to 15”.", price: 25, category: "Cooling Pad", brand: "Havit", stock: 22, rate: 4.3, images: [
                "img/products/coolingpads/coolingpad2/coolingpad2 (1).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (2).jpg",
                "img/products/coolingpads/coolingpad2/coolingpad2 (3).jpg"
            ]
        },
        {
            id: 31, name: "Heavy-Duty Cooling Pad", description: "Strong cooling pad for gaming laptops up to 17”.", price: 60, category: "Cooling Pad", brand: "Thermaltake", stock: 10, rate: 4.5, images: [
                "img/products/coolingpads/coolingpad3/coolingpad3 (1).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (2).jpg",
                "img/products/coolingpads/coolingpad3/coolingpad3 (3).jpg"
            ]
        },
        {
            id: 32, name: "Budget Cooling Pad", description: "Affordable cooling pad with dual fans.", price: 20, category: "Cooling Pad", brand: "Zebronics", stock: 30, rate: 4.1, images: [
                "img/products/coolingpads/coolingpad4/coolingpad4 (1).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (2).jpg",
                "img/products/coolingpads/coolingpad4/coolingpad4 (3).jpg"
            ]
        },
    ],

    // Printers
    printer:[
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
    headphone:[
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

var productsSection = document.querySelector('#products')


let firstProduct = Object.values(products).map((el) => {
    return el[0];
})

// console.log(firstProduct);

// console.log(firstProduct);


function genFn(arrg, div) {
    arrg.map((el) => {
        // Assign rate dynamically function        
        let stars = '';
        function getRate() {
            for (let v = 1; v <= 5; v++) {

                if (v <= Math.floor(el.rate)) {
                    stars = stars + '<i class="fas fa-star text-gold"></i>'
                }
                else if (v == Math.floor(el.rate) + 1 && el.rate % 1 >= 0.5) {
                    stars = stars + '<i class="fas fa-star-half-alt text-gold"></i>'
                }
                else {
                    stars = stars + '<i class="far fa-star text-gold"></i>'
                }
            }
        }
        getRate()

        //generate cards
        // var quantity = 1;
        var pcard = `
        <div class="card product-card bg-white w-full md:w-[30%] shadow-md p-3 rounded-lg flex flex-col relative">
            <div class="edit absolute right-4 top-2">
                <button class="btn"><i class="fas fa-edit text-gray-600"></i></button>
                <button class="btn"><i class="far fa-heart text-red-500"></i></button>
            </div>
            <div class="productImage flex justify-center items-center w-full h-full p-4">
                <img id="pImg" data-imgOne="${el.images[0]}" data-imgTwo="${el.images[1]}" data-imgThree="${el.images[2]}" src="${el.images[0]}" alt="${el.name}" class="img w-full h-50 object-contain">
            </div>
            <div class="details  flex flex-col gap-5 mb-6">
                <h1 id="pName" class="text-xl font-bold truncate" title="${el.name}">${el.name}</h1>
                <p id="pDisc" class="truncate" title="${el.description}">${el.description}</p>
                <p class="flex w-full">

                    <span id="pRate" name="rate" data-rate='${el.rate}'>
                        ${stars}
                        (${el.rate})
                    </span>
                    <span id="pCategory" class="badge category border border-gray-400 px-2 rounded-lg hidden">${el.category}</span>
                    <span id="pStock" class="badge border stock border-gray-400 px-2 rounded-lg ml-4" data-stock='${el.stock}'>${el.stock} left</span>
                </p>
                <p class="flex items-center gap-3">
                    <span id="pPrice" class="text-3xl text-purple-500 font-bold">$${el.price}</span>

                    <span id="pBrand" class="badge border border-gray-400 px-2 rounded-lg hidden">Brand: ${el.brand}</span>
                </p>
            </div>
            <div class="viewDetails">
                <button id="viewDetailsBtn"
                    class="viewDetailsBtn btn btn-primary w-full ${el.stock == 0 ? 'btn-disabled' : ''}" data-id=${el.id} data-category=${el.category}>View Details</button>
            </div>
        </div>
        `
        div.innerHTML += pcard;

    })

}

genFn(firstProduct, productsSection);
// <button id="closeWindow" onclick=${() => { closeWindow(tafaseelWindow) }} class="closeWindow btn absolute top-2 right-2 bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>

var tafaseelWindow = document.createElement('div');
tafaseelWindow.className = 'dtlsWindow flex justify-center items-center fixed z-50 inset-0 bg-black/70 hidden'


tafaseelWindow.innerHTML = `
<div
            class="dtlsWindowCard overflow-y-scroll overscroll-contain relative bg-white  w-[95%] md:w-[70%]  h-[90%] overflow- z-50 shadow-md p-3 rounded-lg flex flex-col lg:flex-row  justify-around items-center gap-1 ">
                        <button id="closeWindow" class="closeWindow btn absolute top-2 right-2 bg-red-500 text-white text-lg h-8 w-8 hover:bg-red-700">X</button>

            <div class="productImage flex flex-col gap-2 justify-end h-[50%] items-center w-[100%] lg:w-[50%] lg:h-full p-4">
                <img src="" alt="" class="img mainproductimage w-full h-[60%] md:h-[70%] object-contain">
                <div class="productImages border border-gray-300 flex justify-center w-full gap-3 h-[40%] md:h-[20%] rounded-lg p-1 md:p-2">            
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[30%] h-full object-contain">
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[30%] h-full object-contain">
                    <img src="" alt="" class="thumbnail img p-1 md:p-2 border border-gray-400 rounded-lg  w-[30%] h-full object-contain">
                </div>
            </div>
            <div class="details  w-[100%]  flex flex-col gap-2">
                <h1 class="productName text-xl font-bold " title=""></h1>
                <p class="productDisc w-half" title=""></p>
                <p class="flex items-center gap-3">
                    <span class="productPrice text-3xl text-purple-500 font-bold">$</span>
                </p>
                <p class="flex w-full">
                    <span class="productRate" name="rate">
                    
                    </span>
                </p>
                <p class="flex flex-col  gap-3">
                    <span class="badge productBrand border border-gray-400 px-2 rounded-lg w-fit">Brand: </span>
                    <span class="badge productCategory border border-gray-400 px-2 rounded-lg">Category: </span>
                </p>
                <p>
                    Stock: <span class="badge productStock border stock border-green-400 bg-green-400 text-white px-2 rounded-lg ml-4" value=''> left</span>
                </p>
                <p class="flex justify-between gap-2 w-[30%]">
                    Quantity: <button id="decrease" class="btn w-7 h-full text-lg">-</button> <input id="quantity" class="input w-20 text-center h-full text-lg" type="number" readonly value="1" min="1" max="" ><button id="increase" class="btn w-7 h-full text-lg" >+</button>
                </p>
                <div class="AddToCart">
                    <button class="AddToCartBtn btn btn-primary w-full ">Add to
                        cart </button>
                </div>
            </div>
        </div>
`

tafaseelWindow.addEventListener('click', () => {
    tafaseelWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    tafaseelWindow.querySelector('#quantity').value = 1;

})

document.body.appendChild(tafaseelWindow);

var viewDetailsBtn = document.querySelectorAll('.viewDetailsBtn');
viewDetailsBtn.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        let productID = parseInt(btn.getAttribute('data-id'));
        let productCategory = (btn.getAttribute('data-category')).toLowerCase();
        
    // console.log(products.prod);


        function searchById(productCategory, productID){
            return products[productCategory].find(product => product.id == productID);
        }
        const foundProduct = searchById(productCategory, productID);
        console.log(foundProduct);
        
        // console.log(productID);
        // console.log(products.laptop);
        
        
        let card = btn.closest('.product-card');
        var cardIMg = card.querySelector('img#pImg');
        var cardName = card.querySelector('h1#pName');
        var cardDisc = card.querySelector('p#pDisc');
        var cardRate = card.querySelector('span#pRate');
        var cardCategory = card.querySelector('span#pCategory');
        var cardPrice = card.querySelector('span#pPrice');
        // console.log(id);
        
        console.log(cardPrice.innerText.slice(1,cardPrice.innerText.length));
        
        var cardBrand = card.querySelector('span#pBrand');
        var thumbnails = tafaseelWindow.querySelectorAll('.thumbnail')
        var AddToCartBtn = tafaseelWindow.querySelector('.AddToCartBtn')
        var cardStock = card.querySelector('span#pStock');
        var quantity = tafaseelWindow.querySelector('#quantity');
        console.log(AddToCartBtn);
        AddToCartBtn.textContent+= quantity.value * parseInt(cardPrice.innerHTML)
        quantity.value=1;
        console.log(quantity);
        var decreaseBtn = tafaseelWindow.querySelector('#decrease');
        var increaseBtn = tafaseelWindow.querySelector('#increase');
        console.log(decreaseBtn, increaseBtn);

        decreaseBtn.onclick= () => {
            quantity.value != 1 ? quantity.value-- : '';
        }

        increaseBtn.onclick= () => {
            quantity.value < parseInt(cardStock.innerHTML) ? quantity.value++ : '';
        }

        thumbnails[0].src = cardIMg.getAttribute('data-imgOne');
        thumbnails[1].src = cardIMg.getAttribute('data-imgTwo');
        thumbnails[2].src = cardIMg.getAttribute('data-imgThree');
        thumbnails.forEach(img => img.alt = cardIMg.alt)
        thumbnails.forEach(img => img.classList.remove('ring-2', 'ring-blue-500'))
        thumbnails[0].classList.add('ring-2', 'ring-blue-500')


        tafaseelWindow.querySelector('.mainproductimage').src = cardIMg.src;
        tafaseelWindow.querySelector('.mainproductimage').alt = cardIMg.alt;



        tafaseelWindow.querySelector('.productName').textContent = cardName.innerText;
        tafaseelWindow.querySelector('.productName').textContent = cardName.innerText;
        tafaseelWindow.querySelector('.productDisc').textContent = cardDisc.innerText;
        tafaseelWindow.querySelector('.productPrice').textContent = cardPrice.innerText;
        tafaseelWindow.querySelector('.productRate').innerHTML = cardRate.innerHTML;
        tafaseelWindow.querySelector('.productBrand').textContent = cardBrand.innerText;
        tafaseelWindow.querySelector('.productCategory').textContent = cardCategory.innerText;
        tafaseelWindow.querySelector('.productStock').textContent = cardStock.innerText;

        tafaseelWindow.classList.remove('hidden');
        // quantity.value=1;
        document.body.classList.add('overflow-hidden')

    })
})


tafaseelWindow.querySelector('div.dtlsWindowCard').addEventListener('click', (e) => {
    e.stopPropagation();
})
tafaseelWindow.querySelector('#closeWindow').addEventListener('click', () => {
    tafaseelWindow.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    tafaseelWindow.querySelector('#quantity').value = 1;
})





/*Select Product Image*/
function selectImg() {
    var productImageMain = tafaseelWindow.querySelector('.mainproductimage');
    var thumbnails = tafaseelWindow.querySelectorAll('.thumbnail');

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

