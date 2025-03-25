function count() {
    const conversions = {
        'Kilogram': {
            'Gram': kg => kg * 1000,
            'Milligram': kg => kg * 1000000,
            'Tonne': kg => kg / 1000,
            'Pound': kg => kg * 2.2046226218,
            'Ounce': kg => kg * 35.27396195
        },
        'Gram': {
            'Kilogram': g => g / 1000,
            'Milligram': g => g * 1000,
            'Tonne': g => g / 1000000,
            'Pound': g => g * 0.0022046226,
            'Ounce': g => g * 0.0352739619
        },
        'Milligram': {
            'Kilogram': mg => mg / 1000000,
            'Gram': mg => mg / 1000,
            'Tonne': mg => mg / 1000000000,
            'Pound': mg => mg * 0.0000022046,
            'Ounce': mg => mg * 0.000035274
        },
        'Tonne': {
            'Kilogram': t => t * 1000,
            'Gram': t => t * 1000000,
            'Milligram': t => t * 1000000000,
            'Pound': t => t * 2204.6226218,
            'Ounce': t => t * 35273.96195
        },
        'Pound': {
            'Kilogram': lb => lb * 0.45359237,
            'Gram': lb => lb * 453.59237,
            'Milligram': lb => lb * 453592.37,
            'Tonne': lb => lb * 0.0004535924,
            'Ounce': lb => lb * 16
        },
        'Ounce': {
            'Kilogram': oz => oz * 0.0283495231,
            'Gram': oz => oz * 28.349523125,
            'Milligram': oz => oz * 28349.523125,
            'Tonne': oz => oz * 0.0000283495,
            'Pound': oz => oz * 0.0625
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