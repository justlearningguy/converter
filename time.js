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
    const unit1 = optionhone.innerText;
    const unit2 = optionhtwo.innerText;
    const value1 = Number(optionone.value);
    if (unit1 === unit2) {
        optiontwo.value = optionone.value;
    } else {
        optiontwo.value = value1 * (units[unit2] / units[unit1]);
    }
}
