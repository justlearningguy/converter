const buttons = document.querySelectorAll('.numberButton');
const types = document.querySelectorAll('.type');
const optionone = document.getElementById('optionone');
const optiontwo = document.getElementById('optiontwo');
const removeCharBtn = document.getElementById('removeCharBtn');
const clearBtn = document.getElementById('clearBtn');
const optionhone = document.getElementById('optionhone');
const optionhtwo = document.getElementById('optionhtwo');
const chooseTypeMenu = document.querySelector('.bgOfTypeMenu');
const point = document.getElementById('point');
const swap = document.querySelector('.reverseSvg');
let option = 1;

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
    let swapValueOne = optiontwo.innerText;
    optionhone.innerText = swapHtwo;
    optionhtwo.innerText = swapHone;
    optionone.innerText = swapValueOne;
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
for(let i = 0; i<types.length; i++) {
    types[i].addEventListener('click', function() {
        if(option==1) {
            optionhone.innerText = `${types[i].textContent}`;
        }
        else {
            optionhtwo.innerText = `${types[i].textContent}`;    
        }    
        count();
        closeChooseMenu();                                                   
})}
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
        else {
            optionone.innerText = optionone.innerText.slice(0,-1);
        }
        count();
})
clearBtn.addEventListener('click', function() {
        optionone.innerText = '0';
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
            else {
                optionone.innerText = optionone.innerText + buttons[i].innerText; 
            }
            count();
    })} 