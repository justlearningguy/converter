function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Kelvin'){
        switch(optionhtwo.innerText) {
            case 'Celsius':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText) - 273.15,3);
                break;
            case 'Fahrenheit':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1.8 - 459.67,3);
        }}
    else if(optionhone.innerText == 'Celsius') {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText) + 273.15,3);
                break;
            case 'Fahrenheit':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1.8 + 32,3);
        }
    }
    else {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.innerText = adaptiveFixed((Number(optionone.innerText)+459.67)*5/9,3);
                break;
            case 'Celsius':
                optiontwo.innerText = adaptiveFixed((Number(optionone.innerText)-32)*5/9,3);
        } 
    }
}



