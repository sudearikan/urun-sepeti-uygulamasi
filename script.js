// Kullanıcıdan ilk başta bilgiler alınır
const name = prompt("Adınızı giriniz:");
const age = prompt("Yaşınızı giriniz:");
const job = prompt("Mesleğinizi giriniz:");

document.getElementById("userName").textContent = name;
document.getElementById("userAge").textContent = age;
document.getElementById("userJob").textContent = job;

// Sepet dizisi
let cart = [];

// Ürün ekleme fonksiyonu
function addProduct() {
  const nameInput = document.getElementById("productName");
  const priceInput = document.getElementById("productPrice");

  const productName = nameInput.value;
  const productPrice = Number(priceInput.value);

  if (productName && productPrice > 0) {
    cart.push({ name: productName, price: productPrice });
    nameInput.value = "";
    priceInput.value = "";
    renderCart();
  } else {
    alert("Lütfen geçerli bir ürün adı ve fiyat girin.");
  }
}

// Sepeti ve toplamı güncelle
function renderCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `${product.name} - ${product.price}₺ 
      <button onclick="removeProduct(${index})">Sil</button>`;
    cartList.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").textContent = total;
}

// Ürün silme
function removeProduct(index) {
  cart.splice(index, 1);
  renderCart();
}
