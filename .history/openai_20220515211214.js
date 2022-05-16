require('dotenv').config()
const OpenAI = require('openai-api');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);


(async()=>{
    const response = await openai.createCompletion("text-davinci-002", {
        prompt: "Say this is a test",
        max_tokens: 5,
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "logprobs": null,
        "stop": "\n"
      });
      
      console.log(response.data);
})();

