function count() {
    const conversions = {
        'Meterpersecond': {
            'Kilometerperhour': mps => mps * 3.6,
            'Mileperhour': mps => mps * 2.2369362921
        },
        'Kilometerperhour': {
            'Meterpersecond': kmh => kmh * 0.2777777778,
            'Mileperhour': kmh => kmh * 0.6213711922
        },
        'Mileperhour': {
            'Meterpersecond': mph => mph * 0.44704,
            'Kilometerperhour': mph => mph * 1.609344
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