function handleLose(ball,playerScoreElem,computerScoreElem,computerPaddle) {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
      playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
      computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()
  }
  export default handleLose