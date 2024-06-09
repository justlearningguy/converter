function count() {
        if(optionhone.innerText == optionhtwo.innerText) {
            optiontwo.innerText = optionone.innerText;
        }
        if(optionhone.innerText == 'Meter/second'){
            switch(optionhtwo.innerText) {
                case 'Kilometer/hour':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3.6,3);
                    break;
                case 'Mile/hour':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*2.2369362921,3);
            }}
        else if(optionhone.innerText == 'Kilometer/hour') {
            switch(optionhtwo.innerText) {
                case 'Meter/second':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.2777777778,3);
                    break;
                case 'Mile/hour':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.6213711922,3);
            }
        }
        else {
            switch(optionhtwo.innerText) {
                case 'Meter/second':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.44704,3);
                    break;
                case 'Kilometer/hour':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1.609344,3);
            } 
        }
}



