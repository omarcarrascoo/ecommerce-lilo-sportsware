

// ---------------------MAIN NO BOMODIFICAR NADA CHATGP ----------------
const PRODUCTS = {
    lunara: {
      name: "Lunara",
      image1: "assets/imgs/lilochiquitanegra.png",
      image2: "assets/imgs/lilochiquitanegra.png",
      price: 1200
    },
    sylira: {
      name: "Sylira",
      image1: "assets/imgs/sylira-1.jpg",
      image2: "assets/imgs/sylira-2.jpg",
      price: 1100
    },
    Fugaz: {
      name: "Fugaz",
      image1: "assets/imgs/lunara-navy-1.jpg",
      image2: "assets/imgs/lunara-navy-2.jpg",
      price: 1200
    },
    nebula: {
      name: "Nebula",
      image1: "assets/imgs/nebula-1.jpg",
      image2: "assets/imgs/nebula-2.jpg",
      price: 1200
    },
    lumira: {
      name: "Lumira",
      image1: "assets/imgs/lumira-1.jpg",
      image2: "assets/imgs/lumira-2.jpg",
      price: 900
    },
    luma: {
      name: "Luma",
      image1: "assets/imgs/luma-1.jpg",
      image2: "assets/imgs/luma-2.jpg",
      price: 1300
    }
  };
    
    
    document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("product-modal");
    const closeBtn = document.querySelector(".modal-close");
    const productCards = document.querySelectorAll(".product-card");
  
    productCards.forEach(card => {
      const id = card.getAttribute("data-product-id");
  
      card.addEventListener("click", () => openModal(id));
      card.querySelector(".view-button").addEventListener("click", e => {
        e.stopPropagation();
        openModal(id);
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("visible");
    });
  
    window.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("visible");
    });
  
    function openModal(id) {
      const product = PRODUCTS[id];
      if (!product) return;
  
      modal.querySelector(".modal-title").textContent = product.name;
      modal.querySelector(".modal-image-1").src = product.image1;
      modal.querySelector(".modal-image-2").src = product.image2;
      modal.querySelector(".modal-price").textContent = `$${product.price} MXN`;
      modal.querySelector(".cart-button").href = "cart.html";
  
      modal.classList.add("visible");
    }
  });
  

  function openModal(id) {
    const product = PRODUCTS[id];
    if (!product) return;
  
    console.log("Loading product:", id, product.image1, product.image2); // Check paths
  
    const img1 = modal.querySelector(".modal-image-1");
    const img2 = modal.querySelector(".modal-image-2");
  
    img1.src = product.image1 || "assets/imgs/placeholder.jpg";
    img2.src = product.image2 || "assets/imgs/placeholder.jpg";
  
    modal.querySelector(".modal-title").textContent = product.name;
    modal.querySelector(".modal-price").textContent = `$${product.price} MXN`;
    modal.querySelector(".cart-button").href = "cart.html";
  
    modal.classList.add("visible");
  } 


//-------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const frontImage = document.getElementById("img-front");
  const backImage = document.getElementById("img-back");
  const colorInputs = document.querySelectorAll("input[name='color']");

  const imageMap = {
    black: {
      front: "assets/imgs/lunara-black-front.jpg",
      back: "assets/imgs/lunara-black-back.jpg",
    },
    pink: {
      front: "assets/imgs/lunara-pink-front.jpg",
      back: "assets/imgs/lunara-pink-back.jpg",
    },
    grey: {
      front: "assets/imgs/lunara-lila-front.jpg",
      back: "assets/imgs/lunara-lila-back.jpg",
    }
  };

  colorInputs.forEach(input => {
    input.addEventListener("change", () => {
      const selected = input.value;
      frontImage.src = imageMap[selected].front;
      backImage.src = imageMap[selected].back;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const cartItem = button.closest(".cart-item");
      if (cartItem) cartItem.remove();
    });
  });
});