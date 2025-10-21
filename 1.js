const display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === undefined || value === '') {
        clearDisplay();
        return;
    }

    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
