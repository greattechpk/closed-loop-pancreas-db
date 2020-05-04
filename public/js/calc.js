console.log("connected with calc.js")
//retrieve inputs for correction
const formBG = document.getElementById('formBG')
const formTCorrect = document.getElementById('formTCorrect')
const formFCorrect = document.getElementById('formFCorrect')
//retrieve passed data
const valCorrectSub = Number(document.getElementById('valCorrectSub').textContent)
const valCorrectDiv = Number(document.getElementById('valCorrectDiv').textContent)
const valActive = Number(document.getElementById('valActive').textContent)



formBG.addEventListener("keyup", ()=>{
    console.log(valActive)
    formTCorrect.value = (formBG.value - valCorrectSub) / valCorrectDiv
    formFCorrect.value = formTCorrect.value - valActive
    if(formTCorrect.value < 0){
        formTCorrect.value = 0
    }
    if(formFCorrect.value < 0){
        formFCorrect.value = 0
    }

})