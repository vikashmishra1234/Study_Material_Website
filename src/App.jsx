import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyQuantum from "./components/Quantum/BuyQauntum";
import UploadForm from "./components/Quantum/UploadForm";
import { QueryClient, QueryClientProvider } from "react-query";

import LandingPage from "./components/Quantum/QuantumLanding";
import Collections from "./components/Quantum/Collections";
import Read from "./components/Quantum/Read";
import PrivacyPolicy from "./components/Quantum/policies/PrivacyPolicy";
import TermsAndConditions from "./components/Quantum/policies/TermsAndCondition";
import Navbar from "./components/Quantum/Navbar";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/buy" element={<BuyQuantum />} />
        <Route exact path="/form" element={<UploadForm />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/collections/read" element={<Read />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
