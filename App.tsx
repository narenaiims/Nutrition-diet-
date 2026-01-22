
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Home from './app/page';
import Layout from './app/layout';

// Note: In a real Next.js environment, app/layout.tsx and app/page.tsx would be handled by the framework.
// For the SPA preview environment, we use this App component as the main router/container.

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 selection:bg-blue-100 flex flex-col">
        {/* We simulate the layout here for the preview */}
        {/* If the user is on the root path, show Home */}
        <Home />
      </div>
    </LanguageProvider>
  );
};

export default App;
