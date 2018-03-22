"use strict";

document.addEventListener('DOMContentLoaded', init);

let deckExpanded = false;

function init(){
    document.querySelector('button').addEventListener('click', currentDeckShow);

    let radioInputs = document.querySelectorAll('header input[type=radio]');
    for (let i = 0; i < radioInputs.length; i++){
        radioInputs[i].addEventListener('change', crystalFilter)
    }
}

function currentDeckShow(e){
    e.preventDefault();
    if (deckExpanded){
        document.querySelector('footer').style.height = '10px';
        deckExpanded = false;
    }
    else {
        document.querySelector('footer').style.height = 'auto';
        deckExpanded = true;
    }
}

function crystalFilter(e){
    e.preventDefault();
    let labelName = '#l';
    labelName += this.id;
    document.querySelector(labelName).className = 'manaselected';
}