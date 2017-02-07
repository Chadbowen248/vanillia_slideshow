
const slideShow = {
  isPlaying: true,
  pausePlayBtn: document.getElementById('pause'),
  currentSlide: 0,
  
  nextSlide() {
    const slides = document.querySelectorAll('#slides .slide');
    slides[this.currentSlide].className = 'slide';
    this.currentSlide = (this.currentSlide + 1)%slides.length;
    slides[this.currentSlide].className = 'slide showing';
  },
  startShow() {
    console.log('starting slideShow');
    setInterval(this.nextSlide.bind(this), 4000)
  },
  pause() {
    this.pausePlayBtn.innerHTML = 'Play';
    this.isPlaying = false;
  },
  play() {
    this.pausePlayBtn.innerHTML = 'Pause';
    this.isPlaying = true
  },
  handlePausePlay() {
    if(this.isPlaying){
      this.pause()
    } else {
      this.play()
    }
  }
}


slideShow.startShow();
