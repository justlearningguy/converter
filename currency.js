function count() {
    if(optionhone.innerText == optionhtwo.innerText) {
        optiontwo.value = optionone.value;
    }
    else if(optionhone.innerText == 'Российский рубль') {
        let a = Number(optionone.value)/(Number(valutes[valutes2].Value)/Number(valutes[valutes2].Nominal));
        optiontwo.value = adaptiveFixed(a, 2);
    }
    else if(optionhtwo.innerText == 'Российский рубль') {
        let a = Number(optionone.value)*(Number(valutes[valutes1].Value)/Number(valutes[valutes1].Nominal));
        optiontwo.value = adaptiveFixed(a, 2);
    }
    else {
        let a = Number(optionone.value)*(Number(valutes[valutes1].Value)/Number(valutes[valutes1].Nominal))/(Number(valutes[valutes2].Value)/Number(valutes[valutes2].Nominal));
        optiontwo.value = adaptiveFixed(a, 2);
    }
}