document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    let elements = document.querySelectorAll(".banner");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});