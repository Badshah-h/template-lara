import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  // Create a separate component for Tempo routes to ensure they're used within Router context
  const TempoRoutes = () => {
    return import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;
  };

  return (
    <ThemeProvider defaultTheme="light">
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add a route for tempobook to prevent catchall issues */}
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" element={null} />
            )}
          </Routes>
          <TempoRoutes />
        </>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
