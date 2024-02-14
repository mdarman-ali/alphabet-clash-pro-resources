// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}