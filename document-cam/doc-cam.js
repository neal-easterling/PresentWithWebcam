const constraints = {video: true, audio: true};

let camVideo, camButton;

function setWebCam(){
  console.log("cam triggered");
  camVideo.muted = true;
  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {

    // Changing the source of video to current stream.
    camVideo.srcObject = stream;
    camVideo.addEventListener("loadedmetadata", () => {
        camVideo.play();
    });
})
  .catch(alert); 
}

window.onload = (event)=>{

  camVideo = document.getElementById("cam");
  camButton = document.getElementById('cam-but');

  camButton.addEventListener('click',(e)=>{
    setWebCam();
    camButton.style.display='none';
  });


}





 
