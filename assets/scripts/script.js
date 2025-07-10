document.addEventListener('DOMContentLoaded',function() {
    const filterBtn = document.querySelectorAll('.catalog__filter-btn');
    const productCard = document.querySelectorAll('.product-card');;

    showAllProducts();
    filterBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtn.forEach(btn => btn.classList.remove('catalog__filter-btn--active'));
            this.classList.add('catalog__filter-btn--active');

            const filterValue = this.getAttribute('data-filter');

            if (filterValue === 'all') {
                showAllProducts();
            }
            else {
                filterProducts(filterValue)
            }
        });
    });
    function showAllProducts() {
        productCard.forEach(card => {
            card.classList.add('active')
        })
    }
    function filterProducts(category) {
        productCard.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.classList.add('active');
            }
            else {
                card.classList.remove('active');
            }
        })
    }
})