
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
      <SidebarHeader className="p-6 border-b border-[#6B2A43]">
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-white">Phòng khám Hiếm muộn</h2>
          <p className="text-sm text-[#E8B9BB]">Hệ thống quản lý bệnh nhân</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-[#853655]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => onTabChange(item.key)}
                    isActive={activeTab === item.key}
                    className={`w-full justify-start text-white hover:bg-[#6B2A43] transition-colors ${
                      activeTab === item.key 
                        ? 'bg-[#E8B9BB] text-[#853655] hover:bg-[#DCA5A7]' 
                        : 'hover:text-[#E8B9BB]'
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

      <SidebarFooter className="p-4 bg-[#853655] border-t border-[#6B2A43]">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-[#E8B9BB] hover:text-white hover:bg-[#6B2A43]"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
