
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DoctorSidebar } from '@/components/DoctorSidebar';
import { DashboardContent } from '@/components/DashboardContent';
import { AppointmentsContent } from '@/components/AppointmentsContent';
import { PatientsContent } from '@/components/PatientsContent';

interface DoctorDashboardProps {
  activeTab: 'dashboard' | 'appointments' | 'patients';
  onTabChange: (tab: 'dashboard' | 'appointments' | 'patients') => void;
  onPatientSelect?: (patientId: string) => void;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ 
  activeTab, 
  onTabChange, 
  onPatientSelect 
}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return <AppointmentsContent onPatientSelect={onPatientSelect} />;
      case 'patients':
        return <PatientsContent onPatientSelect={onPatientSelect} />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DoctorSidebar activeTab={activeTab} onTabChange={onTabChange} />
        <main className="flex-1 p-6 bg-gray-50">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DoctorDashboard;
