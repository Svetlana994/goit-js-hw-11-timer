class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.intervalId = null;
    this.refs = {
  timerFace: document.querySelector(selector),
    };
    this.valueRefs = this.refs.timerFace.querySelectorAll('.value');
    this.targetDate = targetDate;
  }
  
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);

      this.updateClockFace(time);
      this.finishTimer(time)
    }, 1000)
  
  finishTimer(time) {
  if (time <= 0) {
    clearInterval(this.intervalId);
    this.refs.timerFace.textContent = `Конец`;
  }
  }
  
  updateClockFace(obj) {
    this.valueRefs.forEach(el => el.textContent = obj[el.dataset.value])
}
  
  pad(value) {
  return String(value).padStart(2, '0');
  }
  
  getTimeComponents(time) {
  
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs }
}
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('June 10, 2021'),
});