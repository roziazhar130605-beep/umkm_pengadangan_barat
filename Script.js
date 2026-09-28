const categories =
    document.querySelectorAll(".category");

const products =
    document.querySelectorAll(".product-card");

const searchInput =
    document.getElementById("searchInput");



/* ============================================
   FILTER KATEGORI
============================================ */

categories.forEach(category => {

    category.addEventListener("click", function(e) {

        e.preventDefault();


        categories.forEach(item => {

            item.classList.remove("active");

        });


        this.classList.add("active");


        const selectedCategory =
            this.dataset.category;


        products.forEach(product => {

            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "semua" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});



/* ============================================
   SEARCH PRODUK
============================================ */

searchInput.addEventListener(
    "input",
    function() {

        const keyword =
            this.value.toLowerCase();


        products.forEach(product => {

            const productName =
                product.dataset.name.toLowerCase();


            if (
                productName.includes(keyword)
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        });

    }
);