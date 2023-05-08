const coneRadio = document.querySelector('input[value="cone"]');
const cupRadio = document.querySelector('input[value="cup"]');
const toppingsFieldset = document.querySelector("#Toppings");

function toggleFieldset() {
  if (coneRadio.checked) {
    toppingsFieldset.style.display = "none";
  } else {
    toppingsFieldset.style.display = "block";
  }
}

toggleFieldset();

coneRadio.addEventListener("change", toggleFieldset);
cupRadio.addEventListener("change", toggleFieldset);

const order = document.getElementById("order");
order.addEventListener("click", () => {
  const scoops = document.getElementById("scoops").value;
  const sprinkles = document.getElementById("sprinkles").checked;
  const hotFudge = document.getElementById("hot_fudge").checked;
  const whippedCream = document.getElementById("whipped_cream").checked;
  const cherry = document.getElementById("cherry").checked;

  function calculatePrice() {
    const numScoops = parseInt(scoops);
    const containerPrice = 2.25 + (numScoops - 1) * 1.25;
    const toppingsPrice = calculateToppingsPrice(
      sprinkles,
      hotFudge,
      whippedCream,
      cherry
    );
    const totalPrice = containerPrice + toppingsPrice;
    const tax = totalPrice * 0.08;
    const totalPriceWithTax = totalPrice + tax;
    document.getElementById("price").textContent =
      "$" + containerPrice.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent =
      "$" + totalPriceWithTax.toFixed(2);
  }

  calculatePrice();
});

function calculateToppingsPrice(sprinkles, hotFudge, whippedCream, cherry) {
  let toppingsPrice = 0;
  if (sprinkles) {
    toppingsPrice += 0.5;
  }
  if (hotFudge) {
    toppingsPrice += 1.25;
  }
  if (whippedCream) {
    toppingsPrice += 0.25;
  }
  if (cherry) {
    toppingsPrice += 0.25;
  }
  return toppingsPrice;
}
