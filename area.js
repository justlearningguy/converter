function count() {
    const conversions = {
        'Square kilometer': {
            'Square meter': km2 => km2 * 1000000,
            'Square decimeter': km2 => km2 * 100000000,
            'Square centimeter': km2 => km2 * 10000000000,
            'Square millimeter': km2 => km2 * 1000000000000,
            'Are': km2 => km2 * 10000,
            'Hectare': km2 => km2 * 100
        },
        'Square meter': {
            'Square kilometer': m2 => m2 / 1000000,
            'Square decimeter': m2 => m2 * 100,
            'Square centimeter': m2 => m2 * 10000,
            'Square millimeter': m2 => m2 * 1000000,
            'Are': m2 => m2 / 100,
            'Hectare': m2 => m2 / 10000
        },
        'Square decimeter': {
            'Square kilometer': dm2 => dm2 / 100000000,
            'Square meter': dm2 => dm2 / 100,
            'Square centimeter': dm2 => dm2 * 100,
            'Square millimeter': dm2 => dm2 * 10000,
            'Are': dm2 => dm2 / 10000,
            'Hectare': dm2 => dm2 / 1000000
        },
        'Square centimeter': {
            'Square kilometer': cm2 => cm2 / 10000000000,
            'Square meter': cm2 => cm2 / 10000,
            'Square decimeter': cm2 => cm2 / 100,
            'Square millimeter': cm2 => cm2 * 100,
            'Are': cm2 => cm2 / 1000000,
            'Hectare': cm2 => cm2 / 100000000
        },
        'Square millimeter': {
            'Square kilometer': mm2 => mm2 / 1000000000000,
            'Square meter': mm2 => mm2 / 1000000,
            'Square decimeter': mm2 => mm2 / 10000,
            'Square centimeter': mm2 => mm2 / 100,
            'Are': mm2 => mm2 / 100000000,
            'Hectare': mm2 => mm2 / 10000000000
        },
        'Are': {
            'Square kilometer': a => a / 10000,
            'Square meter': a => a * 100,
            'Square decimeter': a => a * 10000,
            'Square centimeter': a => a * 1000000,
            'Square millimeter': a => a * 100000000,
            'Hectare': a => a * 0.01
        },
        'Hectare': {
            'Square kilometer': ha => ha * 0.01,
            'Square meter': ha => ha * 10000,
            'Square decimeter': ha => ha * 1000000,
            'Square centimeter': ha => ha * 100000000,
            'Square millimeter': ha => ha * 10000000000,
            'Are': ha => ha * 100
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