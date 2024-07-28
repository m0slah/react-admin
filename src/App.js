import { useState } from "react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useState();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
