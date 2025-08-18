var cars = [
    {
        name: "Tesla Model S", // lowerCase: 'tesla model s'
        price: "$79,990",
        year: 2023,
        color: "Red",
        images: [
            './img/car-1.webp'
        ]
    },
    {
        name: "Ford Mustang",
        price: "$55,300",
        year: 2021,
        color: "Blue",
        images: [
            "./img/car-1.webp",
            "./img/car-1.webp"
        ]
    },
    {
        name: "BMW M3",
        price: "$69,900",
        year: 2022,
        color: "Black",
        images: [
            "./img/car-1.webp",
            "./img/car-1.webp",
        ]
    },
    {
        name: "Audi A4",
        price: "$39,100",
        year: 2020,
        color: "White",
        images: [
            "./img/car-1.webp",
            "./img/car-1.webp",
        ]
    }
];

// tranform the array to cards

// [{name: ''}  {title: ''}, 50]
function generateCards(items) { // array of cars objects
    var carsSection = document.querySelector('#cars-container')

    carsSection.innerHTML = '';

    items.forEach(function (item, index) {
        var carElement = document.createElement('div');
        carElement.setAttribute('class', 'flex flex-col gap-2 border-2 border-white rounded-sm text-gray-200 p-4 hover:bg-slate-800 cursor-pointer transition-all');

        var carName = document.createElement('span');
        carName.classList.add('text-xl');
        carName.textContent = `Name: ${item.name}`;

        var carYear = document.createElement('span');
        carYear.classList.add('text-sm');
        carYear.textContent = `Year: ${item.year}`;

        // add listener
        carElement.addEventListener('click', function () {
            selectCar(index, cars[index]);
        })

        carElement.append(carName, carYear);
        carsSection.append(carElement);
    })


}

function selectCar(index, car) {

    // select the car card for index (index) from cars-container
    var carsContainer = document.querySelector('#cars-container')
    var selectedChildNode = carsContainer.children[index];

    [...carsContainer.children].forEach(function (item) {
        item.classList.remove('!border-blue-500')
    })

    selectedChildNode.classList.add('!border-blue-500');

    // select html elements
    var carImg = document.querySelector('#car-detail-image');
    var carName = document.querySelector('#car-detail-name');
    var carYear = document.querySelector('#car-detail-year');
    var carPrice = document.querySelector('#car-detail-price');

    carName.textContent = `Name: ${car.name}`;
    carYear.textContent = `Year: ${car.year}`;
    carPrice.textContent = `Price: ${car.price}`;

    carImg.setAttribute('src', car.images[0])
}


var searchEl = document.querySelector('[name="search-input"]');

function search(userInput) { // text user had entered in search field

    var filteredCars = cars.filter(function (item) { // item is car obejct from cars array
        // return item.name == userInput; // 'tesla' 'tesla'
        // return item.name.startsWith(userInput); // 'te' 'tesla'
        // return item.name.endsWith(userInput); // 'la' 'tesla'
        return item.name.toLowerCase().includes(userInput.toLowerCase().trim()); // 'la' or 'te' or 'sl' 'tesla'
    }) // []

    generateCards(filteredCars);

    selectCar(0, filteredCars[0]);
}

searchEl.addEventListener('input', function () {
    var userInput = searchEl.value

    search(userInput);
})

var addCarBtn = document.querySelector('#add-car-btn');

var addCarForm = document.querySelector('#add-car-form');

addCarForm.addEventListener('submit', function (ev) {
    ev.preventDefault();  // stop the default behavior of that event
    addCar();
})

// addCarBtn.addEventListener('click', function(event) {
//     event.preventDefault(); // stop the default behavior of that event

//     console.log('hello test');
// })


function validate() {
    // take all inputs
    var inputsElements = document.querySelectorAll('#add-car-form input');

    // remove all error messages elements
    document.querySelectorAll('[name="error-msg"]').forEach(function (test) {
        test.remove();
    })

    // take only required inputs
    var requiredElements = [...inputsElements].filter(function (item) {
        if (item.getAttribute('data-validation') == 'required') return true;
        return false;
    })

    // requiredElements = array of inputs
    var isValidate = true;

    requiredElements.forEach(function (item) {

        var itemName = item.getAttribute('name');

        if (item.value.trim().length == 0) {
            var errorMsg = document.createElement('div')
            errorMsg.textContent = `${itemName} is required`
            errorMsg.classList.add('text-red-500')
            errorMsg.setAttribute('name', 'error-msg')

            item.after(errorMsg);

            isValidate = false;
        }
    })

    // var requiredWithNoValues = requiredElements.filter(function (item) {
    //     return item.value.length == 0
    // })
    return isValidate;

}


function addCar() {
    var carNameVal = document.querySelector('[name="car_name"]').value
    var carYearVal = document.querySelector('[name="car_year"]').value
    var carPriceVal = document.querySelector('[name="car_price"]').value
    var carColorVal = document.querySelector('[name="car_color"]').value

    if (!validate()) return;

    // // if (!carNameVal) {
    // //     var errorMsg = document.createElement('div');
    // //     errorMsg.textContent = 'Name is Required';
    // //     errorMsg.classList.add('text-red-500')
    // //     document.querySelector('[name="car_name"]').after(errorMsg);

    // //     // document.querySelector('#car_name_msg').textContent = 'Name is Required';
    // //     // document.querySelector('#car_name_msg').classList.remove('opacity-0');
    // // }

    // if (!carYearVal) {

    // }

    // if (!carPriceVal) {

    // }

    // if (!carColorVal) {

    // }

    // if (!carNameVal || !carPriceVal || !carYearVal || !carColorVal) return;

    var newCar = {
        name: carNameVal,
        year: carYearVal,
        price: carPriceVal,
        color: carColorVal,
        images: []
    }

    // push new object into cars array
    cars.push(newCar); // update the original array

    // re-generate the cards on DOM by invoking the generateCards after pushing the new object
    generateCards(cars);

    // clear inputs after submit
    addCarForm.reset();

    // show toaster message
    var toasterEl = document.querySelector('#toaster')
    toasterEl.classList.remove('hidden');

    // remove toaster after 1 second
    setTimeout(function () {
        toasterEl.classList.add('hidden');
    }, 1000);

}


// generate cards elements from cars array
generateCards(cars);

// auto select the first car
selectCar(0, cars[0]);