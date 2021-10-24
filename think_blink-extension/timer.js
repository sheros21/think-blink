
export default  function formatTimeLeft(time) {
    const TIME_LIMIT = 20;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;

    const minutes = Math.floor(time / 60);
    
    let seconds = time % 60;
    
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
}

