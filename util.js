let insulinActivityLength =120 // value never changes unless settings change

let timeInSeconds = insulinActivityLength * 60

let activeInsulin = 9.8 //added from totalDelivery



let decrementTimeStep = (timeInSeconds/100)*1000 


console.log(decrementTimeStep)
let decrementStep = activeInsulin/100

function valueDecay(){
    decrementStep = activeInsulin/100
    if(decrementStep < 0.0001){
    console.log("Decrement Step:" + decrementStep)
    activeInsulin = activeInsulin-decrementStep
    }

    if(activeInsulin )
    setTimeout(valueDecay,decrementTimeStep)

    console.log("Active Insulin:" + activeInsulin)
}
valueDecay()
