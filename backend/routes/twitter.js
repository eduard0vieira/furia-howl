import express from "express";
import axios from "axios";
import { getBearerToken } from "../services/twitter.js";
import { summarizeTweets } from "../services/ai.js";

const router = express.Router();

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

router.get("/user/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const token = getBearerToken();

    const userRes = await axios.get(
      `https://api.twitter.com/2/users/by/username/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const userId = userRes.data.data.id;

    let tweetsRes;
    try {
      tweetsRes = await axios.get(
        `https://api.twitter.com/2/users/${userId}/tweets`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            "max_results": 5,
            "tweet.fields": "created_at,text",
          },
        }
      );
    } catch (err) {
      if (err.response?.status === 429) {
        const resetTime = err.response.headers['x-rate-limit-reset'];
        const now = Math.floor(Date.now() / 1000);
        const waitTime = (resetTime - now + 1) * 1000;

        console.warn(`Rate limit atingido. Aguarde ${waitTime / 1000} segundos...`);
        await wait(waitTime);

        tweetsRes = await axios.get(
          `https://api.twitter.com/2/users/${userId}/tweets`,
          {
            headers: { Authorization: `Bearer ${token}` },
            params: {
              "max_results": 5,
              "tweet.fields": "created_at,text",
            },
          }
        );
      } else {
        throw err;
      }
    }

    const summary = await summarizeTweets(tweetsRes.data.data);

    res.json({ tweets: tweetsRes.data.data, summary });
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({ error: "O Usuário solicitado não foi encontrado." });
    }

    console.error("Erro na rota /user/:username:", err.response?.data || err.message);
    res.status(500).json({ error: "Erro ao buscar tweets" });
  }
});

export default router;
