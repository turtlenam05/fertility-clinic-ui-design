
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  FileText, 
  TestTube,
  Heart,
  Activity
} from 'lucide-react';

export const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6 theme-gradient-bg min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#4D3C2D' }}>Dashboard</h1>
          <p className="text-sm text-gray-500">Hôm nay: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>
      </div>

      {/* Quick Stats - Hàng 1 (bỏ mục "Cần theo dõi") */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Lịch hẹn hôm nay</CardTitle>
            <Calendar className="h-4 w-4" style={{ color: '#4D3C2D' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#4D3C2D' }}>12</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+2</span> so với hôm qua
            </p>
          </CardContent>
        </Card>

        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Bệnh nhân đang điều trị</CardTitle>
            <Users className="h-4 w-4" style={{ color: '#D9CAC2' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#4D3C2D' }}>47</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-blue-600">8</span> ca mới tuần này
            </p>
          </CardContent>
        </Card>

        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Tỷ lệ thành công tháng này</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">73%</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+5%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Thống kê chuyên sâu - Hàng 2 */}
      <Card className="theme-card">
        <CardHeader>
          <CardTitle className="flex items-center" style={{ color: '#4D3C2D' }}>
            <TrendingUp className="mr-2 h-5 w-5" />
            Thống kê chuyên sâu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#4D3C2D' }}>
                Hiệu quả Phác đồ điều trị (Treatment Protocol Efficacy)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* IVF Stats */}
                <div className="p-4 rounded-lg border" style={{ borderColor: '#D9CAC2' }}>
                  <h4 className="font-semibold text-lg mb-3" style={{ color: '#4D3C2D' }}>IVF</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tỷ lệ thành công:</span>
                      <span className="font-semibold text-green-600 text-lg">68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Số ca đang điều trị:</span>
                      <span className="font-semibold" style={{ color: '#4D3C2D' }}>23</span>
                    </div>
                  </div>
                </div>

                {/* IUI Stats */}
                <div className="p-4 rounded-lg border" style={{ borderColor: '#D9CAC2' }}>
                  <h4 className="font-semibold text-lg mb-3" style={{ color: '#4D3C2D' }}>IUI</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tỷ lệ thành công:</span>
                      <span className="font-semibold text-green-600 text-lg">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Số ca đang điều trị:</span>
                      <span className="font-semibold" style={{ color: '#4D3C2D' }}>18</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Appointments - Giữ nguyên */}
      <Card className="theme-card">
        <CardHeader>
          <CardTitle className="flex items-center" style={{ color: '#4D3C2D' }}>
            <Calendar className="mr-2 h-5 w-5" />
            Lịch hẹn hôm nay
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: '08:00', patient: 'BN001 - Nguyễn Thị A', purpose: 'Tái khám IVF', status: 'confirmed' },
              { time: '09:30', patient: 'BN002 - Trần Văn B', purpose: 'Siêu âm theo dõi', status: 'waiting' },
              { time: '10:15', patient: 'BN003 - Lê Thị C', purpose: 'Tư vấn IUI', status: 'confirmed' },
              { time: '11:00', patient: 'BN004 - Phạm Thị D', purpose: 'Xem kết quả', status: 'completed' },
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: '#D9CAC2' }}>
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium" style={{ color: '#4D3C2D' }}>{appointment.time}</div>
                  <div>
                    <div className="font-medium">{appointment.patient}</div>
                    <div className="text-sm text-gray-500">{appointment.purpose}</div>
                  </div>
                </div>
                <Badge 
                  variant={appointment.status === 'completed' ? 'default' : 'secondary'}
                  className={
                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'waiting' ? 'theme-accent-bg' :
                    'bg-gray-100 text-gray-800'
                  }
                >
                  {appointment.status === 'confirmed' ? 'Đã xác nhận' :
                   appointment.status === 'waiting' ? 'Chờ khám' : 'Hoàn tất'}
                </Badge>
              </div>
            ))}
            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]">
                <TestTube className="mr-2 h-4 w-4" />
                Xem kết quả xét nghiệm mới
              </Button>
              <Button variant="outline" className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]">
                <FileText className="mr-2 h-4 w-4" />
                Hồ sơ truy cập gần đây
              </Button>
              <Button variant="outline" className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]">
                <Heart className="mr-2 h-4 w-4" />
                Theo dõi ca đặc biệt
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
