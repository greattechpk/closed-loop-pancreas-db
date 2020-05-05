console.log("connected with calc.js")

//Correction/////////////////////////////////////////////////////////////////////////////////////////////
//retrieve inputs for correction
const formBG = document.getElementById('formBG')
const formTCorrect = document.getElementById('formTCorrect')
const formFCorrect = document.getElementById('formFCorrect')
//retrieve passed data
const valCorrectSub = Number(document.getElementById('valCorrectSub').textContent)
const valCorrectDiv = Number(document.getElementById('valCorrectDiv').textContent)
const valActive = Number(document.getElementById('valActive').textContent)

const totalDelivery =document.getElementById('totalDelivery')




function calcEverything(){
    totalFoodDelivery.value = (totalCarbs.value / carbRatio).toFixed(1)
    totalDelivery.value = (Number(totalFoodDelivery.value) + Number(formFCorrect.value)).toFixed(1)
    console.log(formFCorrect.value)
}

formBG.addEventListener("keyup", ()=>{
    console.log(valActive)
    formTCorrect.value = ((formBG.value - valCorrectSub) / valCorrectDiv).toFixed(1)
    formFCorrect.value = (formTCorrect.value - valActive).toFixed(1)

    if(formTCorrect.value < 0){
        formTCorrect.value = 0
    }
    if(formFCorrect.value < 0){
        formFCorrect.value = 0
    }
    calcEverything()
})

// food Items and dropdown ///////////////////////////////////////////////////////////////////////////////////

//adding inputs for food dd

const foodItemsDD = document.getElementById("foodItemsDD")
const foodPop = document.getElementById("foodPop")
const addBtn = document.getElementById("addBtn")
let counter = 0

//insulin food calc//////////////////////////////////////////////////////////////////////////////////////////////////////
const totalCarbs = document.getElementById("totalCarbs")
totalCarbs.value = 0
console.log(totalCarbs)

addBtn.addEventListener("click", () =>{
    //pulling dropdown data list
    let foodItemStr = foodItemsDD[foodItemsDD.selectedIndex].textContent
    let foodItemVal = foodItemsDD[foodItemsDD.selectedIndex].value
    const quantity = Number(document.getElementById("quantity").value)
    //creating food item to list
    let foodItem = document.createElement("div")
    let foodItemID = `item${counter}`
    foodItem.setAttribute("id", foodItemID)
    foodItem.classList.add("foodItem")
    foodItem.value = foodItemVal * quantity
    foodItem.innerHTML = `${foodItemStr} * ${quantity} Total Carbs: ${foodItem.value}`
    let foodItemButton = document.createElement('a')
    foodItemButton.classList.add("btnify")
    foodItemButton.setAttribute("id", "minusBtn")
    foodItemButton.setAttribute("href", "#")
    foodItemButton.innerText = "-"
    foodItem.appendChild(foodItemButton)
    foodItem.addEventListener('click', (evt)=> {
        let itemButton = evt.target
        if(itemButton.innerText === "-"){
            itemButton.parentNode.parentNode.removeChild(itemButton.parentNode)
            totalCarbs.value = Number(totalCarbs.value) - Number(foodItem.value)
            calcEverything()
        }
    })
    totalCarbs.value = Number(totalCarbs.value) + Number(foodItem.value)
    calcEverything()
    foodPop.appendChild(foodItem)
    counter++
})


//food delivery calc via total carbs change///////////////////////////////////////////////////////////////////////////////////////////////

const totalFoodDelivery = document.getElementById('totalFoodDelivery')
const carbRatio = Number(document.getElementById('carbRatio').textContent)

console.log(carbRatio)


//functionality
function reset(){
    formBG.value = 0
    formTCorrect.value = 0
    formFCorrect.value = 0 
    totalCarbs.value = 0
    totalFoodDelivery.value = 0
    totalDelivery.value = 0
    document.getElementById("quantity").value = 0
    foodItemsDD.selectedIndex = 0    
}

reset()
