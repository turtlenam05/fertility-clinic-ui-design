
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { BarChart3, Calendar, Users, LogOut } from 'lucide-react';

interface DoctorSidebarProps {
  activeTab: 'dashboard' | 'appointments' | 'patients';
  onTabChange: (tab: 'dashboard' | 'appointments' | 'patients') => void;
}

const menuItems = [
  {
    title: 'Dashboard',
    icon: BarChart3,
    key: 'dashboard' as const,
  },
  {
    title: 'Appointments',
    icon: Calendar,
    key: 'appointments' as const,
  },
  {
    title: 'Patients',
    icon: Users,
    key: 'patients' as const,
  },
];

export const DoctorSidebar: React.FC<DoctorSidebarProps> = ({ activeTab, onTabChange }) => {
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  return (
    <Sidebar className="w-64 border-r theme-primary-bg">
      <SidebarHeader className="p-6 border-b border-[#4a3639]">
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-white">Phòng khám Hiếm muộn</h2>
          <p className="text-sm text-[#e6dfdc]">Hệ thống quản lý bệnh nhân</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-[#61474C]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => onTabChange(item.key)}
                    isActive={activeTab === item.key}
                    className={`w-full justify-start text-white hover:bg-[#4a3639] transition-colors ${
                      activeTab === item.key 
                        ? 'bg-[#9e8e7b] text-[#61474C] hover:bg-[#8c7f6d]' 
                        : 'hover:text-[#e6dfdc]'
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-[#61474C] border-t border-[#4a3639]">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-[#e6dfdc] hover:text-white hover:bg-[#4a3639]"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
