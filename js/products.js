// PRODUCTS
const shoesContainer = document.querySelector(".products-center");

let newHTML = "";

shoes.forEach(function (shoe) {

    newHTML += `
            <!-- Single product -->
            <a class="single-product" href="details.html?id=${shoe.id}">
                                    <img class="product-img" src="${shoe.imageUrl}" alt="${shoe.name}">

                <article class="product">
                    
                    <div class="article__block--icons">
                        ${shoe.review}
                    </div>
                    <h3>${shoe.name}</h3>
                    <h4>NOK ${shoe.price}</h4>
                </article>
            </a>
            <!-- End of single product -->
        `;
});

shoesContainer.innerHTML = newHTML;
