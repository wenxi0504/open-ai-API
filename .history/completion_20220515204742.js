require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


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


