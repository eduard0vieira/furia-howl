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
    <div className="min-h-screen w-screen flex items-start justify-center bg-black text-white overflow-y-auto">
      {showSplash ? (
        <div className="h-screen w-full flex items-center justify-center">
          <img
            src={furiaLogo}
            alt="FURIA Logo"
            className="w-48 animate-pulse"
          />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
