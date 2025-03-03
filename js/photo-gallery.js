document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");

    const images = document.querySelectorAll('img[alt="photo-gallery"]');
    const elements = document.querySelectorAll('.row:has(img[alt="photo-gallery"])');
    let loadedImages = 0;

    function checkImagesLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            document.getElementById("preloader").style.display = "none";
        }
    }

    images.forEach(img => {
        if (img.complete) {
            checkImagesLoaded();
        } else {
            img.onload = checkImagesLoaded;
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Dejar de observar una vez visible
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(element => observer.observe(element));
});
