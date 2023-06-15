import { ThemeProvider } from "styled-components";

// import { useDarkMode } from "./hooks/useDarkMode";

import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";
import { Header } from "./components/Header";
import { Home } from "./views/Home";

export function App() {
  // const { darkMode } = useDarkMode();

  const darkMode = false;

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
