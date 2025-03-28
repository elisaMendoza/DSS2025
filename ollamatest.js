import ollama from 'ollama'

const response = await ollama.generate({
  model: 'llama3.2',
  prompt: 'El siguiente string contiene código javascript? : "<script>alert("hola")</script>" response solo true o false. No expliques. Responder en una sola palabra (true,false)',
  options: {
    temperature: 0,
    max_tokens: 1
  }
})
console.log(response.message.content)