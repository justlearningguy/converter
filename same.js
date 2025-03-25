//for closing convertScreen
const convertScreen = document.querySelector('.converter_screen')
function tomainscreen() {
    //сделать display: none для опр.блоков
    localStorage.removeItem('unit_type');
    convertScreen.innerHTML = ''
    convertScreen.style.display = 'none'
    document.querySelector('.main').style.display = 'flex';
}
//vars
//for all except for average grade
let types;
let optionone;
let optiontwo;
let optionhone;
let optionhtwo;
let chooseTypeMenu;
let chooseTypeMenuBg;
let option = 1;
// for currency only
let valutes1 = 'USD';
let valutes2;
let valutes;
let gradeField;
let weightField;
let averageOutput;
let pushBtn;
let clearBtn;
let Grades = [];
let Weights = [];
let sumOfgrades;
let sumOfweights;
let lang;
//functions to add and remove scripts
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function exclude() {
    const tags = Array.from(document.getElementsByTagName('script'));
    for (let i = tags.length - 1; i >= 0; i--) {
      const script = tags[i];
      const src = script.getAttribute('src');
      if (script && src) {
        if (src !== 'index.js' && src !== 'same.js') {
            tags[i].parentNode.removeChild(tags[i]);
        }
      }
    }
  }

function menu_maker() {
lang = window.localStorage.getItem('lang');
exclude()
convertScreen.style.display = 'block';
convertScreen.innerHTML = '';
convertScreen.insertAdjacentHTML('beforeend', `<div class="top_h">
                <svg class="back_arrow" onclick="tomainscreen()" viewBox="0 0 448 512"><path  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <h1 id="unitTypeH">-</h1>
            </div>`);
if(localStorage.getItem('unit_type')!=='averagegrade') {
    convertScreen.insertAdjacentHTML('beforeend', `<div class="convertOptionDiv">
                <div class="convertOptionRow">
                    <span class="convertDirectionTip from_lang"></span>
                    <span class="convertOptionH" id="optionhone" onclick='oh1Click()'>-</span>
                </div>
                    <input type="number" oninput="o1Input()" id='optionone' class="convertOptionValueActive"> 
            </div>
            <svg class="reverseSvg" onclick='swap()' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.5L8 16.5M8 3.5L3.5 7.83333M8 3.5L12.5 7.83333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 20.5L17 7.5M17 20.5L21.5 16.1667M17 20.5L12.5 16.1667" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <div class="convertOptionDiv">
                <div class="convertOptionRow">
                    <span class="convertDirectionTip to_lang"></span>
                    <span class="convertOptionH" id="optionhtwo" onclick='oh2Click()'>-</span>
                </div>
                <input readonly id='optiontwo' class="convertOptionValuePassive">
            </div>
        
        <div class="bgOfTypeMenu">
        <div class="chooseTypeMenu">
        </div>
        </div>`);
        optionone = document.getElementById('optionone');
        optiontwo = document.getElementById('optiontwo');
        optionhone = document.getElementById('optionhone');
        optionhtwo = document.getElementById('optionhtwo');
        chooseTypeMenu = document.querySelector('.chooseTypeMenu');
        chooseTypeMenuBg = document.querySelector('.bgOfTypeMenu');
        chooseTypeMenuBg.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(document.querySelector(".chooseTypeMenuBg"));
            if ( ! withinBoundaries ) {
                closeChooseMenu();
            }
        })
        optionone.focus();
} else {
    convertScreen.insertAdjacentHTML('beforeend', ` 
        <div class="toprow">
            <input type="number" class='grade_lang' placeholder="grade" id="gradeField">
            <input type="number" class='weight_lang' placeholder="weight" id="weightField">
            <div id="pushButton">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z" fill="white"></path></g></svg>
            </div>
            <div id="clearButton">C</div>
        </div>
        <div class="toprow" style="margin-top: 10px">
            <span id="averageH" class='average_lang'>Average:</span>
            <span id="averageOutput">0</span>
        </div>
        <div class="gradesListDiv">
  
            <!-- <div class="gradeListElem">
                <div class="gradeListElemGrade">5</div>
                <div class="gradeListElemWeight">10</div>
            </div> -->
  
        </div>`);
}
let unitTypeH = document.getElementById('unitTypeH');
if(localStorage.getItem('unit_type') == 'length') {
    a = ['Kilometer', 'Meter', 'Decimeter', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer', 'Mile', 'Foot', 'Inch'];  
    unitTypeH.classList = 'unitLength_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("length.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'speed') {
    a = ['Meter per second', 'Kilometer per hour', 'Mile per hour'];
    unitTypeH.classList = 'unitSpeed_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("speed.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'temperature') {
    a = ['Celsius', 'Fahrenheit', 'Kelvin'];
    unitTypeH.classList = 'unitTemperature_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("temperature.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'area') {
    a = ['Square kilometer', 'Square meter', 'Square decimeter', 'Square centimeter', 'Square millimeter', 'Are', 'Hectare'];
    unitTypeH.classList = 'unitArea_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("area.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'volume') {
    a = ['Cubic meter', 'Cubic decimeter', 'Cubic centimeter', 'Cubic millimeter', 'Liter', 'Milliliter'];
    unitTypeH.classList = 'unitVolume_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("volume.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'mass') {
    a = ['Kilogram', 'Gram', 'Milligram', 'Tonne', 'Pound', 'Ounce'];
    unitTypeH.classList = 'unitMass_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("mass.js");
    for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'time') {
    a = ['Hour', 'Minute', 'Second', 'Millisecond', 'Day', 'Week', 'Year'];
    unitTypeH.classList = 'unitTime_lang';
    optionhone.classList = `convertOptionH ${a[0].replaceAll(' ', '')}_lang`;
    optionhtwo.classList = `convertOptionH ${a[1].replaceAll(' ', '')}_lang`;
    include("time.js"); 
        for(const i of a) {
        let DivOfType = window.document.createElement('div');
        DivOfType.classList = `type ${i.replaceAll(' ', '')}_lang`;
        chooseTypeMenu.appendChild(DivOfType);
    }
}
else if(localStorage.getItem('unit_type') == 'averagegrade') {  
    unitTypeH.classList = 'unitAg_lang';
    include('averagegrade.js');
    }
else if(localStorage.getItem('unit_type') == 'currency') {
    unitTypeH.classList = 'unitCurrency_lang';
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
if(window.localStorage.getItem('unit_type')!='averagegrade') {
types = document.querySelectorAll('.type');  
for(let i = 0; i<types.length; i++) {
    types[i].addEventListener('click', function() {
        if(option==1) {
            if(localStorage.getItem('unit_type') == 'currency') {
                valutes1 = types[i].id;
                optionhone.innerText = types[i].textContent;
            } else {
                optionhone.classList = `convertOptionH ${ types[i].classList[1]}`;
                optionhone.innerText = langHeaders[optionhone.classList[1]][window.localStorage.getItem('lang')];

            }
        }
        else {
            if(localStorage.getItem('unit_type') == 'currency') {
                valutes2 = types[i].id;
                optionhtwo.innerText = types[i].textContent;
            } else {
                optionhtwo.classList = `convertOptionH ${ types[i].classList[1]}`;
                optionhtwo.innerText = langHeaders[optionhtwo.classList[1]][window.localStorage.getItem('lang')];
            }
        }    
        closeChooseMenu();      
        if(optionone.value.trim() == '') {
            optiontwo.value = '';
        }
        else {
            count();
        }                                                 
})} } 
langPlaceholdersSet();
langHeadersSet();
      }


//open choose type menu
function openChooseMenu() {
    chooseTypeMenuBg.style.display = 'flex';
    setTimeout(function() {
        chooseTypeMenuBg.style.opacity = '1';
    }, 0);
}
function swap() {
    let swapValueOne = optiontwo.value;
    if(localStorage.getItem('unit_type') == 'currency') {
        [valutes1,valutes2] = [valutes2,valutes1]
        let swapHone = optionhone.innerText;
        let swapHtwo = optionhtwo.innerText;
        optionhone.innerText = swapHtwo;
        optionhtwo.innerText = swapHone;
        optionone.value = swapValueOne;
    } else {
        let swapHone = Array.from(optionhone.classList).join(' ');
        let swapHtwo = Array.from(optionhtwo.classList).join(' ');
        optionhone.classList = swapHtwo;
        optionhtwo.classList = swapHone;
        optionhone.innerText = langHeaders[optionhone.classList[1]][window.localStorage.getItem('lang')];
        optionhtwo.innerText = langHeaders[optionhtwo.classList[1]][window.localStorage.getItem('lang')];
        optionone.value = swapValueOne;
    }
    if(swapValueOne!='') {
        count();
    }
    optionone.focus();
}
function closeChooseMenu() {
  chooseTypeMenuBg.style.opacity = '0';
  setTimeout(function() {
    chooseTypeMenuBg.style.display = 'none';
  }, 300);
}


function maxStop() { //ограничение ввода
    if(optionone.value.length > 13) {
        optionone.value = optionone.value.slice(0, -1);
    }
}
function oh1Click(){
    option = 1;
    openChooseMenu();
}
function oh2Click(){
    option = 2;
    openChooseMenu();
}
function o1Input() {
    maxStop()
    if(optionone.value.trim() == '') {
        optiontwo.value = '';
    }
    else {
        count();
    }
}
