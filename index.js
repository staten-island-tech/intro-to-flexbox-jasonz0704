const item = [
  {
    name: "Lamborghini Huracan",
    price: 340000,
    image:
      "https://images.prismic.io/carwow/90e9efa2-baf6-496f-abd1-529f138557d1_lamborghini-huracan-2023-frontdynamic1.JPG?auto=format&cs=tinysrgb&fit=max&q=60",
  },
  {
    name: "Porsche GT3 RS",
    price: 250000,
    image:
      "https://www.goodwood.com/globalassets/.road--racing/road/news/2023/12-december/coty/gt3-rs/porsche-911-gt3-rs-goodwood-cars-of-the-year-2023-53.jpg?rxy=0.5,0.5",
  },
  {
    name: "McLaren 765LT",
    price: 450000,
    image:
      "https://media.gq-magazine.co.uk/photos/5e5d438f43621e0008b6c0ca/16:9/w_1280,c_limit/20200302-765-09.jpg",
  },
  {
    name: "Chevrolet Corvette ZR1",
    price: 150000,
    image:
      "https://cdn.motor1.com/images/mgl/0eO903/s1/2026-chevrolet-corvette-zr1x.jpg",
  },
  {
    name: "Ferrari F8 Tributo",
    price: 350000,
    image:
      "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2021/08/DSC02752-2.jpg?quality=85",
  },
  {
    name: "Ferrari SF90 Stradale",
    price: 625000,
    image:
      "https://static0.topspeedimages.com/wordpress/wp-content/uploads/2023/02/ferrari-sf90-stradale.jpg",
  },
  {
    name: "Koenigsegg Gemera",
    price: 950000,
    image:
      "https://www.supervettura.com/blobs/Cars/106/b217d8fd-d626-45b2-9d80-311fe8e76f8c.jpg?width",
  },
  {
    name: "Porsche 918 Spyder",
    price: 850000,
    image:
      "https://sportscardigest.com/wp-content/uploads/2023/04/1-1570461169486@2x.jpg",
  },
  {
    name: "Drako GTE",
    price: 975000,
    image:
      "http://drivingyourdream.com/uploads/9/6/0/4/96041650/s727078908517165717_p513_i6_w1920.jpeg",
  },
  {
    name: "Italdesign Zerouno",
    price: 990000,
    image:
      "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2017/08/italdesign-zerouno.jpg?quality=85",
  },
  {
    name: "Pagani Huayra",
    price: 1400000,
    image:
      "https://wallup.net/wp-content/uploads/2016/01/229604-car-pagani_huayra.jpg",
  },
  {
    name: "Pininfarina Battista",
    price: 1350000,
    image:
      "https://www.thedrive.com/wp-content/uploads/2022/10/25/2022-Pininfarina-Battista_KL_24.jpg?quality=85",
  },
  {
    name: "Koenigsegg Agera R",
    price: 1450000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/2015_Koenigsegg_Agera_N_%2819886243212%29.jpg",
  },
  {
    name: "McLaren Senna",
    price: 1300000,
    image:
      "https://www.autoblog.com/.image/w_1200,h_630,g_auto,c_fill/NzowMDAwMDAwMDAwOTQ3OTE5/ai3a9587-low-res-29747-scaled-1.jpg",
  },
  {
    name: "Aston Martin One-77",
    price: 1300000,
    image:
      "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/05/dsc08261.jpg",
  },
  {
    name: "Aston Martin Valkyrie",
    price: 3450000,
    image:
      "https://media.gq-magazine.co.uk/photos/6405fb643e977a7efb8a7764/master/pass/Aston-Martin-Valkyrie-HED.jpg",
  },
  {
    name: "Bugatti Chiron",
    price: 4000000,
    image:
      "https://wallpapers.com/images/hd/bugatti-chiron-1920-x-1080-wallpaper-xu934copbri52bq4.jpg",
  },
  {
    name: "McLaren Speedtail",
    price: 2300000,
    image:
      "https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/841/2020-mclaren-speedtail-photo-via-mecum-auctions_100841394.jpg",
  },
  {
    name: "Rimac Nevera",
    price: 2200000,
    image:
      "https://www.moveelectric.com/sites/default/files/styles/slideshow_slide/public/2024-08/00-Rimac%20Nevera%20R-Rimac_2.jpg?itok=nGoedCq8",
  },
  {
    name: "WhalenTruck-067",
    price: 6700000,
    image:
      "https://i.ytimg.com/vi/EFdeBuYXyeo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDdfgj6IWqE2dueSeIJpwUqPU52fw",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-name=${item.name}
     data-price=${item.price}>
        <h2 class= "name">${item.name}</h2>
        <image class= "image" src=${item.image} alt=${item.name}>
        <div class= "price">$${item.price}</div>
        <button class= "button">Add to Cart</button>
        </div>`
  );
}
item.forEach((item) => inject(item));

function getCards() {
  const buttons = document.querySelectorAll(".button");
  const btnArr = Array.from(buttons);

  btnArr.forEach((button) =>
    button.addEventListener("click", function (event) {
      console.log(event.target.closest(".card").getAttribute("data-price"));
    })
  );
}
getCards();

/* function filterByPrice(price) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-price");
    if (cardCategory === price) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
filterByPrice(""); */
