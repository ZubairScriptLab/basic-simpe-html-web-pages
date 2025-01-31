document.addEventListener("DOMContentLoaded", function () {
    console.log("Balochistan Tourism Website Loaded!");

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hover Effect for Tourist Places
    const places = document.querySelectorAll(".place");

    places.forEach(place => {
        place.addEventListener("mouseover", () => {
            place.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)"; // Fixed box-shadow
        });

        place.addEventListener("mouseout", () => {
            place.style.boxShadow = "none"; // Reverts the box-shadow when mouse leaves
        });
    });
});
// Image Modal Viewer for Culture Section
const cultureImages = document.querySelectorAll(".culture-item img");

cultureImages.forEach(img => {
    img.addEventListener("click", function () {
        const modal = document.createElement("div");
        modal.classList.add("image-modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${this.src}" alt="${this.alt}">
            </div>
        `;
        document.body.appendChild(modal);

        // Close Modal on Click
        modal.querySelector(".close-modal").addEventListener("click", function () {
            modal.remove();
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});
