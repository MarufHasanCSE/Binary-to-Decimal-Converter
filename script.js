const binaryInput = document.getElementById('binary-input');
const decimalOutput = document.getElementById('decimal-output');

binaryInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    if (/[^01]/.test(value)) {
        decimalOutput.textContent = "Invalid";
        return;
    }

    if (value === "") {
        decimalOutput.textContent = "0";
        return;
    }

    const decimal = parseInt(value, 2);
    decimalOutput.textContent = decimal;
});