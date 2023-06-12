export default function Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimeOut, 
    resetControls,
    minutes
}) {


    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
    timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            
            updateDisplay(minutes, 0)

            if (minutes <= 0) {
                resetControls()
                return //quando uma função encontra um retorno ela simplesmente para de executar
            }

            if( seconds <= 0 ) {
                seconds = 3
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }
    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes
    }
}