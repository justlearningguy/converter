function count() {
    const units = {
        'Kilogram': 1000,     
        'Gram': 1,            
        'Milligram': 0.001,   
        'Tonne': 1000000,    
        'Pound': 453.59237, 
        'Ounce': 28.3495231 
    };
    const unitFrom = optionhone.classList[1].substr(0, optionhone.classList[1].length-5);
    const unitTo = optionhtwo.classList[1].substr(0, optionhtwo.classList[1].length-5);
    const inputValue = Number(optionone.value);
    if (unitFrom === unitTo) {
        optiontwo.value = inputValue;
    } else {
        optiontwo.value = inputValue* units[unitFrom] / units[unitTo];
    }
}