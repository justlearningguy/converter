function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Hour'){
        switch(optionhtwo.innerText) {
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*60,3);
                break;
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3600,3);
                break
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3600000,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0416666667,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.005952381,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0001140771,3);
        }}
    else if(optionhone.innerText == 'Minute') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0166666667,3);
                break;
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*60,3);
                break
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*60000,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0006944444,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000992063,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000019013,3);
        }}
    else if(optionhone.innerText == 'Second') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0002777778,3);
                break;
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0166666667,3);
                break
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000115741,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000016534,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.00000003168808781,3);
        }}
    else if(optionhone.innerText == 'Millisecond') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000002777777777,3);
                break;
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000166667,3);
                break
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.001,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.00000001157407407,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.000000001653439153,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.00000000003168808781,3);
        }}
    else if(optionhone.innerText == 'Day') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*24,3);
                break;
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1440,3);
                break
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*86400,3);
                break;
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*86400000,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.1428571429,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0027378508,3);
        }}
    else if(optionhone.innerText == 'Week') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*168,3);
                break;
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10080,3);
                break
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*604800,3);
                break;
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*604800000,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*7,3);
                break;
            case 'Year':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0191649555,3);
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*8766,3);
                break;
            case 'Minute':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*525960,3);
                break
            case 'Second':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*31557600,3);
                break;
            case 'Millisecond':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*31557600000,3);
                break;
            case 'Day':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*365.25,3);
                break;
            case 'Week':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*52.178571429,3);
        }}
    }




