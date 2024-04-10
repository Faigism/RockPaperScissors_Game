const startButton = document.getElementById('startId')
const input = document.getElementById('inputId')
const loginGame = document.querySelector('.login')
const playGame = document.querySelector('.play')
const yourName = document.querySelector('.youName')
const youImg = document.querySelector('.youImg')
const compImg = document.querySelector('.compImg')
const guessName1 = document.querySelector('.guessYou .guessName')
const guessName2 = document.querySelector('.guessComp .guessName')
const checkWinner1 = document.querySelector('.youWinner')
const checkWinner2 = document.querySelector('.compWinner')
const score1 = document.querySelector('.youScore span')
const score2 = document.querySelector('.compScore span')

let youScore = 0
let compScore = 0

startButton.addEventListener('click', () => {
  const allowedKeys = { r: 'Rock', p: 'Paper', s: 'Scissors' }
  const images = { r: './image/r.png', p: './image/p.png', s: './image/s.png' }

  if (!input.value) {
    alert('Please write your name')
    return
  }

  loginGame.classList.add('d-none')
  playGame.classList.remove('d-none')
  yourName.textContent = input.value

  document.addEventListener('keyup', (e) => {
    const userChoice = e.key.toLowerCase()
    if (!allowedKeys[userChoice]) {
      alert('Please enter a valid key')
      return
    }

    const compChoice =
      Object.keys(allowedKeys)[
        Math.floor(Math.random() * Object.keys(allowedKeys).length)
      ]
    youImg.src = images[userChoice]
    guessName1.textContent = allowedKeys[userChoice]
    compImg.src = images[compChoice]
    guessName2.textContent = allowedKeys[compChoice]

    if (userChoice === compChoice) {
      checkWinner1.textContent = checkWinner2.textContent = 'Draw'
      checkWinner1.style.color = checkWinner2.style.color = 'yellowgreen'
    } else if (
      (userChoice === 'r' && compChoice === 's') ||
      (userChoice === 'p' && compChoice === 'r') ||
      (userChoice === 's' && compChoice === 'p')
    ) {
      checkWinner1.textContent = 'Win'
      checkWinner1.style.color = 'green'
      checkWinner2.textContent = 'Lose'
      checkWinner2.style.color = 'red'
      score1.textContent = ++youScore
    } else {
      checkWinner1.textContent = 'Lose'
      checkWinner1.style.color = 'red'
      checkWinner2.textContent = 'Win'
      checkWinner2.style.color = 'green'
      score2.textContent = ++compScore
    }

    setTimeout(() => {
      if (youScore === 10 || compScore === 10) {
        alert(youScore === 10 ? 'You won!' : 'Computer won!')
        window.location.reload()
      }
    }, 100)
  })
})
