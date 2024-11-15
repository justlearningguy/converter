function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    if(optionhone.innerText == 'Square kilometer'){
        switch(optionhtwo.innerText) {
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000, 3);
                break;
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100000000, 3);
                break
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000000000,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000000000,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
        }}
    else if(optionhone.innerText == 'Square meter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
                break
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000,3);
        }}
    else if(optionhone.innerText == 'Square decimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100000000,3);
                break;
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100,3);
                break
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
        }}
    else if(optionhone.innerText == 'Square centimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000000000,3);
                break;
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000,3);
                break
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100000000,3);
        }}
    else if(optionhone.innerText == 'Square millimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000000000,3);
                break;
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/1000000,3);
                break
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000,3);
                break;
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/100000000,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000000000,3);
        }}
    else if(optionhone.innerText == 'Are') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)/10000,3);
                break;
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
                break
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000,3);
                break;
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100000000,3);
                break;
            case 'Hectare':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.01,3);
        }}
        
    else {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.01,3);
                break;
            case 'Square meter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000,3);
                break
            case 'Square decimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000000,3);
                break;
            case 'Square centimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100000000,3);
                break;
            case 'Square millimeter':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10000000000,3);
                break;
            case 'Are':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*100,3);
        }
    }
}



