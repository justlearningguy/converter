function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    if(optionhone.innerText == 'Cubic meter'){
        switch(optionhtwo.innerText) {
            case 'Cubic decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Cubic centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break
            case 'Cubic millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000000,3);
                break;
            case 'Liter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Milliliter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
        }}
    else if(optionhone.innerText == 'Cubic decimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Cubic centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break
            case 'Cubic millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break;
            case 'Liter':
                optiontwo.value = adaptiveFixed(Number(optionone.value),3);
                break;
            case 'Milliliter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
        }}
    else if(optionhone.innerText == 'Cubic centimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break
            case 'Cubic millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Liter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Milliliter':
                optiontwo.value = adaptiveFixed(Number(optionone.value),3);
        }}
    else if(optionhone.innerText == 'Cubic millimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break
            case 'Cubic centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Liter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Milliliter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
        }}
    else if(optionhone.innerText == 'Liter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value),3);
                break
            case 'Cubic centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Cubic millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break;
            case 'Milliliter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
                break
            case 'Cubic centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value),3);
                break;
            case 'Cubic millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Liter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000,3);
        }}
    }




