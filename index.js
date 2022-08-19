var roundScore, scores, activePlayer, playing;
function initGame(){
  roundScore = 0
  scores = [0,0]
  activePlayer = 0
  playing = true

  document.querySelector('#name--0').textContent = 'PLAYER 1'
  document.querySelector('#name--1').textContent = 'PLAYER 2'
  document.querySelector('#score--0').textContent = '0'
  document.querySelector('#score--1').textContent = '0'
  document.querySelector('#current--0').textContent = '0'
  document.querySelector('#current--0').textContent = '0'
  document.querySelector('.dice').style.display = 'none'
}initGame()

// rolling dice button
document.querySelector('#roll-button').addEventListener('click', function () {
  if (playing) {
    var dice, diceDom
    dice = Math.floor(Math.random() * 6) + 1
    diceDom = document.querySelector('.dice')
    diceDom.src = 'dice-' + dice + '.png'
    diceDom.style.display = 'block'

    if (dice !== 1) {
      roundScore += dice
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

    if (scores[activePlayer] >= 20) {
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
