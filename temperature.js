function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    if(optionhone.innerText == 'Kelvin'){
        switch(optionhtwo.innerText) {
            case 'Celsius':
                optiontwo.value = adaptiveFixed(Number(optionone.value) - 273.15,3);
                break;
            case 'Fahrenheit':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1.8 - 459.67,3);
        }}
    else if(optionhone.innerText == 'Celsius') {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.value = adaptiveFixed(Number(optionone.value) + 273.15,3);
                break;
            case 'Fahrenheit':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1.8 + 32,3);
        }
    }
    else {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.value = adaptiveFixed((Number(optionone.value)+459.67)*5/9,3);
                break;
            case 'Celsius':
                optiontwo.value = adaptiveFixed((Number(optionone.value)-32)*5/9,3);
        } 
    }
}



