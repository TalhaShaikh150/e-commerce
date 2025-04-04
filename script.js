const Products = document.querySelector(".products-grid");
const totalPriceElement = document.querySelector(".total-price");
const cartQuantity = document.querySelector(".cart-count");
const itemQuantity = document.querySelector(".item-quantity");
const cartIcon = document.querySelector(".cart-icon");
const cartSlider = document.querySelector(".cart-slider");
const closeCart = document.querySelector(".close-cart");
const emptycartLabel = document.querySelector('.empty-cart-label');
const checkoutBtn = document.querySelector(".checkout-btn");
const shoppingBtn = document.querySelector(".shoping-btn");
let cartItems = document.querySelector(".cart-items");

const data = [
  {
    id:1,
    image: "assets/product-1.png",
    badge: "New Arrival",
    category: "Automatic",
    name: "Classic Elegance",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "A timeless silver-tone chronograph with a sleek leather strap.",
    price: 2000,
  },
  {
    id:2,
    image: "assets/product-2.png",
    badge: "New Arrival",
    category: "Analog",
    name: "Bold & Sporty",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "A rugged multi-dial design, perfect for casual and active wear.",
    price: 200,
  },
  {
    id:3,
    image: "assets/product-3.png",
    badge: "New Arrival",
    category: "Analog",
    name: "Luxury Steel Edition",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "A refined stainless steel watch with a striking blue dial.",
    price: 400,
  },
  {
    id:4,
    image: "assets/product-4.png",
    badge: "New Arrival",
    category: "Analog",
    name: "Luxury Steel Edition",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "Swiss-made movement with sapphire crystal",
    price: 800,
  },
  {
    id:5,
    image: "assets/product-5.png",
    badge: "New Arrival",
    category: "Analog",
    name: "Luxury Steel Edition",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "Swiss-made movement with sapphire crystal",
    price: 800,
  },
  {
    id:6,
    image: "assets/product-6.png",
    badge: "New Arrival",
    category: "Analog",
    name: "Luxury Steel Edition",
    ratings: {
      fullstar: `<i class="fa-solid fa-star"></i>`,
      halfstar: `<i class="fa-solid fa-star-half-stroke"></i>`,
      emptystar: `<i class="fa-regular fa-star"></i>`,
    },
    description: "Swiss-made movement with sapphire crystal",
    price: 800,
  },
];

let totalPriceValue = 0;
const cartOverlay = document.createElement("div");
cartOverlay.className = "cart-overlay";
document.body.appendChild(cartOverlay);

function generateProductCards() {
  for (let i = 0; i < data.length; i++) {
    Products.innerHTML += `
      <div class="product-card">
        <div class="product-image">
          <div class="product-badge">${data[i].badge}</div>
          <img src="${data[i].image}" alt="Luxury Chronograph">
        </div>
        <div class="product-details">
          <div class="product-meta">
            <span class="product-category">${data[i].category}</span>
            <span class="product-rating">${data[i].ratings.emptystar.repeat(5)}</span>
          </div>
          <h3 class="product-title">${data[i].name}</h3>
          <p class="product-description">${data[i].description}</p>
          <div class="product-footer">
            <p class="product-price">Rs ${data[i].price}</p>
            <div>
              <p class="cart-message">Added</p>
              <button class="product-cta">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>`;
  }
}

function setupCartButtons() {
  document.querySelectorAll(".product-cta").forEach((cartBtn, index) => {
    const cartMessage = cartBtn.previousElementSibling;

    cartBtn.addEventListener("click", function () {
      const productPrice = data[index].price;
      emptycartLabel.classList.add("none");
      shoppingBtn.classList.add("none");
      checkoutBtn.classList.add("visible");

      cartItems.innerHTML += `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${data[index].image}" width="80">
          </div>
          <div class="cart-item-details">
            <h4>${data[index].name}</h4>
            <p class="cart-item-price">Rs ${data[index].price}</p>
            <div class="cart-item-controls">
              <button class="quantity-btn">-</button>
              <span class="quantity">1</span>
              <button class="quantity-btn">+</button>
              <button class="remove-item">Remove</button>
            </div>
          </div>
        </div>`;
     
          document.querySelectorAll(".remove-item").forEach(removeBtn => {
        removeBtn.addEventListener('click', function(e) {
          e.target.closest('.cart-item').remove();
          if (cartItems.children.length === 0) {
            emptycartLabel.classList.remove("none");
            shoppingBtn.classList.remove("none");
            checkoutBtn.classList.remove("visible");

          }
        });
      });

      cartQuantity.innerHTML++;
      itemQuantity.innerHTML++;
      totalPriceValue += productPrice;
      totalPriceElement.innerHTML = `Rs ${totalPriceValue}`;
      cartMessage.classList.add("cart-message-visible");
      cartBtn.style.display = "none";

      setTimeout(() => {
        cartBtn.style.display = "block";
        cartMessage.classList.remove("cart-message-visible");
      }, 1000);
    });
  });
}

function initCartToggle() {
  cartIcon.addEventListener("click", () => {
    cartSlider.classList.add("active");
    cartOverlay.classList.add("active");
  });

  closeCart.addEventListener("click", () => {
    cartSlider.classList.remove("active");
    cartOverlay.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateProductCards();
  setupCartButtons();
  initCartToggle();
});