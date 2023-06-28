import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Skills } from "./views/Skills";
import { Services } from "./views/Services";
import { Qualification } from "./views/Qualification";
import { Testimonials } from "./views/Testimonials";
import { Contact } from "./views/Contact";

import { useDarkMode } from "./hooks/useDarkMode";

import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/themes";

export function App() {
  const { darkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header />

      <main className="app-main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  );
}
