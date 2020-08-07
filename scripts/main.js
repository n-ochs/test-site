let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/athena.jpeg') {
        myImage.setAttribute('src','images/athena2.jpeg');
    } else {
        myImage.setAttribute('src','images/athena.jpeg');
    }
}