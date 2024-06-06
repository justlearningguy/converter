function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    if(optionhone.innerText == 'Hour'){
        switch(optionhtwo.innerText) {
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*60;
                break;
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*3600;
                break
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*3600000;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*0.0416666667;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*0.005952381;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.0001140771;
        }}
    else if(optionhone.innerText == 'Minute') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*0.0166666667;
                break;
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*60;
                break
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*60000;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*0.0006944444;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*0.0000992063;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.0000019013;
        }}
    else if(optionhone.innerText == 'Second') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*0.0002777778;
                break;
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*0.0166666667;
                break
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*0.0000115741;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*0.0000016534;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.00000003168808781;
        }}
    else if(optionhone.innerText == 'Millisecond') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*0.0000002777777777;
                break;
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*0.0000166667;
                break
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*0.001;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*0.00000001157407407;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*0.000000001653439153;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.00000000003168808781;
        }}
    else if(optionhone.innerText == 'Day') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*24;
                break;
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*1440;
                break
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*86400;
                break;
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*86400000;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*0.1428571429;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.0027378508;
        }}
    else if(optionhone.innerText == 'Week') {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*168;
                break;
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*10080;
                break
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*604800;
                break;
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*604800000;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*7;
                break;
            case 'Year':
                optiontwo.innerText = Number(optionone.innerText)*0.0191649555;
        }}
    else {
        switch(optionhtwo.innerText) {
            case 'Hour':
                optiontwo.innerText = Number(optionone.innerText)*8766;
                break;
            case 'Minute':
                optiontwo.innerText = Number(optionone.innerText)*525960;
                break
            case 'Second':
                optiontwo.innerText = Number(optionone.innerText)*31557600;
                break;
            case 'Millisecond':
                optiontwo.innerText = Number(optionone.innerText)*31557600000;
                break;
            case 'Day':
                optiontwo.innerText = Number(optionone.innerText)*365.25;
                break;
            case 'Week':
                optiontwo.innerText = Number(optionone.innerText)*52.178571429;
        }}
    }




