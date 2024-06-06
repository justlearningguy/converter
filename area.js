function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Square kilometer'){
        switch(optionhtwo.innerText) {
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)*100000000;
                break
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)*10000000000;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000000000;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)*10000;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)*100;
        }}
    else if(optionhone.innerText == 'Square meter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)*100;
                break
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)*10000;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)/100;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)/10000;
        }}
    else if(optionhone.innerText == 'Square decimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)/100000000;
                break;
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)/100;
                break
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)*100;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*10000;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)/10000;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
        }}
    else if(optionhone.innerText == 'Square centimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)/10000000000;
                break;
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)/10000;
                break
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)/100;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*100;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)/100000000;
        }}
    else if(optionhone.innerText == 'Square millimeter') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)/1000000000000;
                break;
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)/1000000;
                break
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)/10000;
                break;
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)/100;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)/100000000;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)/10000000000;
        }}
    else if(optionhone.innerText == 'Are') {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)/10000;
                break;
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)*100;
                break
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)*10000;
                break;
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*100000000;
                break;
            case 'Hectare':
                optiontwo.innerText = Number(optionone.innerText)*0.01;
        }}
        
    else {
        switch(optionhtwo.innerText) {
            case 'Square kilometer':
                optiontwo.innerText = Number(optionone.innerText)*0.01;
                break;
            case 'Square meter':
                optiontwo.innerText = Number(optionone.innerText)*10000;
                break
            case 'Square decimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Square centimeter':
                optiontwo.innerText = Number(optionone.innerText)*100000000;
                break;
            case 'Square millimeter':
                optiontwo.innerText = Number(optionone.innerText)*10000000000;
                break;
            case 'Are':
                optiontwo.innerText = Number(optionone.innerText)*100;
        }
    }
}



