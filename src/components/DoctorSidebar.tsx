
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
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-primary">Phòng khám Hiếm muộn</h2>
          <p className="text-sm text-muted-foreground">Hệ thống quản lý bệnh nhân</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => onTabChange(item.key)}
                    isActive={activeTab === item.key}
                    className="w-full justify-start"
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

      <SidebarFooter className="p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};
