function count() {
    const units = {
        'Hour': 1,
        'Minute': 60,
        'Second': 3600,
        'Millisecond': 3600000,
        'Day': 1/24,
        'Week': 1/168,
        'Year': 1/8766
    };
    const unitFrom = optionhone.classList[1].substr(0, optionhone.classList[1].length-5);
    const unitTo = optionhtwo.classList[1].substr(0, optionhtwo.classList[1].length-5);
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = inputValue * (units[unitTo] / units[unitFrom]);
    }
}
