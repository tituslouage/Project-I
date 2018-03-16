"use strict";

document.addEventListener('DOMContentLoaded', init);

let deckExpanded = false;

function init(){
    document.querySelector('button').addEventListener('click', currentDeckShow);
    document.querySelector('header a').addEventListener('click', crystalFilter);
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
    console.log('iets');
}

