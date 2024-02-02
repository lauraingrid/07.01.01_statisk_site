// https://kea-alt-del.dk/t7/api/products?limit=50&start=10

//Hent Dataen med alle produkterne
fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then((data) => showProducts(data));

// ovenover i sidste linje kunne også skrives ".then(showProducts)" og så sender den selv data med.

function showProducts(products) {
  // looper og kalder showProduct (ental)
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //Fang template
  const template = document.querySelector("#produktkorttemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;

  if (product.soldout) {
    //produkt er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  //img virker ikke helt ??
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".pris span").textContent = product.price;
  copy.querySelector(".type_produkt").textContent = product.articletype;
  copy.querySelector(".produktkort h3").textContent = product.brandname;
  //appende
  document.querySelector(".produktliste").appendChild(copy);
}

/*  {
    "id": 1533,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Fall",
    "productionyear": 2010,
    "usagetype": "Casual",
    "productdisplayname": "Cat Red T-shirt",
    "price": 899,
    "discount": null,
    "brandname": "Puma",
    "soldout": 0
}*/
