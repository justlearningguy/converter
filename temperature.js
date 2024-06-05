function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Kelvin'){
        switch(optionhtwo.innerText) {
            case 'Celsius':
                optiontwo.innerText = Number(optionone.innerText) - 273.15;
                break;
            case 'Fahrenheit':
                optiontwo.innerText = Number(optionone.innerText)*1.8 - 459.67;
        }}
    else if(optionhone.innerText == 'Celsius') {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.innerText = Number(optionone.innerText) + 273.15;
                break;
            case 'Fahrenheit':
                optiontwo.innerText = Number(optionone.innerText)*1.8 + 32;
        }
    }
    else {
        switch(optionhtwo.innerText) {
            case 'Kelvin':
                optiontwo.innerText = (Number(optionone.innerText)+459.67)*5/9;
                break;
            case 'Celsius':
                optiontwo.innerText = (Number(optionone.innerText)-32)*5/9;
        } 
    }
}



