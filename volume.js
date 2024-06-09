function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Cubic meter'){
        switch(optionhtwo.innerText) {
            case 'Cubic decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Cubic centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break
            case 'Cubic millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000000,3);
                break;
            case 'Liter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Milliliter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
        }}
    else if(optionhone.innerText == 'Cubic decimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break;
            case 'Cubic centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break
            case 'Cubic millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Liter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText),3);
                break;
            case 'Milliliter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
        }}
    else if(optionhone.innerText == 'Cubic centimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break
            case 'Cubic millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Liter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break;
            case 'Milliliter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText),3);
        }}
    else if(optionhone.innerText == 'Cubic millimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break
            case 'Cubic centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break;
            case 'Liter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break;
            case 'Milliliter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
        }}
    else if(optionhone.innerText == 'Liter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText),3);
                break
            case 'Cubic centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Cubic millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Milliliter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break
            case 'Cubic centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText),3);
                break;
            case 'Cubic millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Liter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
        }}
    }




