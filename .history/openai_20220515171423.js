'user strict'
const userPrompt = document.getElementById('userPrompt').value;
const aiResponse = document.getElementById('aiResponse');
function userPromptSubmit() {
    console.log(userPrompt);
    alert(userPrompt);
    aiResponse.textContent = userPrompt;
    
  }
  