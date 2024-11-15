function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    if(optionhone.innerText == 'Hour'){
        switch(optionhtwo.innerText) {
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*60,3);
                break;
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*3600,3);
                break
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*3600000,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0416666667,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.005952381,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0001140771,3);
        }}
    else if(optionhone.innerText == 'Minute') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0166666667,3);
                break;
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*60,3);
                break
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*60000,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0006944444,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000992063,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000019013,3);
        }}
    else if(optionhone.innerText == 'Second') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0002777778,3);
                break;
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0166666667,3);
                break
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1000,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000115741,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000016534,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.00000003168808781,3);
        }}
    else if(optionhone.innerText == 'Millisecond') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000002777777777,3);
                break;
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0000166667,3);
                break
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.001,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.00000001157407407,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.000000001653439153,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.00000000003168808781,3);
        }}
    else if(optionhone.innerText == 'Day') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*24,3);
                break;
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*1440,3);
                break
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*86400,3);
                break;
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*86400000,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.1428571429,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0027378508,3);
        }}
    else if(optionhone.innerText == 'Week') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*168,3);
                break;
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*10080,3);
                break
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*604800,3);
                break;
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*604800000,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*7,3);
                break;
            case 'Year':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*0.0191649555,3);
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*8766,3);
                break;
            case 'Minute':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*525960,3);
                break
            case 'Second':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*31557600,3);
                break;
            case 'Millisecond':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*31557600000,3);
                break;
            case 'Day':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*365.25,3);
                break;
            case 'Week':
                optiontwo.value = adaptiveFixed(Number(optionone.value)*52.178571429,3);
        }}
    }




