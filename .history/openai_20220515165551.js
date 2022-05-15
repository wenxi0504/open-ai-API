'user strict'
const userPrompt = document.getElementById('userPrompt').value;
const aiResponse = document.getElementById('aiResponse');
function userPromptSubmit() {
    aiResponse.textContent = userPrompt;
    
  }
  
  
  form.addEventListener('submit', userPromptSubmit);