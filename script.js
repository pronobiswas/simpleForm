// ===========HTML ELEMNT========
// ===========HTML ELEMNT========
let myform = document.querySelector("form");
let nam = document.getElementById("names");
let phone = document.getElementById("phone");
let website = document.getElementById("website");
let mails = document.getElementById("mails");
let pass = document.getElementById("pass");
// ==========gender=======
let male = document.getElementById("male");
let female = document.getElementById("female");
let custom = document.getElementById("custom");
// ==========checkbox========
let ihtml = document.getElementById("ihtml");
let icss3 = document.getElementById("icss3");
let iscss = document.getElementById("iscss");
let ijs = document.getElementById("ijs");
let ilibrary = document.getElementById("ilibrary");
let iselectOption = document.querySelector("#interest");
let idate = document.querySelector("#idate");
let clr = document.querySelector("#clr");
let getReset = document.querySelector("#getReset");
let iDone = document.querySelector("#iDone");


// ===========HTML ELEMNT========
// ===========HTML ELEMNT========

// ============html element value=========
// ============html element value=========

// ============html element value=========
// ============html element value=========
iDone.addEventListener("click" , function(){

    // ============*********form validation*******=======
    // let namValue = nam.value;
    // if( namValue = " "){
    //     nam.value= "Set Your Name"
    //     nam.style.color = "red"
    // }else{
    //     console.log(namValue)
    // }
    // ===phone validation=====
    // if(phone.value = " " || pnone.value != isNaN(phone.value)){
    // phone.value = "00000"
    // phone.style.color = "red"
    // }
    // ============*********form validation*******=======

    // console.log( nam.value);
    // console.log(phone.value);
    // console.log(website.value);
    // console.log(mails.value);
    // console.log(pass.value);

    // *******======radio value=======*******
    // let radioOption = document.querySelectorAll("input[type=radio]");
    // let radioActive;
    // for (let i = 0; i < radioOption.length; i++){
    //     if(radioOption[i].checked){
    //         radioActive = radioOption[i].value;
    //     }
    // }
    // if(radioActive){
    //     console.log(radioActive);
    // }else{
    //     console.log("no option selected");
    // }
    // *******======radio value=======*******

    // =========*******checkbox********=========
    // let checkBoxOption = document.querySelectorAll("input[type=checkbox]");
    // let checkboxValue;
    // for (let i = 0; i < checkBoxOption.length; i++){
    //     if (checkBoxOption[i].checked){
    //         checkboxValue += " " + checkBoxOption[i].value;
    //     }
    // }
    // if (checkboxValue){
    //     console.log(checkboxValue);
    // }else{
    //     console.log("nothing selected");
    // }

    // console.log(checkBoxOption);
    // =========*******checkbox********=========
    
    // *******======selectOption Value=======*******
    // console.log(iselectOption.value);
    // *******======selectOption Value=======*******
    
    // *******======Fall in love Value=======*******
    console.log(idate.value);
    // *******======Fall in love Value=======*******

})
getReset.addEventListener("click", function(){
    myform.reset()
})