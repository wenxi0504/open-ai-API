'user strict'
const userPrompt = document.getElementById('userPrompt').value;
const aiResponse = document.getElementById('aiResponse');
function userPromptSubmit() {
    alert("success");
    aiResponse.textContent = userPrompt;
    
  }
  