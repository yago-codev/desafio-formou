import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
