// SMALL BURGERS SELECTION
const burgers = document.querySelectorAll(".burger img");
const mainBurger = document.getElementById("mainBurger");

// CHANGE IMAGE ON CLICK
burgers.forEach(img => {
    img.addEventListener("click", () => {
        // Animation start
        mainBurger.classList.add("change");

        // Wait for animation, then change source
        setTimeout(() => {
            mainBurger.src = img.src;
            mainBurger.classList.remove("change");
        }, 300);
    });
});

// STARS GENERATOR
function createStars(){
    const starsContainer = document.getElementById("stars");
    const count = 150; // Stars ki tadad

    for(let i=0; i<count; i++){
        const star = document.createElement("div");
        star.className = "star";
        
        // Random positions
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Random size and delay
        const size = Math.random() * 2;
        const delay = Math.random() * 5;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
}

// Run star generator on load
window.addEventListener("load", createStars);