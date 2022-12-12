nosex=0;
nosey=0;
diff=0;
right=0;
left=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    background('#808080');
    textSize(diff);
text('M', nosex,nosey);
fill(0, 102, 153);
document.getElementById("side").innerHTML="Width and hight of text is = "+diff+" px";

}
function modelLoaded(){
    console.log('PoseNet Is Initialized');

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        right=results[0].pose.rightWrist.x;
        left=results[0].pose.leftWrist.x;
        console.log("nosex = "+nosex+"nosey = "+nosey);
        diff=floor(left-right);
        console.log("left = "+left+"right = "+right+"diff = "+diff);



    }
}