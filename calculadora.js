let output = document.getElementById('output');
let percentageInput = document.getElementById('percentageInput');
let resultWithPercentage = document.getElementById('resultWithPercentage');
let currentInput = '';

function appendToOutput(value) {
    currentInput += value;
    output.value = currentInput;
}

function clearOutput() {
    currentInput = '';
    output.value = '';
    resultWithPercentage.value = '';
    percentageInput.value = 5; // Restablecer porcentaje a 5
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    output.value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        let percentage = parseFloat(percentageInput.value);
        
        if (isNaN(percentage) || percentage < 1 || percentage > 10) {
            resultWithPercentage.value = 'Porcentaje inválido';
            return;
        }

        let resultWithPercent = result + (result * percentage / 100);
        output.value = currentInput;
        resultWithPercentage.value = resultWithPercent.toFixed(2);
        currentInput = '';
    } catch (error) {
        resultWithPercentage.value = 'Error';
        currentInput = '';
    }
}
