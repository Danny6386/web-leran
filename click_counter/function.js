let counter = 0;

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("Increment");
    const display = document.getElementById("display");

    button.addEventListener("click", () => {
        counter++;
        display.textContent = `Counter: ${counter}`;
    });
});
