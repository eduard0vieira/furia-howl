import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export const summarizeTweets = async (tweets) => {
  const tweetTexts = tweets.map(t => t.text).join("\n\n");

  const prompt = `Resuma os tweets abaixo destacando qualquer menção à FURIA e à sua equipe de CS:GO. Caso haja menções, analise também o sentimento dos torcedores (positivo, negativo ou neutro). Se não houver nenhuma menção à FURIA ou ao time de CS, apenas informe que não foram encontradas referências.\n\n${tweetTexts}`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Você é um assistente que analisa tweets sobre e-sports com foco na FURIA e CS:GO." },
        { role: "user", content: prompt },
      ],
      model: "gpt-4o-mini",
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erro ao resumir tweets: ", error.message);
    return error
  }
};
