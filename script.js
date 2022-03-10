//setting global variables
const computersChoiceDisplay = document.querySelector('#computers-choice-img')
const yourChoiceDisplay = document.querySelector('#your-choice-img')
const messageDisplay = document.querySelector('#message')
const nextRoundButton = document.querySelector('#next-round-button')
const startGameButton = document.querySelector('#start-button')
const endGameButton = document.querySelector('#end-button')
const rockChoiceButton = document.querySelector('#rock')
const paperChoiceButton = document.querySelector('#paper')
const scissorChoiceButton = document.querySelector('#scissor')
const yourScoreDisplay = document.querySelector('#your-score')
const computerScoreDisplay = document.querySelector('#computer-score')
const yourNameDisplay = document.querySelector('#you')
const computersNameDisplay = document.querySelector('#computer')
let yourScore
let computerScore
let yourChoice
let computersChoice
let result

//setting functions
const setInitialParameters = () => {

    //making only start button visible and enabled
    nextRoundButton.style.opacity = 0
    startGameButton.style.opacity = 1    
    endGameButton.style.opacity = 0    
    nextRoundButton.disabled = true
    startGameButton.disabled = false
    endGameButton.disabled = true

    //making rock, paper and scissor buttons invisible
    rockChoiceButton.style.display = 'none'
    paperChoiceButton.style.display = 'none'
    scissorChoiceButton.style.display = 'none'

    //initializing displays
    yourChoiceDisplay.src = `img/your-initial-img.jpg`
    computersChoiceDisplay.src = `img/computer-initial-img.jpg`
    messageDisplay.innerHTML = null
    yourScoreDisplay.innerHTML = 0
    computerScoreDisplay.innerHTML = 0
    yourScore = 0
    computerScore = 0
    result = null
    messageDisplay.style.color = 'black'
    yourScoreDisplay.style.color = 'black'
    computerScoreDisplay.style.color ='black'
    yourNameDisplay.style.color = 'black'
    computersNameDisplay.style.color ='black'

}

const setInGameMode = () => {
    //making next-round, start and end buttons invisible
    nextRoundButton.style.display = 'none'
    startGameButton.style.display = 'none'
    endGameButton.style.display = 'none'
    
    //making rock, paper and scissor buttons visible
    rockChoiceButton.style.display = 'block'
    paperChoiceButton.style.display = 'block'
    scissorChoiceButton.style.display = 'block'

    messageDisplay.innerHTML = 'MAKE YOUR CHOICE'
    messageDisplay.style.color = 'black'
}

const setHoldMode = () => {
    rockChoiceButton.style.display = 'none'
    paperChoiceButton.style.display = 'none'
    scissorChoiceButton.style.display = 'none'
}

const setNextRoundMode = () => {
    nextRoundButton.style.display = 'block'
    startGameButton.style.display = 'block'
    endGameButton.style.display = 'block'
    nextRoundButton.style.opacity = 1
    startGameButton.style.opacity = 0
    endGameButton.style.opacity = 1
    nextRoundButton.disabled = false
    startGameButton.disabled = true
    endGameButton.disabled = false
}

const setYourChoice = (e) => {   
    yourChoice = e.target.id    
    yourChoiceDisplay.src = `img/${yourChoice}-big.PNG`    
} 

const setComputersChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1) {computersChoice = 'rock'}
    else if (randomNumber === 2) {computersChoice = 'paper'}
    else {computersChoice = 'scissor'}

    messageDisplay.innerHTML = 'HOLD...'
    computersChoiceDisplay.src = `img/loading1.png`        
    setTimeout( () => computersChoiceDisplay.src = `img/loading2.png`, 375)
    setTimeout( () => computersChoiceDisplay.src = `img/loading3.png`, 750)
    setTimeout( () => computersChoiceDisplay.src = `img/${computersChoice}-big.PNG`, 1500)

    return computersChoice
}

const setResult = () => {
    if (yourChoice === computersChoice) {
        result = "IT'S A DRAW!"
    } else if (yourChoice === 'rock' && computersChoice === 'scissor') {
        result = "YOU WON!"
        yourScore++
    } else if (yourChoice === 'rock' && computersChoice === 'paper') {
        result = "YOU LOST!"
        computerScore++
    } else if (yourChoice === 'paper' && computersChoice === 'rock') {
        result = "YOU WON!"
        yourScore++
    } else if (yourChoice === 'paper' && computersChoice === 'scissor') {
        result = "YOU LOST!"
        computerScore++
    } else if (yourChoice === 'scissor' && computersChoice === 'paper') {
        result = "YOU WON!"
        yourScore++
    } else if (yourChoice === 'scissor' && computersChoice === 'rock') {
        result = "YOU LOST!"
        computerScore++
    }    
}

const displayResult = () => {
    
    if (result === 'YOU WON!') {
        messageDisplay.style.color = 'green'
    } else if (result === 'YOU LOST!') {
        messageDisplay.style.color = 'red'
    }
    messageDisplay.innerHTML = result
    yourScoreDisplay.innerHTML = yourScore
    computerScoreDisplay.innerHTML = computerScore

    if (yourScoreDisplay.innerHTML < computerScoreDisplay.innerHTML) {
        yourScoreDisplay.style.color = 'red'
        computerScoreDisplay.style.color ='green'
        yourNameDisplay.style.color = 'red'
        computersNameDisplay.style.color ='green'
    } else if (yourScoreDisplay.innerHTML > computerScoreDisplay.innerHTML) {
        yourScoreDisplay.style.color = 'green'
        computerScoreDisplay.style.color ='red'
        yourNameDisplay.style.color = 'green'
    computersNameDisplay.style.color ='red'
    } else {
        yourScoreDisplay.style.color = 'black'
        computerScoreDisplay.style.color ='black'
        yourNameDisplay.style.color = 'black'
    computersNameDisplay.style.color ='black'
    }
}

const resetLastResult = () => {
    yourChoiceDisplay.src = `img/your-initial-img.jpg`
    computersChoiceDisplay.src = `img/computer-initial-img.jpg` 
    messageDisplay.innerHTML = 'MAKE YOUR CHOICE'
}


//game interactions
window.onload = setInitialParameters()

startGameButton.addEventListener('click', () => {
    setInGameMode()
})

nextRoundButton.addEventListener('click', () => {
    resetLastResult()
    setInGameMode()
})

endGameButton.addEventListener('click', () => {
    setInitialParameters()  
})

rockChoiceButton.addEventListener('click', (e) => {
    setHoldMode()
    setYourChoice(e)
    setComputersChoice()
    setResult()
    setTimeout(() => {
        displayResult()
        setNextRoundMode()
    }, 1500)
    
})

paperChoiceButton.addEventListener('click', (e) => {
    setHoldMode()
    setYourChoice(e)
    setComputersChoice()
    setResult()
    setTimeout(() => {
        displayResult()
        setNextRoundMode()
    }, 1500)
})

scissorChoiceButton.addEventListener('click', (e) => {
    setHoldMode()
    setYourChoice(e)
    setComputersChoice()
    setResult()
    setTimeout(() => {
        displayResult()
        setNextRoundMode()
    }, 1500)
})