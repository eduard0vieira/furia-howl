import { useEffect, useState } from "react";
import Home from "./components/Home";
import furiaLogo from "./assets/furia-logo.png";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      {showSplash ? (
        <img
          src={furiaLogo}
          alt="FURIA Logo"
          className="w-48 animate-pulse"
        />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
