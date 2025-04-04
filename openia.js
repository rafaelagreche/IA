require('dotenv').config();
const prompt = require('prompt-sync')()

const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: "escreva aqui a sua chave:  " });

async function getOpenAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar OpenAI API:', error.response?.data || error.message);
    }
}

const resposta =  prompt ("Me pergunte alguma coisa:  ")

getOpenAIResponse(resposta)
