let valutes1 = 'USD';
let valutes2;
let valutes;
const buttons = document.querySelectorAll('.numberButton');
const optionone = document.getElementById('optionone');
const optiontwo = document.getElementById('optiontwo');
const removeCharBtn = document.getElementById('removeCharBtn');
const clearBtn = document.getElementById('clearBtn');
const plusMinus = document.getElementById('plusMinus');
const optionhone = document.getElementById('optionhone');
const optionhtwo = document.getElementById('optionhtwo');
const chooseTypeMenu = document.querySelector('.bgOfTypeMenu');
const point = document.getElementById('point');
const swap = document.querySelector('.reverseSvg');
let option = 1;
async function f() {
    let a = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    a = await a.json();
    a = a.Valute;
    let eKeys = Object.keys(a);
    for(let i=0; i< eKeys.length;i++) {
        let newDiv = window.document.createElement('div');
        newDiv.className = 'type';
        newDiv.innerText = a[eKeys[i]].Name;
        newDiv.id = eKeys[i];
        document.querySelector('.chooseTypeMenu').appendChild(newDiv);
    }
    const types = document.querySelectorAll('.type');
        for(let i = 0; i<types.length; i++) {
            types[i].addEventListener('click', function() {
                if(option==1) {
                    optionhone.innerText = `${types[i].textContent}`;
                    valutes1 = types[i].id;
                }
                else {
                    optionhtwo.innerText = `${types[i].textContent}`; 
                    valutes2 = types[i].id;   
                }    
                count();
                closeChooseMenu();                                                   
        })}
        valutes = a;
        count();
}
f();
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
function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.innerText = optionone.innerText;
    }
    else if(optionhone.innerText == 'Российский рубль') {
        let a = Number(optionone.innerText)/(Number(valutes[valutes2].Value)/Number(valutes[valutes2].Nominal));
        optiontwo.innerText = adaptiveFixed(a, 2);
    }
    else if(optionhtwo.innerText == 'Российский рубль') {
        let a = Number(optionone.innerText)*(Number(valutes[valutes1].Value)/Number(valutes[valutes1].Nominal));
        optiontwo.innerText = adaptiveFixed(a, 2);
    }
    else {
        let a = Number(optionone.innerText)*(Number(valutes[valutes1].Value)/Number(valutes[valutes1].Nominal))/(Number(valutes[valutes2].Value)/Number(valutes[valutes2].Nominal));
        optiontwo.innerText = adaptiveFixed(a, 2);
    }
}

//open choose type menu
function openChooseMenu() {
    chooseTypeMenu.style.display = 'flex';
    setTimeout(function() {
        chooseTypeMenu.style.opacity = '1';
    }, 0);
}
swap.onclick = function() {
    let swapHone = optionhone.innerText;
    let swapHtwo = optionhtwo.innerText;
    optionhone.innerText = swapHtwo;
    optionhtwo.innerText = swapHone;
    optionone.innerText = optiontwo.innerText; 
    [valutes1,valutes2] = [valutes2,valutes1]
    count();
}
function closeChooseMenu() {
  chooseTypeMenu.style.opacity = '0';
  setTimeout(function() {
    chooseTypeMenu.style.display = 'none';
  }, 300);
}
chooseTypeMenu.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(document.querySelector(".chooseTypeMenu"));
	if ( ! withinBoundaries ) {
		closeChooseMenu();
	}
})
//returning to main page
function tomainscreen() {
    window.location.href = 'index.html';
}
optionhone.addEventListener('click', function() {
    option = 1;
    openChooseMenu();
})
optionhtwo.addEventListener('click', function() {
    option = 2;
    openChooseMenu();
})
removeCharBtn.addEventListener('click', function() {
        if(optionone.innerText.length === 1) {
            optionone.innerText = '0';
        }
        else if(optionone.innerText.includes('-') && optionone.innerText.length === 2) {
            optionone.innerText = '0';
        }
        else {
            optionone.innerText = optionone.innerText.slice(0,-1);
        }
        count();
})
clearBtn.addEventListener('click', function() {
        optionone.innerText = '0';
        count();
})
plusMinus.addEventListener('click', function() {
    let tempString = optionone.innerText;
    tempString = tempString.split('');
    if(tempString[0] != '-') {
        tempString.unshift('-')
    }
    else {
        tempString[0] = '';
    }
    optionone.innerText = tempString.join('');
    count();
})
point.addEventListener('click', function() {
    if(optionone.innerText.includes('.') || optionone.innerText.length >= 15) {
    }
    else {
        optionone.innerText = optionone.innerText + '.';
    }
})
for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
            if(optionone.innerText === '0') {
                optionone.innerText = buttons[i].innerText;
            }
            else if(optionone.innerText.length >= 15) {

            }
            else if(optionone.innerText==="-0") {
                optionone.innerText = optionone.innerText.replace('0', buttons[i].innerText)
            }
            else {
                optionone.innerText = optionone.innerText + buttons[i].innerText; 
            }
            count();
    })} 