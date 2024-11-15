const optionone = document.getElementById('optionone');
const optiontwo = document.getElementById('optiontwo');
const optionhone = document.getElementById('optionhone');
const optionhtwo = document.getElementById('optionhtwo');
const chooseTypeMenu = document.querySelector('.chooseTypeMenu');
const chooseTypeMenuBg = document.querySelector('.bgOfTypeMenu');
const swap = document.querySelector('.reverseSvg');
const unitTypeH = document.getElementById('unitTypeH');
let option = 1;
let types;
//for currencies
let valutes1 = 'USD';
let valutes2;
let valutes;


optionone.focus();
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
if(localStorage.getItem('unit_type') == 'length') {
    document.title = 'Length Converter';
    unitTypeH.innerText = 'Length';
    optionhone.innerText = 'Meter';
    optionhtwo.innerText = 'Centimeter';
    include("length.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Kilometer';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Meter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Decimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Centimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Millimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Micrometer';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Nanometer';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Mile';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Foot';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Inch';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'speed') {
    document.title = 'Speed Converter';
    unitTypeH.innerText = 'Speed';
    optionhone.innerText = 'Meter/second';
    optionhtwo.innerText = 'Kilometer/hour';
    include("speed.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Meter/second';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Kilometer/hour';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Mile/hour';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'temperature') {
    document.title = 'Temperature Converter';
    unitTypeH.innerText = 'Temperature';
    optionhone.innerText = 'Celsius';
    optionhtwo.innerText = 'Fahrenheit';
    include("temperature.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Celsius';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Fahrenheit';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Kelvin';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'area') {
    document.title = 'Area Converter';
    unitTypeH.innerText = 'Area';
    optionhone.innerText = 'Square meter';
    optionhtwo.innerText = 'Square centimeter';
    include("area.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Square kilometer';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Square meter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Square decimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Square centimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Square millimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Are';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Hectare';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'volume') {
    document.title = 'Volume Converter';
    unitTypeH.innerText = 'Volume';
    optionhone.innerText = 'Cubic centimeter';
    optionhtwo.innerText = 'Liter';
    include("volume.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Cubic meter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Cubic decimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Cubic centimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Cubic millimeter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Liter';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Milliliter';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'mass') {
    document.title = 'Mass Converter';
    unitTypeH.innerText = 'Mass';
    optionhone.innerText = 'Kilogram';
    optionhtwo.innerText = 'Gram';
    include("mass.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Kilogram';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Gram';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Milligram';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Tonne';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Pound';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Ounce';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'time') {
    document.title = 'Time Converter';
    unitTypeH.innerText = 'Time';
    optionhone.innerText = 'Hour';
    optionhtwo.innerText = 'Second';
    include("time.js");

    let DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Hour';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Minute';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Second';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Millisecond';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Day';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Week';
    chooseTypeMenu.appendChild(DivOfType);

    DivOfType = window.document.createElement('div');
    DivOfType.className = 'type';
    DivOfType.innerText = 'Year';
    chooseTypeMenu.appendChild(DivOfType);
}
else if(localStorage.getItem('unit_type') == 'currency') {
    document.title = 'Currency Converter';
    unitTypeH.innerText = 'Currency';
    optionhone.innerText = 'Доллар США';
    optionhtwo.innerText = 'Российский рубль';
    include("currency.js");

    async function f() {
        let a = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        a = await a.json();
        a = a.Valute;
        let eKeys = Object.keys(a);
            let DivOfType = window.document.createElement('div');
            DivOfType.className = 'type';
            DivOfType.innerText = "Российский рубль";
            chooseTypeMenu.appendChild(DivOfType);
        for(let i=0; i< eKeys.length;i++) {
            DivOfType = window.document.createElement('div');
            DivOfType.className = 'type';
            DivOfType.innerText = a[eKeys[i]].Name;
            DivOfType.id = eKeys[i];
            chooseTypeMenu.appendChild(DivOfType);

        }
        valutes = a;
        types = document.querySelectorAll('.type');  
        for(let i = 0; i<types.length; i++) {
            types[i].addEventListener('click', function() {
                if(option==1) {
                    optionhone.innerText = types[i].textContent;
                    if(localStorage.getItem('unit_type') == 'currency') {
                        valutes1 = types[i].id;
                    }
                }
                else {
                    optionhtwo.innerText = types[i].textContent; 
                    if(localStorage.getItem('unit_type') == 'currency') {
                        valutes2 = types[i].id;
                    }   
                }    
                closeChooseMenu();      
                if(optionone.value.trim() == '') {
                    optiontwo.value = '';
                }
                else {
                    count();
                }                                                 
        })} 
        
            }
    f();
}
if(localStorage.getItem('unit_type') == 'currency') {
}
else {
    types = document.querySelectorAll('.type');  
    for(let i = 0; i<types.length; i++) {
        types[i].addEventListener('click', function() {
            if(option==1) {
                optionhone.innerText = types[i].textContent;
                if(localStorage.getItem('unit_type') == 'currency') {
                    valutes1 = types[i].id;
                }
            }
            else {
                optionhtwo.innerText = types[i].textContent; 
                if(localStorage.getItem('unit_type') == 'currency') {
                    valutes2 = types[i].id;
                }   
            }    
            closeChooseMenu();      
            if(optionone.value.trim() == '') {
                optiontwo.value = '';
            }
            else {
                count();
            }                                                 
    })} 
}
//open choose type menu
function openChooseMenu() {
    chooseTypeMenuBg.style.display = 'flex';
    setTimeout(function() {
        chooseTypeMenuBg.style.opacity = '1';
    }, 0);
}
swap.onclick = function() {
    let swapHone = optionhone.innerText;
    let swapHtwo = optionhtwo.innerText;
    let swapValueOne = optiontwo.value;
    optionhone.innerText = swapHtwo;
    optionhtwo.innerText = swapHone;
    optionone.value = swapValueOne;
    if(localStorage.getItem('unit_type') == 'currency') {
        [valutes1,valutes2] = [valutes2,valutes1]
    }
    count();
    optionone.focus();
}
function adaptiveFixed(num, needNonZero) {
    let res = Math.trunc(num);
    let frac = Math.abs(num - res);
    if (frac === 0)
      return res;
    res += '.';
    let numNonZero = 0;
    while (frac !== 0 && numNonZero < needNonZero) {
      frac *= 10;
      const cur = Math.floor(frac);
      res += cur;
      frac -= cur;
      if (cur !== 0)
        numNonZero++;
    }
    return res;
}
function closeChooseMenu() {
  chooseTypeMenuBg.style.opacity = '0';
  setTimeout(function() {
    chooseTypeMenuBg.style.display = 'none';
  }, 300);
}
chooseTypeMenuBg.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(document.querySelector(".chooseTypeMenuBg"));
	if ( ! withinBoundaries ) {
		closeChooseMenu();
	}
})
//returning to main page
function tomainscreen() {
    window.location.href = 'index.html';
    localStorage.removeItem('unit_type');
}
function maxStop() {
    if(optionone.value.length > 14) {
        optionone.value = optionone.value.slice(0, -1);
    }
}
optionhone.addEventListener('click', function() {
    option = 1;
    openChooseMenu();
})
optionhtwo.addEventListener('click', function() {
    option = 2;
    openChooseMenu();
})
optionone.addEventListener('input', function() {
    if(optionone.value.trim() == '') {
        optiontwo.value = '';
    }
    else {
        count();
    }

})