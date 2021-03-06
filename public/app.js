const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #f46b45, #eea849)",
    "linear-gradient(to right top, #005c97, #363795)",
    "linear-gradient(to top, #606c88, #3f4c6b)"
];

const options = {
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) { 
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("bottom", '20px');
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", '4px');
            // should be 4px
            bubble.style.background = gradients[gradientIndex]
        }
    });
        }

sections.forEach(section => {
    observer.observe(section);
});

