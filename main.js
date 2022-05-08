circle(leftwristx,leftwristy,20);
    InNumberleftWristY = Number(leftwristy);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "volume = " +volume;
    song.setVolume(volume);
    


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
var song="";
function modelLoded(){
    console.log("model is loded");

}
function gotposes(results){
if(results.length>0){
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
}
}
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreLeftWrist=0;

