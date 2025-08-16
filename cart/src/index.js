import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

const el = document.getElementById("dev-cart");
console.log("Trigger");
el.innerHTML = cartText;
