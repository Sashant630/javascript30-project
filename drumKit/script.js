function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        // console.log(audio);
        if(!audio) return   // stop the function
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing');
}


function removeTransition(e){
    // console.log(e)
    if(e.propertyName !== 'transform') return
    // console.log(this); here 'this' refers to the corresponding key pressed
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)