const divmakanan = document.getElementById('makanan'),
header = document.querySelector('header'),
testimoni = document.getElementById('testimoni'),
divminuman = document.getElementById('minuman');

let list = {
    makanan: Array(
        {
            nama: 'Burger',
            image: './assets/images/makanan/burger.jpg',
        }, 
        {
            nama: "Hotdog",
            image: './assets/images/makanan/hotdog.jpg', 
        },
        {
            nama: "Lasagna",
            image: './assets/images/makanan/lasagna.jpg',
        },
        {
            nama: 'Lasagna2',
            image: './assets/images/makanan/lasagna2.jpg',
        },
        {
            nama: "Pizza",
            image: './assets/images/makanan/pizza.jpg',
        },
        {
            nama: 'Risotto',
            image: './assets/images/makanan/risotto.jpg',
        },
        {
            nama: "Roti Bakar",
            image: './assets/images/makanan/rotibakar.jpg',
        },
        {
            nama: "Spaghetti",
            image: './assets/images/makanan/spaghetti.jpg',
        },
        ),
    minuman: Array(
        {
            nama: "Black Coffee",
            image: './assets/images/minuman/blackcoffee.jpg',
        },
        {
            nama: "Cappucino",
            image: './assets/images/minuman/cappucino.jpg',
        },
        {
            nama: "Es Lemon",
            image: './assets/images/minuman/eslemon.jpg',
        },
        {
            nama: "Ice Chocolate",
            image: './assets/images/minuman/icechocolate.jpg',
        },
        {
            nama: "Ice Cream",
            image: './assets/images/minuman/icecream.jpg',
        },
        {
            nama: "Vanila Milkshake",
            image: './assets/images/minuman/vanilamilkshake.jpg',
        },
        )
}
let review = [
    {
        nama: "Johnson",
        desc: "It's not too bad, it taste rather unique",
        star: 3
    },
    {
        nama: "Ricky",
        desc: "It's taste so amazing, I like it alot it's is a masterpeice",
        star: 5
    },
    {
        nama: "Anonim",
        desc: "Interesting Taste, I kinda like it",
        star: 4
    },
    {
        nama: "Galang",
        desc: "Rasanya seperti membuat hacker ini kenyang, minta ampun dompetku menipis.",
        star: 6
    }, 
    {
        nama: "Jaya",
        desc: "Servisnya lambat, pelayannya toxic.",
        star: 5
    }
]
let SlideIndexMinuman = 0
let SlideIndexMakanan = 0

// Start Navbar
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 100){
        header.classList.add('below')
    } else {
        header.classList.remove('below')
    }
})
// End Navbar

// Menu
for(let i = 0; i < list.makanan.length; i++){
    let slide = document.createElement('div');
    slide.style.background = `url(${list.makanan[i].image})`;
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundSize = 'no-repeat';
    if(i == 0){
        slide.classList.add('active')
    }
    slide.setAttribute('data-type', 'makanan')
    slide.classList.add('slide');
    divmakanan.append(slide);
}

for(let i = 0; i < list.minuman.length; i++){
    let slide = document.createElement('div');
    slide.style.background = `url(${list.minuman[i].image})`;
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundSize = 'no-repeat';
    if(i == 0){
        slide.classList.add('active')
    }
    slide.setAttribute('data-type', 'minuman')
    slide.classList.add('slide');
    divminuman.append(slide);
}
// Menu End

// Slideshow Start
function SlideshowMakanan(){
    let i;
    let slides = document.querySelectorAll('[data-type="makanan"]')
    //menghapus seluruh class yang memiliki class active
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    SlideIndexMakanan++;
    // Mengembalikan ke slide yang pertama
    if(SlideIndexMakanan > slides.length) {
        SlideIndexMakanan = 1;
    }
    //Menambahkan Class active ketika pada slide index yang aktif
    slides[SlideIndexMakanan - 1].classList.add('active');
}
setInterval(SlideshowMakanan, 2000)

function SlideshowMinuman(){
    let i;
    let slides = document.querySelectorAll('[data-type="minuman"]')
    //menghapus seluruh class yang memiliki class active
    for (i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    SlideIndexMinuman++;
    // Mengembalikan ke slide yang pertama
    if(SlideIndexMinuman > slides.length) {
        SlideIndexMinuman = 1;
    }
    //Menambahkan Class active ketika pada slide index yang aktif
    slides[SlideIndexMinuman - 1].classList.add('active');
}
setInterval(SlideshowMinuman, 2000)
// Slideshow End

// Testimoni Start
for(let indexReview = 0; indexReview < review.length; indexReview++){
    let div = document.createElement('div');
    div.classList.add('review');
    let point = document.createElement('div');
    point.classList.add('point');
    for(let StarIndex = 1; StarIndex <= review[indexReview].star; StarIndex++){
        console.log(StarIndex)
        point.innerHTML += "&#9733;";
        if(StarIndex > 4){
            break;
        }
    }
    div.append(point);
    let name = document.createElement('p');
    name.innerHTML = review[indexReview].nama;
    div.append(name);
    let descText = `"${review[indexReview].desc}"`
    let desc = document.createElement('p');
    desc.innerHTML = descText;
    div.append(desc);
    testimoni.append(div)
}
// Testimoni End