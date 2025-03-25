function count() {
    const conversions = {
        'Meter/second': {
            'Kilometer/hour': mps => mps * 3.6,
            'Mile/hour': mps => mps * 2.2369362921
        },
        'Kilometer/hour': {
            'Meter/second': kmh => kmh * 0.2777777778,
            'Mile/hour': kmh => kmh * 0.6213711922
        },
        'Mile/hour': {
            'Meter/second': mph => mph * 0.44704,
            'Kilometer/hour': mph => mph * 1.609344
        }
    };
    const unitFrom = optionhone.innerText;
    const unitTo = optionhtwo.innerText;
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = conversions[unitFrom][unitTo](inputValue);
    }
}