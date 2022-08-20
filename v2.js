var roundScore, scores, activePlayer, playing;
function initGame(){
  roundScore = 0
  scores = [0,0]
  activePlayer = 0
  playing = true

  document.querySelector('.player--0').classList.add('player--active')
  document.querySelector('#name--0').textContent = 'PLAYER 1'
  document.querySelector('#name--1').textContent = 'PLAYER 2'
  document.querySelector('#score--0').textContent = '0'
  document.querySelector('#score--1').textContent = '0'
  document.querySelector('#current--0').textContent = '0'
  document.querySelector('#current--0').textContent = '0'
  document.querySelector('#dice1').style.display = 'none'
  document.querySelector('#dice2').style.display = 'none'
}initGame()

// rolling dice button
document.querySelector('#roll-button').addEventListener('click', function () {
  if (playing) {
    var dice1, dice2, diceDom1, diceDom2;
    dice1 = Math.floor(Math.random() * 6) + 1
    dice2 = Math.floor(Math.random() * 6) + 1

    diceDom1 = document.querySelector('#dice1')
    diceDom2 = document.querySelector('#dice2')

    diceDom1.src = 'dice-' + dice1 + '.png'
    diceDom2.src = 'dice-' + dice2 + '.png'

    diceDom1.style.display = 'block'
    diceDom2.style.display = 'block'

    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2
      document.querySelector('#current--' + activePlayer).textContent = roundScore
    } else nextPlayer()
  }
})

//next players turn function()
function nextPlayer () {
  roundScore = 0
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  document.querySelector('.player--0').classList.toggle('player--active')
  document.querySelector('.player--1').classList.toggle('player--active')
  document.querySelector('#current--0').textContent = '0'
  document.querySelector('#current--1').textContent = '0'
}

//hold button function()
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += roundScore
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]
    var input = document.querySelector('.inputv').value
    var winingScore;

    if (input) {
      winingScore = input
    } else winingScore = 100


    if (scores[activePlayer] >= winingScore) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner !'
      document.querySelector('#name--' + activePlayer).classList.add('winner')
      document.querySelector('#name--0').classList.remove('player--active')
      document.querySelector('#name--1').classList.remove('player--active')
      playing = false
    } else nextPlayer()

  }
})

//restart game newGame()
document.querySelector('.btn--new').addEventListener('click', initGame)
