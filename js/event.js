console.log('This is separate JS file');

// directly set on the option

// option 2
// <button onclick="makeRed()">Make Red</button>  we will use this most
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


 // option 3 use some time
 const makeBlueButton = document.getElementById('make-blue');
 makeBlueButton.onclick = makeBlue;

 function makeBlue() {
     document.body.style.backgroundColor = 'blue';
 }

// purple
 const purpleButton = document.getElementById('make-purple');
 purpleButton.onclick =function makePurple(){
     document.body.style.backgroundColor = 'purple';
 }
//  pink
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// golden-rod this option we use most
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
  })