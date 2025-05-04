import { useState } from "react";
import axios from "axios";

interface Tweet {
  id: string;
  text: string;
  created_at: string;
}

const Home = () => {
  const [username, setUsername] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const endpoint =
        username.toLowerCase() === "teste"
          ? `https://furia-howl-production.up.railway.app/api/twitter/mock/${username}`
          : `https://furia-howl-production.up.railway.app/api/twitter/user/${username}`;
      // ? `furia-howl-production.up.railway.app/api/twitter/mock/${username}`
      // : `furia-howl-production.up.railway.app/api/twitter/user/${username}`;

      const res = await axios.get(endpoint);
      setTweets(res.data.tweets);
      setSummary(res.data.summary);
    } catch (err) {
      console.error("Erro ao pegar tweets", err);
      alert("Erro ao buscar dados, API do twitter fora ou Rate Limiting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full max-w-2xl relative pb-10">
      <h1 className="text-4xl font-bold mb-4 justify-center">FURIA Howl - Tweet Analyser</h1>
      <h1 className="text-2xl font-bold mb-4">Resumo de Tweets</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Digite o username sem @ (utilize teste para ver os dados mockados)"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-white hover:bg-gray-300 text-black px-4 py-2 rounded cursor-pointer"
          onClick={fetchData}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Buscar"}
        </button>
      </div>

      <h1 className="font-semibold bg-yellow-100 text-yellow-600 border-l-4 border-yellow-500 p-4 rounded-md mb-6">
        Atualmente utilizamos a API oficial do Twitter, que possui diversas limitações no plano gratuito.
        Isso poderá ser melhorado em versões futuras do projeto.
        Recomendamos utilizar o usuário <strong>teste</strong> para testar o funcionamento do aplicativo — os dados retornados são mockados, criados apenas para fins de demonstração.
        Alternativamente, é possível aguardar o fim do <em>rate limit</em> da API do Twitter.
      </h1>


      {summary && (
        <div className="mb-6 bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Análise gerada:</h2>
          <p>{summary}</p>
        </div>
      )}

      {tweets.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2">Tweets do usuário:</h2>
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="bg-gray-800 p-4 rounded shadow text-sm"
            >
              <p className="mb-2">{tweet.text}</p>
              <span className="text-gray-400 text-xs">
                {new Date(tweet.created_at).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
