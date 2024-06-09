function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Square kilometer'){
        switch(optionhtwo.innerText) {
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000, 3);
                break;
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000000, 3);
                break
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000000000,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000000000,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
        }}
    else if(optionhone.innerText == 'Square meter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break;
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
                break
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
        }}
    else if(optionhone.innerText == 'Square decimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000000,3);
                break;
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
                break
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
        }}
    else if(optionhone.innerText == 'Square centimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000000000,3);
                break;
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
                break
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000000,3);
        }}
    else if(optionhone.innerText == 'Square millimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000000000,3);
                break;
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
                break
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
                break;
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000000,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000000000,3);
        }}
    else if(optionhone.innerText == 'Are') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
                break;
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
                break
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                break;
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000000,3);
                break;
            case 'Hectare':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.01,3);
        }}
        
    else {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.01,3);
                break;
            case 'Square meter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                break
            case 'Square decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Square centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000000,3);
                break;
            case 'Square millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000000000,3);
                break;
            case 'Are':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
        }
    }
}



