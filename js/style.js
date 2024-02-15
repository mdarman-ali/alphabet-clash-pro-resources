// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('Player Pressed',playerPressed);
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement);
    const currentAlphabet = currentAlphabetElement.innerHTML;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // Check matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point!');
        // console.log('you have pressed correctly',expectedAlphabet);
        
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed. you lost a life');
    }
    

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet',alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}