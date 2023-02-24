//test to see if start-script.js is running
console.log("start-script is running...");

//text exports
let testImportExport = "test import export";
export { testImportExport };

//this script is for the initial setup of the game
//like selecting either X or 0
//or selecting human vs human or computer vs computer

//had to do document.addEventlistener because
//the elements would be "null" if the page is not yet loaded
//this script is at the start of the <body> tag, that's why

document.addEventListener('DOMContentLoaded', function () {

    //default selection is n
    localStorage.setItem("xoSelection", "n");

    //default selection is human
    localStorage.setItem("playVs", "none");

    //selections starts at 0. when at 2, main-script.js runs
    //this is to make sure the game starts afer
    //the player selects x/0 and vs human/computer
    let selections = 0;

    //here I'm creating a <script> element that will load
    //when selections == 2
    function runMainScript() {
        let mainScript = document.createElement("script");
        mainScript.setAttribute("src", "scripts/main-script.js");
        document.body.appendChild(mainScript);
    }
    
    //defining xo and human/computer buttons as variables
    let selectXElem = document.getElementById("select-x");
    let selectYElem = document.getElementById("select-y");
    let selectHElem = document.getElementById("select-human");
    let selectCElem = document.getElementById("select-computer");

    //function to select X or 0
    function selectXO(e) {
        //setting localstorage key "selection" to either x or y
        localStorage.setItem("xoSelection", e.target.id[e.target.id.length - 1]);
        selections++;
        console.log(selections);
        selectXElem.removeEventListener("pointerdown", selectXO);
        selectYElem.removeEventListener("pointerdown", selectXO);
        if (selections == 2) {
            runMainScript();
        }
    }

    //function to select to play vs human or vs computer
    const selectPlayAs = function(e) {
        //console.log("selecting play vs");
        //console.log(e.target.id);
        if (e.target.id == "select-human") {
            localStorage.setItem("playVs", "human");
        }
        else {
            localStorage.setItem("playVs", "computer");
        }
        //localStorage.setItem("playVS")
        selections++;
        console.log(selections);
        selectHElem.removeEventListener("pointerdown", selectPlayAs);
        selectCElem.removeEventListener("pointerdown", selectPlayAs);
        if (selections == 2) {
            runMainScript();
        }
    }

    selectXElem.addEventListener("pointerdown", selectXO);
    selectYElem.addEventListener("pointerdown", selectXO);
    selectHElem.addEventListener("pointerdown", selectPlayAs);
    selectCElem.addEventListener("pointerdown", selectPlayAs);

    /*
    //a promise that X/O and human/computer will be selected
    const promiseXoHc = new Promise((resolve, reject) => {
        if (
        (localStorage.getItem("xoSelection") == "x" || localStorage.getItem("xoSelection") == "y") 
        && 
        (localStorage.getItem("playVs") == "human" || localStorage.getItem("playVs") == "computer")
        ) {
        resolve("selections were made");
        }   
    });

    promiseXoHc.then((success) => {
        console.log(success);
    });

    //a promise test
    
    const testPromise = new Promise((resolve, reject) => {
        if (1 < 2) {
            resolve("1 < 2 indeed");
        }
    });

    testPromise.then((success) => {
        console.log("success!");
        console.log(success);
    });
    */

  }, false);





