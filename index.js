const Below 500k= [
    {
        name: "Lamborghini Huracan",
        price: 340000,
        image: "https://images.prismic.io/carwow/90e9efa2-baf6-496f-abd1-529f138557d1_lamborghini-huracan-2023-frontdynamic1.JPG?auto=format&cs=tinysrgb&fit=max&q=60"
    }
    {
        name: "Porshe GT3 RS",
        price: 250000,
        image: "https://content-hub.imgix.net/2tlCwhJlkyuHoLcyewYHfb/810ac43c551f48234a6e547b8e628b21/how_much_911_gt3_rs_1.jpg?w=1308"
    }
    {
        name: "McLaren 765LT",
        price: 450000,
        image: "https://media.gq-magazine.co.uk/photos/5e5d438f43621e0008b6c0ca/16:9/w_1280,c_limit/20200302-765-09.jpg"
    }
    {
        name: "Chevrolet Corvette ZR1",
        price: 150000,
        image: "https://di-uploads-pod33.dealerinspire.com/kearnymesachevy/uploads/2024/11/2025-chevy-corvette-zr1-aero.png"
    }
    {
        name: "Ferrari F8 Tributo",
        price: 350000,
        image: "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2021/08/DSC02752-2.jpg?quality=85"
    }
]
const 500k - 1M= [
    {
        name: "Ferrari SF90 Stradale",
        price: 625000,
        image: "https://www.thecarexpert.co.uk/wp-content/uploads/2022/07/Ferrari-SF90-Stradale.jpg.webp"
    }
    {
        name: "Koenigsegg Gemera",
        price: 950000,
        image: "https://www.supervettura.com/blobs/Cars/106/b217d8fd-d626-45b2-9d80-311fe8e76f8c.jpg?width"
    }
    {
        name: "Porsche 918 Spyder",
        price: 850000,
        image: "https://sportscardigest.com/wp-content/uploads/2023/04/1-1570461169486@2x.jpg"
    }
    {
        name: "Drako GTE",
        price: 975000,
        image: "http://drivingyourdream.com/uploads/9/6/0/4/96041650/s727078908517165717_p513_i6_w1920.jpeg"
    }
    {
        name: "Italdesign Zerouno",
        price: 990000,
        image: "https://www.zero2turbo.com/wp-content/uploads/2017/09/Italdesign-Zerouno-for-sale-3.jpg"
    }
]
const 1M - 1.5M= [
    {
        name: "Pagani Huayra",
        price: 1450000,
        image: "https://www.ilusso.com/imagetag/3930/main/l/Used-2017-Pagani-Huayra-Roadster-1732761026.jpg"
    }
    {
        name: "Pininfarina Battista",
        price: 1350000,
        image: "http://cdn.arstechnica.net/wp-content/uploads/2023/08/LC1_8643-scaled.jpg"
    }
    {
        name: "Aston Martin Valkyrie",
        price: 450000,
        image: "https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/master/pass/Aston-Martin-Valkyrie-HED.jpg"
    }
    {
        name: "McLaren Senna",
        price: 1300000,
        image: "https://www.autoblog.com/.image/w_1200,h_630,g_auto,c_fill/NzowMDAwMDAwMDAwOTQ3OTE5/ai3a9587-low-res-29747-scaled-1.jpg"
    }
    {
        name: "Aston Martin One-77",
        price: 1400000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
]
const Above 1.5M= [
    {
        name: "Blue Lamborghini",
        price: 450000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
    {
        name: "Blue Lamborghini",
        price: 450000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
    {
        name: "Blue Lamborghini",
        price: 450000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
    {
        name: "Blue Lamborghini",
        price: 450000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
    {
        name: "Blue Lamborghini",
        price: 450000,
        image: "https://example.com/blue-lamborghini.jpg"
    }
]


function inject(item){
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('afterbegin', `<h1>${item.name}</h1>`);
