
    const originalImages = document.querySelectorAll(".original-image");
    const hoverImage = document.getElementById("hover-image");

    originalImages.forEach(originalImage => {
    originalImage.addEventListener("mouseover", (event) => {

        hoverImage.style.display = "block";

        hoverImage.src = originalImage.getAttribute("data-hover-src");
    });

    originalImage.addEventListener("mouseout", () => {

    hoverImage.style.display = "none";
});

    originalImage.addEventListener("mousemove", (event) => {

    const mouseX = event.pageX;
    const mouseY = event.pageY;
    hoverImage.style.left = mouseX + "px";
    hoverImage.style.top = (mouseY - 150) + "px";
});
});
    function filterCards(category) {

        const cards = document.querySelectorAll('.card');


        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
