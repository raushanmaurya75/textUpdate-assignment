const inputField = document.getElementById('userInput');
const updateButton = document.getElementById('updateBtn');
const displayParagraph = document.getElementById('displayText');

updateButton.onclick = function() {
    const textValue = inputField.value;
    
    if (textValue === "") {
        displayParagraph.innerText = "Please enter some text first!";
    } else {
        displayParagraph.innerText = textValue;
    }
};