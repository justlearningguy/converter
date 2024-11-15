const gradeField = document.getElementById('gradeField');
const weightField = document.getElementById('weightField');
const averageOutput = document.getElementById('averageOutput');
const pushBtn = document.getElementById('pushButton');
const clearBtn = document.getElementById('clearButton');
const chooseTypeMenu = document.querySelector('.chooseTypeMenu');
const chooseTypeMenuBg = document.querySelector('.bgOfTypeMenu');
let Grades = [];
let Weights = [];
if(JSON.parse(localStorage.getItem('gradesSave'))!=null) {
  Grades = JSON.parse(localStorage.getItem('gradesSave'));
  Weights = JSON.parse(localStorage.getItem('weightsSave'));
}

let sumOfgrades = 0;
let sumOfweights = 0;
gradeField.oninput = function() {
  if(gradeField.value.length > 2) {
    gradeField.value = gradeField.value.slice(0, -1);
}
}
weightField.oninput = function() {
  if(weightField.value.length > 2) {
    weightField.value = weightField.value.slice(0, -1);
}
}
function openChooseMenu() {
    chooseTypeMenuBg.style.display = 'flex';
    setTimeout(function() {
        chooseTypeMenuBg.style.opacity = '1';
    }, 0);
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
clearBtn.onclick = function() {
  Grades = [];
  Weights = [];
  sumOfgrades = 0;
  sumOfweights = 0;
  document.querySelector('.gradesListDiv').innerHTML = '';
  averageOutput.textContent = 0;
  window.localStorage.setItem('gradesSave', JSON.stringify(Grades))
  window.localStorage.setItem('weightsSave', JSON.stringify(Weights))
}
pushBtn.onclick = function() {
  if(gradeField.value!='') {
    Grades.push(Number(gradeField.value));
    if(weightField.value=='') {
      Weights.push(10);
      sumOfgrades+=Number(gradeField.value)*10;
      sumOfweights+=10;
    } else {
      Weights.push(Number(weightField.value));
      sumOfgrades+=Number(gradeField.value)*Number(weightField.value);
      sumOfweights+=Number(weightField.value);
    }
  
  
  averageOutput.textContent = (sumOfgrades/sumOfweights).toFixed(2);
  gradeField.value = '';
  weightField.value = '';
  let mainDiv = window.document.createElement('div');
  mainDiv.classList = 'gradeListElem';
  mainDiv.id = Grades.length-1;

  let divElemGrade = window.document.createElement('div');
  divElemGrade.classList = 'gradeListElemGrade';
  divElemGrade.textContent = Grades[Grades.length-1];

  let divElemWeight = window.document.createElement('div');
  divElemWeight.classList = 'gradeListElemWeight';
  divElemWeight.textContent = Weights[Weights.length-1];

  mainDiv.appendChild(divElemGrade);
  mainDiv.appendChild(divElemWeight);
  mainDiv.onclick = function() {
    const index = this.id;
    sumOfgrades-=Weights[index]*Grades[index];
    sumOfweights-=Weights[index];
    Grades.splice(this.id,1);
    Weights.splice(this.id,1);
    this.remove();
    for(let i=index;i<Grades.length;i++) {
      document.querySelector('.gradesListDiv').children[i].id = i;
    }
    if(sumOfweights>0) {
      averageOutput.textContent = (sumOfgrades/sumOfweights).toFixed(2);
    } else {
      averageOutput.textContent = 0;
    }
    window.localStorage.setItem('gradesSave', JSON.stringify(Grades))
    window.localStorage.setItem('weightsSave', JSON.stringify(Weights))
  }
  document.querySelector('.gradesListDiv').appendChild(mainDiv);
  gradeField.focus();
  window.localStorage.setItem('gradesSave', JSON.stringify(Grades))
  window.localStorage.setItem('weightsSave', JSON.stringify(Weights))
  }
}
function create(i) {
  sumOfgrades+=Number(Grades[i])*Weights[i];
  sumOfweights+=Weights[i];
  let mainDiv = window.document.createElement('div');
  mainDiv.classList = 'gradeListElem';
  mainDiv.id = i;

  let divElemGrade = window.document.createElement('div');
  divElemGrade.classList = 'gradeListElemGrade';
  divElemGrade.textContent = Grades[i];

  let divElemWeight = window.document.createElement('div');
  divElemWeight.classList = 'gradeListElemWeight';
  divElemWeight.textContent = Weights[i];

  mainDiv.appendChild(divElemGrade);
  mainDiv.appendChild(divElemWeight);
  mainDiv.onclick = function() {
    const index = this.id;
    sumOfgrades-=Weights[index]*Grades[index];
    sumOfweights-=Weights[index];
    Grades.splice(this.id,1);
    Weights.splice(this.id,1);
    this.remove();
    for(let i=index;i<Grades.length;i++) {
      document.querySelector('.gradesListDiv').children[i].id = i;
    }
    if(sumOfweights>0) {
      averageOutput.textContent = (sumOfgrades/sumOfweights).toFixed(2);
    } else {
      averageOutput.textContent = 0;
    }
  }
  document.querySelector('.gradesListDiv').appendChild(mainDiv);
}
document.querySelector('body').addEventListener('keydown', function(e) {
  if(e.key=='Enter') {
    pushBtn.click();
  }
  })

for(let i=0;i<Grades.length;i++) {
  create(i);
}
if(sumOfweights>0) {
  averageOutput.textContent = (sumOfgrades/sumOfweights).toFixed(2);
} else {
  averageOutput.textContent = 0;
}
gradeField.focus();

