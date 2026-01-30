const menu = {
  "🍔 Hamburguesas": [
    { nombre: "Hamburguesa clásica", precio: 15000, img: "img/hamburguesa_clasica.jpg" },
    { nombre: "Hamburguesa doble", precio: 20000, img: "img/hamburguesa_doble.jpg" }
  ],
  "🍔 Combos": [
    { nombre: "Combo Hamburguesa clásica", precio: 20000, img: "img/combo_clasica.jpg" },
    { nombre: "Combo Hamburguesa doble", precio: 25000, img: "img/combo_clasica.jpg" },
    { nombre: "Combo Sandwich lomito", precio: 26000, img: "img/combo_lomito.jpg" },
    { nombre: "Combo Sandwich lomito doble", precio: 32000, img: "img/combo_lomito.jpg" },
    { nombre: "Combo Lomito árabe", precio: 29000, img: "img/combo_lomito_arabe.jpg" },
    { nombre: "Combo Lomito árabe doble", precio: 35000, img: "img/combo_lomito_arabe.jpg" }
  ],
  "🍕 Pizzas": [
    { nombre: "Pizza muzzarella", precio: 20000, img: "img/pizza_muzzarella.jpg" },
    { nombre: "Pizzeta", precio: 10000, img: "img/pizzeta.jpg" },
    { nombre: "Pizza choclo", precio: 25000, img: "img/pizza_choclo.jpg" },
    { nombre: "Pizza pollo katupiry", precio: 30000, img: "img/pizza_pollo_katupiry.jpg" },
    { nombre: "Pizza jamón y queso", precio: 30000, img: "img/pizza_jamon_queso.jpg" },
    { nombre: "Pizza pepperoni", precio: 30000, img: "img/pizza_pepperoni.jpg" },
    { nombre: "Pizza margarita", precio: 30000, img: "img/pizza_margarita.jpg" },
    { nombre: "Pizza napolitana", precio: 30000, img: "img/pizza_napolitana.jpg" },
    { nombre: "Lomipizza", precio: 30000, img: "img/lomipizza.jpg" },
    { nombre: "Pizza borde relleno", precio: 35000, img: "img/pizza_borde_relleno.jpg" }
  ],
  "🥪 Lomitos": [
    { nombre: "Sandwich lomito", precio: 20000, img: "img/lomito_simple.jpg" },
    { nombre: "Sandwich lomito doble", precio: 26000, img: "img/lomito_simple.jpg" },
    { nombre: "Lomito árabe", precio: 23000, img: "img/lomito_arabe.jpg" },
    { nombre: "Lomito árabe doble", precio: 29000, img: "img/lomito_arabe.jpg" }
  ],
  "🍟 Papas": [
    { nombre: "Papas chicas", precio: 7000, img: "img/papas_chicas.jpg" },
    { nombre: "Papas grandes", precio: 10000, img: "img/papas_grandes.jpg" },
    { nombre: "Papas rancheras", precio: 15000, img: "img/papas_rancheras.jpg" }
  ],
  "🥤 Bebidas": [
    { nombre: "Gaseosa 250ml", precio: 5000, img: "img/gaseosa_250.jpg" },
    { nombre: "Gaseosa 1L", precio: 10000, img: "img/gaseosa_1l.jpg" },
    { nombre: "Agua", precio: 5000, img: "img/agua.jpg" },
    { nombre: "Michelob", precio: 6000, img: "img/michelob.jpg" },
    { nombre: "Munich Ultra", precio: 5000, img: "img/munich.jpg" },
    { nombre: "Bud 66", precio: 8000, img: "img/bud_66.jpg" },
    { nombre: "Coronita", precio: 9000, img: "img/coronita.jpg" },
    { nombre: "Ouro Fino", precio: 5000, img: "img/ourofino.jpg" },
    { nombre: "Heineken 3/4", precio: 18000, img: "img/heineken_3_4.jpg" }
  ],
  "🥤Combo Bebidas": [
    { nombre: "Dos Heineken", precio: 35000, img: "img/heineken_3_4.jpg" },
    { nombre: "Dos Bud 66", precio: 15000, img: "img/bud_66.jpg" },
    { nombre: "Tres Coronitas", precio: 25000, img: "img/coronita.jpg" },
    { nombre: "Seis Ouro Fino", precio: 25000, img: "img/ourofino.jpg" }
    
  ]
};


const container = document.getElementById("menu-container");

for (const categoria in menu) {
  const section = document.createElement("section");
  section.classList.add("category");

  const title = document.createElement("h2");
  title.textContent = categoria;
  section.appendChild(title);

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("menu-items");

  menu[categoria].forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>${item.precio.toLocaleString('es-AR')} Gs</p>
    `;

    itemsContainer.appendChild(card);

    // Animación de entrada
    setTimeout(() => {
      card.classList.add("show");
    }, index * 100);
  });

  section.appendChild(itemsContainer);
  container.appendChild(section);
}






