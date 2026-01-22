
"use client";

import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Header from './Header';
import Footer from './Footer';

// Define the props interface with an optional children property to satisfy TypeScript 
// when the component is used in Server Components where props inference might be strict
// or when the component call is perceived as having an empty props object.
interface ClientProvidersProps {
  children?: React.ReactNode;
}

/**
 * This component acts as the boundary for client-side state and interactivity.
 * By keeping this separate, we allow the root layout and page files to remains
 * pure Server Components.
 */
export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
