let currDisplay = '';
document.querySelector('#calc-input').value = currDisplay;

function backspace(){
    currDisplay = currDisplay.slice(0,-1);
}