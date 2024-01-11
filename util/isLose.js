function isLose(ball) { 
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
  }
export default isLose
