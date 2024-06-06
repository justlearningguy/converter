function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Kilogram'){
        switch(optionhtwo.innerText) {
            case 'Gram':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Milligram':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break
            case 'Tonne':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Pound':
                optiontwo.innerText = Number(optionone.innerText)*2.2046226218;
                break;
            case 'Ounce':
                optiontwo.innerText = Number(optionone.innerText)*35.27396195;
        }}
    else if(optionhone.innerText == 'Gram') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Milligram':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break
            case 'Tonne':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Pound':
                optiontwo.innerText = Number(optionone.innerText)*0.0022046226;
                break;
            case 'Ounce':
                optiontwo.innerText = Number(optionone.innerText)*0.0352739619;
        }}
    else if(optionhone.innerText == 'Milligram') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Gram':
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break
            case 'Tonne':
                optiontwo.innerText = Number(optionone.innerText)/1000000000;
                break;
            case 'Pound':
                optiontwo.innerText = Number(optionone.innerText)*0.0000022046;
                break;
            case 'Ounce':
                optiontwo.innerText = Number(optionone.innerText)*0.000035274;
        }}
    else if(optionhone.innerText == 'Tonne') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Gram':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break
            case 'Milligram':
                optiontwo.innerText = Number(optionone.innerText)*1000000000;
                break;
            case 'Pound':
                optiontwo.innerText = Number(optionone.innerText)*2204.6226218;
                break;
            case 'Ounce':
                optiontwo.innerText = Number(optionone.innerText)*35273.96195;
        }}
    else if(optionhone.innerText == 'Pound') {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.innerText = Number(optionone.innerText)*0.45359237;
                break;
            case 'Gram':
                optiontwo.innerText = Number(optionone.innerText)*453.59237;
                break
            case 'Milligram':
                optiontwo.innerText = Number(optionone.innerText)*453592.37;
                break;
            case 'Tonne':
                optiontwo.innerText = Number(optionone.innerText)*0.0004535924;
                break;
            case 'Ounce':
                optiontwo.innerText = Number(optionone.innerText)*16;
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Kilogram':
                optiontwo.innerText = Number(optionone.innerText)*0.0283495231;
                break;
            case 'Gram':
                optiontwo.innerText = Number(optionone.innerText)*28.349523125;
                break
            case 'Milligram':
                optiontwo.innerText = Number(optionone.innerText)*28349.523125;
                break;
            case 'Tonne':
                optiontwo.innerText = Number(optionone.innerText)*0.0000283495;
                break;
            case 'Pound':
                optiontwo.innerText = Number(optionone.innerText)*0.0625;
        }}
    }




