let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/athena.jpg') {
        myImage.setAttribute('src','images/athena2.jpg');
    } else {
        myImage.setAttribute('src','images/athena.jpg');
    }
}