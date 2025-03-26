function count() {
    const conversions = {
        Kelvin: {
            Celsius: k => k - 273.15,
            Fahrenheit: k => k * 1.8 - 459.67
        },
        Celsius: {
            Kelvin: c => c + 273.15,
            Fahrenheit: c => c * 1.8 + 32
        },
        Fahrenheit: {
            Kelvin: f => (f + 459.67) * 5/9,
            Celsius: f => (f - 32) * 5/9
        }
    };
    const unitFrom = optionhone.classList[1].substr(0, optionhone.classList[1].length-5);
    const unitTo = optionhtwo.classList[1].substr(0, optionhtwo.classList[1].length-5);
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = conversions[unitFrom][unitTo](inputValue);
    }
}