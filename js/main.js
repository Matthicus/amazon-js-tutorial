//console.log("js works!");

//array gebruiken voor het oplijsten van producten
//object gebruiken voor het groeperen van values
//objecten moeten dezelfde structuur hebben zodat javascript er fatsoenlijk mee aan de slag kan gaan
//dit is een data structure

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}";
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
               ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png" 
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary">Add to Cart</button>
        </div>`;
});

const productsGrid = document.querySelector(".js-products-grid");
productsGrid.innerHTML = productsHTML;

// eerste object => run fuction
//tweede object => run function,...
//voor elk product genereren we nu de html in de functie die we voordien hadden
//template strings om product informatie in de html te stoppen
// product.rating.stars * 10 => maal 10 zodat het wijst naar een afbeelding die effectief bestaat
//  productsHTML += // accumulator pattern, elke keer wordt er toegevoegd aan het resultaat (productsHTML)
//met toFixed geven we de prijs minstens twee decimalen achter de komma
// nu we de data genereren met js moeten we niet voor elk product altijd de html terug gaan schrijven
