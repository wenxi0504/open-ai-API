"user strict";

function userPromptSubmit() {
  const userPrompt = document.getElementById("userPrompt").value;
  const aiResponse = document.getElementById("aiResponse");
  alert(userPrompt);
  aiResponse.textContent= userPrompt;
}
