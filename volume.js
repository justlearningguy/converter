function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Cubic meter'){
        switch(optionhtwo.innerText) {
            case 'Cubic decimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Cubic centimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break
            case 'Cubic millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000000;
                break;
            case 'Liter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Milliliter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
        }}
    else if(optionhone.innerText == 'Cubic decimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Cubic centimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break
            case 'Cubic millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Liter':
                optiontwo.innerText = Number(optionone.innerText);
                break;
            case 'Milliliter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
        }}
    else if(optionhone.innerText == 'Cubic centimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break
            case 'Cubic millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Liter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Milliliter':
                optiontwo.innerText = Number(optionone.innerText);
        }}
    else if(optionhone.innerText == 'Cubic millimeter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = Number(optionone.innerText)/1000000000;
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break
            case 'Cubic centimeter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Liter':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Milliliter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
        }}
    else if(optionhone.innerText == 'Liter') {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = Number(optionone.innerText);
                break
            case 'Cubic centimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Cubic millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Milliliter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Cubic meter':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Cubic decimeter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break
            case 'Cubic centimeter':
                optiontwo.innerText = Number(optionone.innerText);
                break;
            case 'Cubic millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Liter':
                optiontwo.innerText = Number(optionone.innerText)/1000;
        }}
    }




