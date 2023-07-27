narizX = 0;
narizY = 0;


function preload(){
    nariz = loadImage('chefe.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, moldelLoaded);
    poseNet.on('pose', gotPoses) ;
    

}

function draw(){
    image(video, 0, 0, 300, 300);
    // fill(0,0,255);
    // stroke(0,255,255);
    // circle(narizX, narizY,20);
    image(nariz,narizX,narizY,30,30);
}

function takeSnapshot(){
    save('voceVirouUmHomen.png');
    
}

function moldelLoaded(){
    console.log('PoseNet foi inicializado');
}

function gotPoses(results
    ){
    if(results.length > 0){
        console.log(results);
        console.log("nariz x = " + results[0].pose.nose.x)
        console.log("nariz y = " + results[0].pose.nose.y)
        narizX = results[0].pose.nose.x - 15;
        narizY = results[0].pose.nose.y -5;
    }
}