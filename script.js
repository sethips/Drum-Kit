window.addEventListener('keydown',function(e){
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)return;
    else{
        audio.currentTime=0;
        audio.play();}
    console.log(audio);
});
