//

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yCzIBy8Ty/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
        console.log("there has been an error. your code failed. please fix");
    } else {
        console.log("Hello user. my amazing code has not failed. yay i am amazing!");
    }
}