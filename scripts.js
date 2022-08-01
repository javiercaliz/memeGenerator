

function addImage() {
    let image = document.getElementById('meme');
    image.src = document.getElementById('imageUrl').value;
    image.style.backgroundImage = "url('" + image.src + "')";
}

function generate() {
    addImage();
}

function addText() {

    let topText = document.getElementById('topText').value;
    let bottomText = document.getElementById('bottomText').value;
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');

    text1.innerHTML = topText;
    text2.innerHTML = bottomText;
}

function adjustTextSize(size, id) {
    document.getElementById(id).style.fontSize = size + "px";
}






