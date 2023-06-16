import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Home } from "./views/Home";

import { useDarkMode } from "./hooks/useDarkMode";

import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";
import About from "./views/About";
import Skills from "./views/Skills";

export function App() {
  const { darkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header />

      <main className="app-main">
        <Home />
        <About />
        <Skills />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  );
}
