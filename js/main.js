const text = "Shop the most modern devices with jaw-dropping prices"
let animatedPar = document.getElementById("typing-text");
console.log(animatedPar)

function typingAnimation() {
    for (let i = 1; i <= text.length; i++) {
        setTimeout(() => {
            animatedPar.innerHTML += text[i - 1];
        }, 100 * i);
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
    //    

    heroImage.classList.remove('opacity-0');
    // console.log(i);
    i++;
    if (i == hero_slider.length) {
        i = 0
    }


}, 2000)
// for (let i = 1; i <= hero_slider.length; i++) {
//     setTimeout(() => {
//         heroImage.setAttribute('src', hero_slider[i - 1].url)
//     }, 1000 * i)
// }