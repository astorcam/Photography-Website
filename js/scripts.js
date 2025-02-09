document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    let elements = document.querySelectorAll(".col-14");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});

    let elements=document.querySelectorAll(".icono-about-1,.icono-about-2,.icono-about-3");
    let aboutElements = document.querySelectorAll(".about-1, .about-2, .about-3");

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {

            if (element.classList.contains("icono-about-1")) {
                document.querySelector(".about-1").style.opacity = '1';
                document.querySelector(".about-1").style.visibility = 'visible';
            }
            if (element.classList.contains("icono-about-2")) {
                document.querySelector(".about-2").style.opacity = '1';
                document.querySelector(".about-2").style.visibility = 'visible';
            }
            if (element.classList.contains("icono-about-3")) {
                document.querySelector(".about-3").style.opacity = '1';
                document.querySelector(".about-3").style.visibility = 'visible';
            }
        });
    
        element.addEventListener('mouseout', () => {
            setTimeout(() => {
            if (element.classList.contains("icono-about-1")) {
                
                document.querySelector(".about-1").style.opacity = '0';
                document.querySelector(".about-1").style.visibility = 'hidden';
            }
            if (element.classList.contains("icono-about-2")) {
                document.querySelector(".about-2").style.opacity = '0';
                document.querySelector(".about-2").style.visibility = 'hidden';
            }
            if (element.classList.contains("icono-about-3")) {
                document.querySelector(".about-3").style.opacity = '0';
                document.querySelector(".about-3").style.visibility = 'hidden';
            }
        },3000); //3 segundos
        });
    });

    let bannerElement= document.querySelector(".col-14")
    bannerElement.addEventListener("mouseover",()=>{
        bannerElement.style.cursor = "url('../assets/img/puntero_circular.png') 16 16, auto";
    })

    bannerElement.addEventListener("mouseout", () => {
        bannerElement.style.cursor = "auto";
    });