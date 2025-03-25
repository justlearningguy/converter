function count() {
    const units = {
        'Cubic meter': 1,
        'Cubic decimeter': 1000,
        'Cubic centimeter': 1000000,
        'Cubic millimeter': 1000000000,
        'Liter': 1000,
        'Milliliter': 1000000
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
