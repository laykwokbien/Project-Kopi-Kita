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
        }
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
    let p = document.createElement('p');
    p.innerHTML = list.makanan[i].nama;
    p.style.color = 'var(--primary-color)';
    p.style.display = 'flex';
    p.
    p.style.width = "100%";
    p.style.height = "100%";
    slide.append(p);
    slide.style.background = `url(${list.makanan[i].image})`;
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundSize = 'no-repeat';
    slide.classList.add('slide');
    divmakanan.append(slide);
}
for(let i = 0; i < list.minuman.length; i++){
    let slide = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = list.minuman[i].nama;
    p.style.color = 'var(--primary-color)';
    slide.append(p);
    slide.style.background = `url(${list.minuman[i].image})`;
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundSize = 'no-repeat';
    slide.classList.add('slide');
    divminuman.append(slide);
}

function slideshow(n){

}