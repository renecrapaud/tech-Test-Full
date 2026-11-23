import { createContext, useContext, useEffect, useState } from "react";

const ConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/config.json", { cache: "no-store" })
      .then((res) => res.json())
      .then(setConfig);
  }, []);

  if (!config) return null;

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
