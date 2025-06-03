
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Stethoscope, UserCheck, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleNavigation: React.FC = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: 'Bác sĩ',
      description: 'Giao diện dành cho bác sĩ khám bệnh và quản lý bệnh nhân',
      icon: Stethoscope,
      path: '/doctor',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Lễ tân',
      description: 'Giao diện dành cho lễ tân quản lý lịch hẹn và kết quả xét nghiệm',
      icon: UserCheck,
      path: '/receptionist',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Bệnh nhân',
      description: 'Portal dành cho bệnh nhân xem thông tin và hồ sơ khám bệnh',
      icon: User,
      path: '/patient',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="p-6 bg-[#EAE4E1] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#4D3C2D] mb-4">
            Hệ thống Phòng khám Hiếm muộn
          </h1>
          <p className="text-lg text-[#6b5a4a]">
            Chọn vai trò của bạn để truy cập vào hệ thống
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card key={role.title} className="p-6 bg-white border border-[#D9CAC2] hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className={`w-16 h-16 ${role.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#4D3C2D] mb-3">
                  {role.title}
                </h3>
                <p className="text-sm text-[#6b5a4a] mb-6">
                  {role.description}
                </p>
                <Button
                  onClick={() => navigate(role.path)}
                  className={`w-full ${role.color} text-white`}
                >
                  Truy cập
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#6b5a4a]">
            Demo system - Chọn vai trò phù hợp để khám phá các tính năng
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleNavigation;
