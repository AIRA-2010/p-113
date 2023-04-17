function setup(){
    canvas = createCanvas(640,480);
    canvas.position(390,250);
    video = createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,120,100,400,280);
    fill(255,0,0);
    circle(60, 60, 100);
    fill(255,0,0);
    ellipse(580, 60, 100, 100);
    fill(255,0,0);
    ellipse(60, 420, 100, 100);
    fill(255,0,0);
    ellipse(580, 420, 100, 100);
    fill(0,255,0);
    rect(110, 30, 420, 55, 10);
    fill(0,255,0);
    rect(110, 390, 420, 55, 10);
    fill(0,255,0);
    rect(30, 110, 55, 260, 10);
    rect(555, 110, 55, 260, 10);
}

function take_snapshot(){
    save('myPhoto.png');
}