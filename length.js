function count() {
        if(optionhone.innerText == optionhtwo.innerText) {
            optiontwo.innerText = optionone.innerText;
        }
        if(optionhone.innerText == 'Kilometer'){
            switch(optionhtwo.innerText) {
                case 'Meter':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                    break;
                case 'Decimeter':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
                    break;
                case 'Centimeter':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000,3);
                    break;
                case 'Millimeter':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                    break;
                case 'Micrometer':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000000,3);
                    break;
                case 'Nanometer':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000000000,3);
                    break;
                case 'Mile':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.621371,3);
                    break;
                case 'Foot':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3280.8398950131,3);
                    break;
                case 'Inch':
                    optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*39370.1,3);
       }}
       else if(optionhone.innerText == 'Meter'){
        switch(optionhtwo.innerText) {
            case 'Kilometer': 
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
                break;
            case 'Decimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10,3);
                break;
            case 'Centimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
                break;
            case 'Millimeter':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
                break;
            case 'Micrometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
                break;
            case 'Nanometer':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000000,3);
                break;
            case 'Mile':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.000621371,3);
                break;
            case 'Foot':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3.28084,3);
                break;
            case 'Inch':
                optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*39.370079,3);
   }}
   else if(optionhone.innerText == 'Decimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*100000000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000621371,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.3280839895,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3.937007874,3);
}}
else if(optionhone.innerText == 'Centimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*10000000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000062137,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.032808399,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.3937007874,3);
}}
else if(optionhone.innerText == 'Millimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000006213711922,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0032808399,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0393700787,3);
}}
else if(optionhone.innerText == 'Micrometer'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000000,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000000006213711922,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000032808,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000393701,3);
}}
else if(optionhone.innerText == 'Nanometer'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000000000,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000000,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/100000000,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/10000000,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000000,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)/1000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.00000000000062137119,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.000000003280839895,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.00000003937007874,3);
}}
else if(optionhone.innerText == 'Mile'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1.609344,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1609.344,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*16093.44,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*160934.4,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1609344,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1609344000,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*1609344000000,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*5280,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*63360,3);
}}
else if(optionhone.innerText == 'Foot'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0003048,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.3048,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*3.048,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*30.48,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*304.8,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*304800,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*304800000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0001893939,3);
            break;
        case 'Inch':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*12,3);
}}
else {
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000254,3);
            break;
        case 'Meter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0254,3);
            break;
        case 'Decimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.254,3);
            break;
        case 'Centimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*2.54,3);
            break;
        case 'Millimeter':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*25.4,3);
            break;
        case 'Micrometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*25400,3);
            break;
        case 'Nanometer':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*25400000,3);
            break;
        case 'Mile':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0000157828,3);
            break;
        case 'Foot':
            optiontwo.innerText = adaptiveFixed(Number(optionone.innerText)*0.0833333333,3);
}}}