document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotalPrice() {
        let total = 0;
        items.forEach(item => {
            const price = parseFloat(item.querySelector(".price").textContent);
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    items.forEach(item => {
        const btnPlus = item.querySelector(".btn-plus");
        const btnMinus = item.querySelector(".btn-minus");
        const btnRemove = item.querySelector(".btn-remove");
        const btnHeart = item.querySelector(".btn-heart");
        const quantityElement = item.querySelector(".quantity");

        btnPlus.addEventListener("click", () => {
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });

        btnMinus.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        btnRemove.addEventListener("click", () => {
            item.remove();
            updateTotalPrice();
        });

        btnHeart.addEventListener("click", () => {
            btnHeart.classList.toggle("liked");
        });
    });

    updateTotalPrice();
});
