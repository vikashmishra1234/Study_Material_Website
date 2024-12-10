import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyQuantum from "./components/Quantum/BuyQauntum";
import UploadForm from "./components/Quantum/UploadForm";
import { QueryClient, QueryClientProvider } from "react-query";

import LandingPage from "./components/Quantum/QuantumLanding";
import Collections from "./components/Quantum/Collections";
import Read from "./components/Quantum/Read";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/buy" element={<BuyQuantum />} />
        <Route exact path="/form" element={<UploadForm />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/collections/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
