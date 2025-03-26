function count() {
    const units = {
        'Kilometer': 1000,
        'Meter': 1,
        'Decimeter': 0.1,
        'Centimeter': 0.01,
        'Millimeter': 0.001,
        'Micrometer': 0.000001,
        'Nanometer': 0.000000001,
        'Mile': 1609.34,     
        'Foot': 0.3048,        
        'Inch': 0.0254        
    };
    const unitFrom = optionhone.classList[1].substr(0, optionhone.classList[1].length-5);
    const unitTo = optionhtwo.classList[1].substr(0, optionhtwo.classList[1].length-5);
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = inputValue * units[unitFrom] / units[unitTo];

    }
}