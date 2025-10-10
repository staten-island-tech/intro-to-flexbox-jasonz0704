const item= [
    {
        name: "Lamborghini Huracan",
        price: 340000,
        image: "https://images.prismic.io/carwow/90e9efa2-baf6-496f-abd1-529f138557d1_lamborghini-huracan-2023-frontdynamic1.JPG?auto=format&cs=tinysrgb&fit=max&q=60"
    },
    {
        name: "Porshe GT3 RS",
        price: 250000,
        image: "https://content-hub.imgix.net/2tlCwhJlkyuHoLcyewYHfb/810ac43c551f48234a6e547b8e628b21/how_much_911_gt3_rs_1.jpg?w=1308"
    },
    {
        name: "McLaren 765LT",
        price: 450000,
        image: "https://media.gq-magazine.co.uk/photos/5e5d438f43621e0008b6c0ca/16:9/w_1280,c_limit/20200302-765-09.jpg"
    },
    {
        name: "Chevrolet Corvette ZR1",
        price: 150000,
        image: "https://di-uploads-pod33.dealerinspire.com/kearnymesachevy/uploads/2024/11/2025-chevy-corvette-zr1-aero.png"
    },
    {
        name: "Ferrari F8 Tributo",
        price: 350000,
        image: "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2021/08/DSC02752-2.jpg?quality=85"
    },
]
const 500k - 1M= [
    {
        name: "Ferrari SF90 Stradale",
        price: 625000,
        image: "https://www.thecarexpert.co.uk/wp-content/uploads/2022/07/Ferrari-SF90-Stradale.jpg.webp"
    },
    {
        name: "Koenigsegg Gemera",
        price: 950000,
        image: "https://www.supervettura.com/blobs/Cars/106/b217d8fd-d626-45b2-9d80-311fe8e76f8c.jpg?width"
    },
    {
        name: "Porsche 918 Spyder",
        price: 850000,
        image: "https://sportscardigest.com/wp-content/uploads/2023/04/1-1570461169486@2x.jpg"
    },
    {
        name: "Drako GTE",
        price: 975000,
        image: "http://drivingyourdream.com/uploads/9/6/0/4/96041650/s727078908517165717_p513_i6_w1920.jpeg"
    },
    {
        name: "Italdesign Zerouno",
        price: 990000,
        image: "https://www.zero2turbo.com/wp-content/uploads/2017/09/Italdesign-Zerouno-for-sale-3.jpg"
    },
]
const 1M - 1.5M= [
    {
        name: "Pagani Huayra",
        price: 1400000,
        image: "https://www.ilusso.com/imagetag/3930/main/l/Used-2017-Pagani-Huayra-Roadster-1732761026.jpg"
    },
    {
        name: "Pininfarina Battista",
        price: 1350000,
        image: "http://cdn.arstechnica.net/wp-content/uploads/2023/08/LC1_8643-scaled.jpg"
    },
    {
        name: "Koenigsegg Agera R",
        price: 1450000,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/2015_Koenigsegg_Agera_N_%2819886243212%29.jpg"
    },
    {
        name: "McLaren Senna",
        price: 1300000,
        image: "https://www.autoblog.com/.image/w_1200,h_630,g_auto,c_fill/NzowMDAwMDAwMDAwOTQ3OTE5/ai3a9587-low-res-29747-scaled-1.jpg"
    },
    {
        name: "Aston Martin One-77",
        price: 1300000,
        image: "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/05/dsc08261.jpg"
    },
]
const Above= [
    {
        name: "Aston Martin Valkyrie",
        price: 3450000,
        image: "https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/master/pass/Aston-Martin-Valkyrie-HED.jpg"
    },
    {
        name: "Bugatti Chiron",
        price: 4000000,
        image: "https://news.dupontregistry.com/wp-content/uploads/2024/01/Snapinsta.app_425541277_775192711315675_5726317605525617168_n_1080-1080x570.jpg"
    },
    {
        name: "McLaren Speedtail",
        price: 2300000,
        image: "https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/841/2020-mclaren-speedtail-photo-via-mecum-auctions_100841394.jpg"
    },
    {
        name: "Rimac Nevera",
        price: 2200000,
        image: "https://www.moveelectric.com/sites/default/files/styles/slideshow_slide/public/2024-08/00-Rimac%20Nevera%20R-Rimac_2.jpg?itok=nGoedCq8"
    },
    {
        name: "WhalenTruck-067",
        price: 6700000,
        image: "https://i.ytimg.com/vi/EFdeBuYXyeo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDdfgj6IWqE2dueSeIJpwUqPU52fw"
    },
]


function inject(item) {
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('afterbegin', 
        `<div class="card">
        <div class= "name">${item.name}</div>
        <image class= "image" src=${item.image} alt=${item.name}>
        <div class= "price">$${item.price}</div>
        <button class="addtocart">Add to Cart</button>
        </div>

item.forEach((item) => inject(item));