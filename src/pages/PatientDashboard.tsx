
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Calendar, User, Phone, Mail, MapPin } from 'lucide-react';
import PatientRecord from '@/components/PatientRecord';

interface PatientDashboardProps {
  activeView?: 'dashboard' | 'medical-record';
  onViewChange?: (view: 'dashboard' | 'medical-record') => void;
}

const PatientDashboard: React.FC<PatientDashboardProps> = ({
  activeView = 'dashboard',
  onViewChange
}) => {
  const [currentView, setCurrentView] = useState(activeView);

  const handleViewChange = (view: 'dashboard' | 'medical-record') => {
    setCurrentView(view);
    onViewChange?.(view);
  };

  if (currentView === 'medical-record') {
    return <PatientRecord />;
  }

  return (
    <div className="min-h-screen bg-[#EAE4E1]">
      {/* Header Navigation */}
      <div className="bg-white border-b border-[#D9CAC2] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-[#4D3C2D]">
                Portal Bệnh nhân
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'outline'}
                onClick={() => handleViewChange('dashboard')}
                className={`${
                  currentView === 'dashboard'
                    ? 'bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white'
                    : 'border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]'
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Tổng quan
              </Button>
              
              <Button
                variant={currentView === 'medical-record' ? 'default' : 'outline'}
                onClick={() => handleViewChange('medical-record')}
                className={`${
                  currentView === 'medical-record'
                    ? 'bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white'
                    : 'border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]'
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Hồ sơ khám bệnh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <Card className="p-6 mb-6 bg-white border border-[#D9CAC2]">
            <div className="flex items-center space-x-4">
              <User className="w-12 h-12 p-2 bg-[#EAE4E1] rounded-full text-[#4D3C2D]" />
              <div>
                <h2 className="text-xl font-semibold text-[#4D3C2D]">
                  Chào mừng, Nguyễn Thị Hoa & Trần Văn Minh
                </h2>
                <p className="text-[#6b5a4a]">Mã bệnh nhân: BN001</p>
                <p className="text-sm text-[#6b5a4a]">
                  Lần khám gần nhất: 05/03/2024
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 bg-white border border-[#D9CAC2] hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-[#4D3C2D]" />
                <h3 className="text-lg font-semibold text-[#4D3C2D]">
                  Hồ sơ khám bệnh
                </h3>
              </div>
              <p className="text-sm text-[#6b5a4a] mb-4">
                Xem lịch sử khám bệnh và kết quả xét nghiệm
              </p>
              <Button
                onClick={() => handleViewChange('medical-record')}
                className="w-full bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white"
              >
                Xem hồ sơ
              </Button>
            </Card>

            <Card className="p-6 bg-white border border-[#D9CAC2] hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-8 h-8 text-[#4D3C2D]" />
                <h3 className="text-lg font-semibold text-[#4D3C2D]">
                  Lịch hẹn tiếp theo
                </h3>
              </div>
              <p className="text-sm text-[#6b5a4a] mb-4">
                12/03/2024 - 14:00<br />
                BS. Trần Văn Hùng
              </p>
              <Button
                variant="outline"
                className="w-full border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
              >
                Xem chi tiết
              </Button>
            </Card>

            <Card className="p-6 bg-white border border-[#D9CAC2] hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-8 h-8 text-[#4D3C2D]" />
                <h3 className="text-lg font-semibold text-[#4D3C2D]">
                  Liên hệ hỗ trợ
                </h3>
              </div>
              <p className="text-sm text-[#6b5a4a] mb-4">
                Cần hỗ trợ? Liên hệ với chúng tôi
              </p>
              <Button
                variant="outline"
                className="w-full border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
              >
                Liên hệ
              </Button>
            </Card>
          </div>

          {/* Patient Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border border-[#D9CAC2]">
              <h3 className="text-lg font-semibold text-[#4D3C2D] mb-4">
                Thông tin cá nhân
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-[#6b5a4a]" />
                  <div>
                    <p className="font-medium text-[#4D3C2D]">Họ và tên</p>
                    <p className="text-sm text-[#6b5a4a]">
                      Nguyễn Thị Hoa & Trần Văn Minh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#6b5a4a]" />
                  <div>
                    <p className="font-medium text-[#4D3C2D]">Email</p>
                    <p className="text-sm text-[#6b5a4a]">hoa.nguyen@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#6b5a4a]" />
                  <div>
                    <p className="font-medium text-[#4D3C2D]">Số điện thoại</p>
                    <p className="text-sm text-[#6b5a4a]">0901234567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#6b5a4a]" />
                  <div>
                    <p className="font-medium text-[#4D3C2D]">Địa chỉ</p>
                    <p className="text-sm text-[#6b5a4a]">Hà Nội</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#D9CAC2]">
              <h3 className="text-lg font-semibold text-[#4D3C2D] mb-4">
                Thông tin điều trị
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-[#4D3C2D]">Phương pháp điều trị</p>
                  <p className="text-sm text-[#6b5a4a]">IVF (Thụ tinh trong ống nghiệm)</p>
                </div>
                
                <div>
                  <p className="font-medium text-[#4D3C2D]">Giai đoạn hiện tại</p>
                  <p className="text-sm text-[#6b5a4a]">Hậu Can Thiệp</p>
                </div>
                
                <div>
                  <p className="font-medium text-[#4D3C2D]">Bác sĩ điều trị</p>
                  <p className="text-sm text-[#6b5a4a]">BS. Trần Văn Hùng</p>
                </div>
                
                <div>
                  <p className="font-medium text-[#4D3C2D]">Ngày bắt đầu điều trị</p>
                  <p className="text-sm text-[#6b5a4a]">15/01/2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
