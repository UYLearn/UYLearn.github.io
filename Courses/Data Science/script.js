document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Unlock the power of data with cutting-edge tools and techniques.";
    const typewriter = document.getElementById("typewriter");
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust speed
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".why-choose");

    function revealSection() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTop";
    scrollTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
