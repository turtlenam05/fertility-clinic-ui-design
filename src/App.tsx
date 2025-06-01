
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import DoctorDashboard from "./pages/DoctorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'appointments' | 'patients'>('dashboard');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [showPatientRecord, setShowPatientRecord] = useState(false);

  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
    setShowPatientRecord(true);
  };

  const handleBackToDashboard = () => {
    setShowPatientRecord(false);
    setSelectedPatientId(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/doctor" 
              element={
                showPatientRecord ? (
                  <Index onBackToDashboard={handleBackToDashboard} />
                ) : (
                  <DoctorDashboard 
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onPatientSelect={handlePatientSelect}
                  />
                )
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
