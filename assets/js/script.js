const divmakanan = document.getElementById('makanan'),
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


let SlideIndexMakanan = 0
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

let SlideIndexMinuman = 0
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

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        header.classList.add('below')
    } else {
        header.classList.remove('below')
    }
})