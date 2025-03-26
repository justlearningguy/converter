function count() {
    const units = {
        'Cubicmeter': 1,
        'Cubicdecimeter': 1000,
        'Cubiccentimeter': 1000000,
        'Cubicmillimeter': 1000000000,
        'Liter': 1000,
        'Milliliter': 1000000
    };
    const unitFrom = optionhone.classList[1].substr(0, optionhone.classList[1].length-5);
    const unitTo = optionhtwo.classList[1].substr(0, optionhtwo.classList[1].length-5);
    const value1 = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = inputValue * (units[unitTo] / units[unitFrom]);
    }
}
