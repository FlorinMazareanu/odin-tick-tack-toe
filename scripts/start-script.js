//this script is for the initial setup of the game
//like selecting either X or 0
//or selecting human vs human or computer vs computer

//had to do document.addEventlistener because
//the elements would be "null" if the page is not yet loaded
//this script is at the start of the <body> tag, that's why

document.addEventListener('DOMContentLoaded', function () {

    //default selection is x
    localStorage.setItem("xoSelection", "x");

    //default selection is human
    localStorage.setItem("playVs", "human");
    
    //defining xo and human/computer buttons as variables
    let selectXElem = document.getElementById("select-x");
    let selectYElem = document.getElementById("select-y");
    let selectHElem = document.getElementById("select-human");
    let selectCElem = document.getElementById("select-computer");

    //function to select X or 0
    function selectXO(e) {
        //setting localstorage key "selection" to either x or y
        localStorage.setItem("xoSelection", e.target.id[e.target.id.length - 1]);
    }

    //function to select to play vs human or vs computer
    const selectPlayAs = function(e) {
        console.log("selecting play vs");
        console.log(e.target.id);
        if (e.target.id == "select-human") {
            localStorage.setItem("playVs", "human");
        }
        else {
            localStorage.setItem("playVs", "computer");
        }
        //localStorage.setItem("playVS")
    }

    selectXElem.addEventListener("pointerdown", selectXO);
    selectYElem.addEventListener("pointerdown", selectXO);
    selectHElem.addEventListener("pointerdown", selectPlayAs);
    selectCElem.addEventListener("pointerdown", selectPlayAs);


    //localStorage.setItem(0, testVar);
    

  }, false);





