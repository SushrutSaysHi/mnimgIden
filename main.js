Webcam.set({
     width: 400,
     height:350,
     img_format: 'png',
     png_quality: 90,

     constraints:{
          facingMode: "environment"
     }

});

Webcam.attach("#webcam");

function  capture(){
     Webcam.snap(function(data_uri){
          document.getElementById("Snapshot").innerHTML = '<img id="snap_img" src = "' + data_uri + '">';
     });
}

console.log("ml5 version", ml5.version);

var classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
     console.log("Model is loaded");
}

function identify_img() {
     var img = document.getElementById("snap_img");
     classifier.classify(img, gotResult);
}

function gotResult(error, results) {
     if(error){
          console.error("there has been an error " + error);
     }else{
          console.log(results);
          document.getElementById("obj_name").innerHTML = results[0].label;
     }
}


