function count() {
        if(optionhone.innerText == optionhtwo.innerText) {
            optiontwo.value = optionone.value;
        }
        if(optionhone.innerText == 'Meter/second'){
            switch(optionhtwo.innerText) {
                case 'Kilometer/hour':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*3.6,3);
                    break;
                case 'Mile/hour':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*2.2369362921,3);
            }}
        else if(optionhone.innerText == 'Kilometer/hour') {
            switch(optionhtwo.innerText) {
                case 'Meter/second':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*0.2777777778,3);
                    break;
                case 'Mile/hour':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*0.6213711922,3);
            }
        }
        else {
            switch(optionhtwo.innerText) {
                case 'Meter/second':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*0.44704,3);
                    break;
                case 'Kilometer/hour':
                    optiontwo.value = adaptiveFixed(Number(optionone.value)*1.609344,3);
            } 
        }
}



