
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ReceptionistSidebar } from '@/components/ReceptionistSidebar';
import ReceptionistTestResults from '@/components/ReceptionistTestResults';

interface ReceptionistDashboardProps {
  activeTab: 'dashboard' | 'appointments' | 'patients' | 'test-results';
  onTabChange: (tab: 'dashboard' | 'appointments' | 'patients' | 'test-results') => void;
}

const ReceptionistDashboard: React.FC<ReceptionistDashboardProps> = ({ 
  activeTab, 
  onTabChange
}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'test-results':
        return <ReceptionistTestResults />;
      case 'appointments':
        return (
          <div className="p-6 bg-[#EAE4E1] min-h-screen">
            <h1 className="text-2xl font-bold text-[#4D3C2D]">Quản lý lịch hẹn</h1>
          </div>
        );
      case 'patients':
        return (
          <div className="p-6 bg-[#EAE4E1] min-h-screen">
            <h1 className="text-2xl font-bold text-[#4D3C2D]">Quản lý bệnh nhân</h1>
          </div>
        );
      default:
        return (
          <div className="p-6 bg-[#EAE4E1] min-h-screen">
            <h1 className="text-2xl font-bold text-[#4D3C2D]">Dashboard Lễ tân</h1>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#EAE4E1]">
        <ReceptionistSidebar activeTab={activeTab} onTabChange={onTabChange} />
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ReceptionistDashboard;
