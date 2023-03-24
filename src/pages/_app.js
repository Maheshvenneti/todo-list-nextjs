import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect, createContext, useState } from "react";

export const store = createContext();

function MyApp({ Component, pageProps }) {

  const [ID, setID] = useState();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <store.Provider value={[ID, setID]}>
    <Component {...pageProps} />;
    </store.Provider>
  )

  
}

export default MyApp;