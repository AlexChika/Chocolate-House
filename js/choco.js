const gallery = [
  {
    id: 1,
    name: "Meaty Fries",
    price: 100,
    message: "Make Your Order",
    img: "./img/img1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 2,
    name: "Yummy Burgers",
    price: 144,
    message: "Make Your Order",
    img: "./img/img2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 3,
    name: "Toasted Eggs",
    price: 175,
    message: "Make Your Order",
    img: "./img/img3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 1,
    name: "Bread Tea",
    price: 200,
    message: "Make Your Order",
    img: "./img/img4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 2,
    name: "Suprise Pack",
    price: 200,
    message: "Make Your Order",
    img: "./img/img5.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 3,
    name: "Wine Meals",
    price: 250,
    message: "Make Your Order",
    img: "./img/img6.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 1,
    name: "Chocolate Cake",
    price: 299,
    message: "Make Your Order",
    img: "./img/img7.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 2,
    name: "Creamery Ice",
    price: 70,
    message: "Make Your Order",
    img: "./img/img8.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 3,
    name: "Omellete Bowl",
    price: "$ 125",
    message: "Make Your Order",
    img: "./img/img9.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 1,
    name: "Table Beauties",
    price: "$ 180",
    message: "Make Your Order",
    img: "./img/img10.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 2,
    name: "Vanilla Berries",
    price: "$ 1249",
    message: "Make Your Order",
    img: "./img/img11.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
  {
    id: 2,
    name: "Italian Ravioli",
    price: "$ 600",
    message: "Make Your Order",
    img: "./img/img12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti quidem nulla beatae dolor eaque, amet porro tempore! Assumenda fuga expedita dolorem iure eum cum.",
  },
];
let container = document.getElementById("container");
let card;
function display(param) {
  card = "";
  for (i = 0; i < gallery.length; i++) {
    if (gallery[i].id === param || param === "all") {
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
    }
  }
  container.innerHTML = card;
}
display("all");
//
const btns = document.querySelectorAll("button");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(btn.dataset.id);

    if (btn.dataset.id === "all") {
      display("all");
    } else if (btn.dataset.id === "cream") {
      display(1);
    } else if (btn.dataset.id === "cakes") {
      display(2);
    } else {
      display(3);
    }
  });
});
