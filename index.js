document.addEventListener("DOMContentLoaded", () => {
    const doggoImg = document.querySelector("#doggo-gif");
    const sections = document.querySelectorAll('section'); // Select all section elements
    let colorChangeInterval;

    doggoImg.addEventListener("mouseenter", () => {
        colorChangeInterval = setInterval(() => {
            sections.forEach(section => {
                section.style.backgroundColor = getRandomColor();
            });
        }, 10);
    });

    doggoImg.addEventListener("mouseleave", () => {
        clearInterval(colorChangeInterval);
        sections.forEach(section => {
            section.style.backgroundColor = '';  // reset to default background color
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
