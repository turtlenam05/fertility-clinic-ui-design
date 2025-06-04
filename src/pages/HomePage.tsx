
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Stethoscope, Users, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-[#4D3C2D] mr-3" />
            <h1 className="text-4xl font-bold text-[#4D3C2D]">
              Phòng khám Hiếm Muộn
            </h1>
          </div>
          <p className="text-xl text-[#6b5a4a] max-w-2xl mx-auto">
            Hệ thống quản lý và chăm sóc bệnh nhân chuyên khoa hiếm muộn
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Doctor Portal */}
          <Card className="p-8 bg-white border border-[#D9CAC2] hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EAE4E1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-[#4D3C2D]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#4D3C2D] mb-4">
                Portal Bác sĩ
              </h2>
              <p className="text-[#6b5a4a] mb-6">
                Quản lý bệnh nhân, lịch hẹn và hồ sơ khám bệnh
              </p>
              <Link to="/doctor">
                <Button className="w-full bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white py-3 text-lg">
                  Truy cập
                </Button>
              </Link>
            </div>
          </Card>

          {/* Receptionist Portal */}
          <Card className="p-8 bg-white border border-[#D9CAC2] hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EAE4E1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#4D3C2D]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#4D3C2D] mb-4">
                Portal Lễ tân
              </h2>
              <p className="text-[#6b5a4a] mb-6">
                Quản lý lịch hẹn, bệnh nhân và kết quả xét nghiệm
              </p>
              <Link to="/receptionist">
                <Button className="w-full bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white py-3 text-lg">
                  Truy cập
                </Button>
              </Link>
            </div>
          </Card>

          {/* Patient Portal */}
          <Card className="p-8 bg-white border border-[#D9CAC2] hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EAE4E1] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-[#4D3C2D]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#4D3C2D] mb-4">
                Portal Bệnh nhân
              </h2>
              <p className="text-[#6b5a4a] mb-6">
                Xem hồ sơ khám bệnh, lịch hẹn và thông tin điều trị
              </p>
              <Link to="/patient">
                <Button className="w-full bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white py-3 text-lg">
                  Truy cập
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-white/80 border border-[#D9CAC2] max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#4D3C2D] mb-4">
              Về chúng tôi
            </h3>
            <p className="text-[#6b5a4a] text-lg leading-relaxed">
              Phòng khám Hiếm Muộn cung cấp dịch vụ chăm sóc y tế chuyên nghiệp và toàn diện 
              cho các cặp vợ chồng gặp khó khăn trong việc sinh con. Với đội ngũ bác sĩ giàu kinh nghiệm 
              và trang thiết bị hiện đại, chúng tôi cam kết mang đến những giải pháp điều trị hiệu quả nhất.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
