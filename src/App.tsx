import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Home } from "./views/Home";

import { DarkModeProvider, useDarkMode } from "./hooks/useDarkMode";

import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";
import { useEffect } from "react";

export function App() {
  const { darkMode } = useDarkMode();
  
  useEffect(() => {
    console.log(darkMode);
    
  }, [darkMode])
  

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header />

      <main>
        <Home />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  );
}
