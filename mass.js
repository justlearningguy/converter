function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    if(optionhone.innerText == 'Kilogram'){
        switch(optionhtwo.innerText) {
            case 'Gram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Milligram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break
            case 'Tonne':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Pound':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*2.2046226218,3);
                break;
            case 'Ounce':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*35.27396195,3);
        }}
    else if(optionhone.innerText == 'Gram') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Milligram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break
            case 'Tonne':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Pound':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0022046226,3);
                break;
            case 'Ounce':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0352739619,3);
        }}
    else if(optionhone.innerText == 'Milligram') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Gram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break
            case 'Tonne':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000000,3);
                break;
            case 'Pound':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000022046,3);
                break;
            case 'Ounce':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.000035274,3);
        }}
    else if(optionhone.innerText == 'Tonne') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Gram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break
            case 'Milligram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000000,3);
                break;
            case 'Pound':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*2204.6226218,3);
                break;
            case 'Ounce':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*35273.96195,3);
        }}
    else if(optionhone.innerText == 'Pound') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.45359237,3);
                break;
            case 'Gram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*453.59237,3);
                break
            case 'Milligram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*453592.37,3);
                break;
            case 'Tonne':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0004535924,3);
                break;
            case 'Ounce':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*16,3);
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0283495231,3);
                break;
            case 'Gram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*28.349523125,3);
                break
            case 'Milligram':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*28349.523125,3);
                break;
            case 'Tonne':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000283495,3);
                break;
            case 'Pound':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0625,3);
        }}
    }




