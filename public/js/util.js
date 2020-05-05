let insulinActivityLength = 12 // value never changes unless settings change


function valueDecay(insulinActivityLength) {
    let timeInSeconds = insulinActivityLength * 60
    let decrementTimeStep = (timeInSeconds / 100) * 1000
    let decrementStep = activeInsulin / 100

    decrementStep = activeInsulin / 100
    if (decrementStep < 0.0001) {
        console.log("Decrement Step:" + decrementStep)
        activeInsulin = activeInsulin - decrementStep
    }

    if (activeInsulin)
        setTimeout(valueDecay, decrementTimeStep)

    console.log("Active Insulin:" + activeInsulin)
}
valueDecay(insulinActivityLength)
