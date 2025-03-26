function count() {
    const units = {
        'Squarekilometer': 1000000,  
        'Squaremeter': 1,   
        'Squaredecimeter': 0.01,  
        'Squarecentimeter': 0.0001,    
        'Squaremillimeter': 0.000001,  
        'Are': 100,           
        'Hectare': 10000  
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