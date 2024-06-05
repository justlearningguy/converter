function count() {
        if(optionhone.innerText == optionhtwo.innerText) {
            optiontwo.innerText = optionone.innerText;
        }
        if(optionhone.innerText == 'Kilometer'){
            switch(optionhtwo.innerText) {
                case 'Meter':
                    optiontwo.innerText = Number(optionone.innerText)*1000;
                    break;
                case 'Decimeter':
                    optiontwo.innerText = Number(optionone.innerText)*10000;
                    break;
                case 'Centimeter':
                    optiontwo.innerText = Number(optionone.innerText)*100000;
                    break;
                case 'Millimeter':
                    optiontwo.innerText = Number(optionone.innerText)*1000000;
                    break;
                case 'Micrometer':
                    optiontwo.innerText = Number(optionone.innerText)*1000000000;
                    break;
                case 'Nanometer':
                    optiontwo.innerText = Number(optionone.innerText)*1000000000000;
                    break;
                case 'Mile':
                    optiontwo.innerText = Number(optionone.innerText)*0.621371;
                    break;
                case 'Foot':
                    optiontwo.innerText = Number(optionone.innerText)*3280.8398950131;
                    break;
                case 'Inch':
                    optiontwo.innerText = Number(optionone.innerText)*39370.1;
       }}
       else if(optionhone.innerText == 'Meter'){
        switch(optionhtwo.innerText) {
            case 'Kilometer': 
                optiontwo.innerText = Number(optionone.innerText)/1000;
                break;
            case 'Decimeter':
                optiontwo.innerText = Number(optionone.innerText)*10;
                break;
            case 'Centimeter':
                optiontwo.innerText = Number(optionone.innerText)*100;
                break;
            case 'Millimeter':
                optiontwo.innerText = Number(optionone.innerText)*1000;
                break;
            case 'Micrometer':
                optiontwo.innerText = Number(optionone.innerText)*1000000;
                break;
            case 'Nanometer':
                optiontwo.innerText = Number(optionone.innerText)*1000000000;
                break;
            case 'Mile':
                optiontwo.innerText = Number(optionone.innerText)*0.000621371;
                break;
            case 'Foot':
                optiontwo.innerText = Number(optionone.innerText)*3.28084;
                break;
            case 'Inch':
                optiontwo.innerText = Number(optionone.innerText)*39.370079;
   }}
   else if(optionhone.innerText == 'Decimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)/10000;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)/10;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)*10;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)*100;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*100000;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*100000000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0000621371;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.3280839895;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*3.937007874;
}}
else if(optionhone.innerText == 'Centimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)/100000;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)/100;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)/10;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)*10;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*10000;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*10000000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0000062137;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.032808399;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*0.3937007874;
}}
else if(optionhone.innerText == 'Millimeter'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)/1000000;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)/1000;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)/100;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)/10;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*1000;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*1000000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0000006213711922;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.0032808399;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*0.0393700787;
}}
else if(optionhone.innerText == 'Micrometer'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)/1000000000;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)/1000000;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)/100000;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)/10000;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)/1000;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*1000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0000000006213711922;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.0000032808;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*0.0000393701;
}}
else if(optionhone.innerText == 'Nanometer'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)/1000000000000;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)/1000000000;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)/100000000;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)/10000000;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)/1000000;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)/1000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.00000000000062137119;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.000000003280839895;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*0.00000003937007874;
}}
else if(optionhone.innerText == 'Mile'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)*1.609344;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)*1609.344;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)*16093.44;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)*160934.4;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)*1609344;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*1609344000;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*1609344000000;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*5280;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*63360;
}}
else if(optionhone.innerText == 'Foot'){
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)*0.0003048;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)*0.3048;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)*3.048;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)*30.48;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)*304.8;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*304800;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*304800000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0001893939;
            break;
        case 'Inch':
            optiontwo.innerText = Number(optionone.innerText)*12;
}}
else {
    switch(optionhtwo.innerText) {
        case 'Kilometer':
            optiontwo.innerText = Number(optionone.innerText)*0.0000254;
            break;
        case 'Meter':
            optiontwo.innerText = Number(optionone.innerText)*0.0254;
            break;
        case 'Decimeter':
            optiontwo.innerText = Number(optionone.innerText)*0.254;
            break;
        case 'Centimeter':
            optiontwo.innerText = Number(optionone.innerText)*2.54;
            break;
        case 'Millimeter':
            optiontwo.innerText = Number(optionone.innerText)*25.4;
            break;
        case 'Micrometer':
            optiontwo.innerText = Number(optionone.innerText)*25400;
            break;
        case 'Nanometer':
            optiontwo.innerText = Number(optionone.innerText)*25400000;
            break;
        case 'Mile':
            optiontwo.innerText = Number(optionone.innerText)*0.0000157828;
            break;
        case 'Foot':
            optiontwo.innerText = Number(optionone.innerText)*0.0833333333;
}}}