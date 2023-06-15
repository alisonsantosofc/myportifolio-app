import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Home } from "./views/Home";

import { useDarkMode } from "./hooks/useDarkMode";

import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";
import About from "./views/About";

export function App() {
  const { darkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header />

      <main className="app-main">
        <Home />
        <About />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  );
}
