const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {  /*escolha que o usuário fez (pedra, papel ou tesoura)*/

    playTheGame(humanChoice, playMachine())

}



const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']  /*choices é o array*/
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {


    console.log('Humano:  ' + human + " Maquina: " + machine)

    if (human === machine) {

        result.innerHTML = "Deu empate! 	&#128530;"

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou! 	&#128515;"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu! 	&#128557; "

    }

}



