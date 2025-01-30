const display = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // Evaluate the expression, replace '%' with '/100'
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Fix event listener and bind to each button correctly
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Get the button value from 'data-value' attribute
        const btnValue = e.target.dataset.value;
        calculate(btnValue);
    });
});
