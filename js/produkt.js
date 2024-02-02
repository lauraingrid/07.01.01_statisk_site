// https://kea-alt-del.dk/t7/api/products/1525

// Henter data for et enkelt produkt nr 1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".produktboks h1").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".farve").textContent = product.colour1;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".pris span").textContent = product.price;

  // breadcrumbs
}
