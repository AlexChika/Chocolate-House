const gallery = [
  {
    name: "Meaty Fries",
    price: 100,
    message: "Make Your Order",
    img: "./img/img1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Yummy Burgers",
    price: 144,
    message: "Make Your Order",
    img: "./img/img2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Toasted Eggs",
    price: 175,
    message: "Make Your Order",
    img: "./img/img3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Bread Tea",
    price: 200,
    message: "Make Your Order",
    img: "./img/img4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Suprise Pack",
    price: 200,
    message: "Make Your Order",
    img: "./img/img5.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Wine Meals",
    price: 250,
    message: "Make Your Order",
    img: "./img/img6.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Chocolate Cake",
    price: 299,
    message: "Make Your Order",
    img: "./img/img7.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Creamery Ice",
    price: 70,
    message: "Make Your Order",
    img: "./img/img8.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Omellete Bowl",
    price: "$ 125",
    message: "Make Your Order",
    img: "./img/img9.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Table Beauties",
    price: "$ 180",
    message: "Make Your Order",
    img: "./img/img10.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Vanilla Berries",
    price: "$ 1249",
    message: "Make Your Order",
    img: "./img/img11.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    name: "Italian Ravioli",
    price: "$ 600",
    message: "Make Your Order",
    img: "./img/img12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
];
let container = document.getElementById("container");
let card = "";
for (i = 0; i < gallery.length; i++) {
  card += `
  <div class="col-sm-4 col-lg-3 mb-3">
          <div
            class="ms-auto me-auto bg d-flex align-items-center flex-column"
            style="width: 90%"
          >
            <div
              style="width: 70%; height: 10em"
              class="sec-2-image-con bottom"
            >
              <img src="${gallery[i].img}" alt="" class="img-fluid" />
            </div>

            <div class="text-center">
              <h2 class="font text-warning">${gallery[i].name}</h2>
              <h4 class="red">${gallery[i].message}</h4>
              <h2
                class="
                  fw-bolder
                  ms-auto
                  me-auto
                  border border-white
                  w-50
                  text-white
                "
              >
                ${gallery[i].price}
              </h2>
              <p class="red">
               ${gallery[i].text}
              </p>
            </div>
          </div>
        </div>
`;
  console.log(card);
}
container.innerHTML = card;
