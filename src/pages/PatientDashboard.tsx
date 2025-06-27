
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Calendar, User, Phone, Mail, MapPin, Home } from 'lucide-react';
import PatientRecord from '@/components/PatientRecord';
import { Link } from 'react-router-dom';

type ViewType = 'dashboard' | 'medical-record';

const PatientDashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  if (currentView === 'medical-record') {
    return <PatientRecord onBackToDashboard={() => handleViewChange('dashboard')} />;
  }

  return (
    <div className="min-h-screen theme-gradient-bg">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#4D3C2D' }}>
                Portal Bệnh nhân
              </h1>
              <p className="text-sm text-gray-500">Chào mừng, Nguyễn Thị A</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Trang chủ
                </Button>
              </Link>
              
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'outline'}
                onClick={() => handleViewChange('dashboard')}
                className="theme-primary-bg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              
              <Button
                variant={currentView === 'medical-record' ? 'default' : 'outline'}
                onClick={() => handleViewChange('medical-record')}
                className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
              >
                <FileText className="w-4 h-4 mr-2" />
                Hồ sơ y tế
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Info Card */}
          <Card className="lg:col-span-2 p-6 theme-card">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 mr-3" style={{ color: '#4D3C2D' }} />
              <h2 className="text-xl font-semibold" style={{ color: '#4D3C2D' }}>
                Thông tin cá nhân
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Họ và tên</label>
                  <p className="text-lg font-medium" style={{ color: '#4D3C2D' }}>Nguyễn Thị A</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Ngày sinh</label>
                  <p className="text-lg" style={{ color: '#4D3C2D' }}>15/03/1985</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Giới tính</label>
                  <p className="text-lg" style={{ color: '#4D3C2D' }}>Nữ</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" style={{ color: '#D9CAC2' }} />
                  <span className="text-lg" style={{ color: '#4D3C2D' }}>0912 345 678</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" style={{ color: '#D9CAC2' }} />
                  <span className="text-lg" style={{ color: '#4D3C2D' }}>nguyenthia@email.com</span>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" style={{ color: '#D9CAC2' }} />
                  <span className="text-lg" style={{ color: '#4D3C2D' }}>
                    123 Đường ABC, Quận 1, TP.HCM
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 theme-card">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#4D3C2D' }}>
              Thao tác nhanh
            </h3>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
                onClick={() => handleViewChange('medical-record')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Xem hồ sơ y tế
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Đặt lịch hẹn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
