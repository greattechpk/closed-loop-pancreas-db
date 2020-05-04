console.log("connected with calc.js")
//retrieve inputs for correction
const formBG = document.getElementById('formBG')
const formTCorrect = document.getElementById('formTCorrect')
//retrieve passed data
const valCorrectSub = Number(document.getElementById('valCorrectSub').textContent)
const valCorrectDiv = Number(document.getElementById('valCorrectDiv').textContent)
const valActive = Number(document.getElementById('valActive').textContent)

formBG.addEventListener("keyup", ()=>{
    console.log(valCorrectSub)
    formTCorrect.value = (formBG.value - valCorrectSub) / valCorrectDiv
})