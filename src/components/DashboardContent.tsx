
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Users, 
  Clock, 
  TrendingUp, 
  UserPlus, 
  FileText, 
  TestTube,
  Heart,
  Activity,
  AlertTriangle
} from 'lucide-react';

export const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6 theme-gradient-bg min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#61474C' }}>Dashboard</h1>
          <p className="text-gray-600 mt-2">Chào mừng bác sĩ - Chuyên khoa Hiếm Muộn</p>
          <p className="text-sm text-gray-500">Hôm nay: {new Date().toLocaleDateString('vi-VN')}</p>
        </div>
        <div className="flex space-x-2">
          <Button className="theme-primary-bg hover:bg-[#4a3639]">
            <UserPlus className="mr-2 h-4 w-4" />
            Thêm bệnh nhân
          </Button>
          <Button variant="outline" className="border-[#9e8e7b] text-[#61474C] hover:bg-[#9e8e7b]">
            <FileText className="mr-2 h-4 w-4" />
            Tạo hồ sơ mới
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Lịch hẹn hôm nay</CardTitle>
            <Calendar className="h-4 w-4" style={{ color: '#61474C' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#61474C' }}>12</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-600">+2</span> so với hôm qua
            </p>
          </CardContent>
        </Card>

        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Bệnh nhân đang điều trị</CardTitle>
            <Users className="h-4 w-4" style={{ color: '#9e8e7b' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#61474C' }}>47</div>
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

        <Card className="theme-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cần theo dõi</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">5</div>
            <p className="text-xs text-gray-500 mt-1">Ca cần xem xét khẩn cấp</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <Card className="lg:col-span-2 theme-card">
          <CardHeader>
            <CardTitle className="flex items-center" style={{ color: '#61474C' }}>
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
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: '#9e8e7b' }}>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium" style={{ color: '#61474C' }}>{appointment.time}</div>
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
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Stats */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="theme-card">
            <CardHeader>
              <CardTitle style={{ color: '#61474C' }}>Thao tác nhanh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-[#9e8e7b] text-[#61474C] hover:bg-[#9e8e7b]">
                <TestTube className="mr-2 h-4 w-4" />
                Xem kết quả xét nghiệm mới
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#9e8e7b] text-[#61474C] hover:bg-[#9e8e7b]">
                <FileText className="mr-2 h-4 w-4" />
                Hồ sơ truy cập gần đây
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#9e8e7b] text-[#61474C] hover:bg-[#9e8e7b]">
                <Heart className="mr-2 h-4 w-4" />
                Theo dõi ca đặc biệt
              </Button>
            </CardContent>
          </Card>

          {/* Treatment Stats */}
          <Card className="theme-card">
            <CardHeader>
              <CardTitle style={{ color: '#61474C' }}>Thống kê điều trị</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">IVF tháng này:</span>
                <span className="font-semibold" style={{ color: '#61474C' }}>18 ca</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">IUI tháng này:</span>
                <span className="font-semibold" style={{ color: '#61474C' }}>24 ca</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Hoàn tất điều trị:</span>
                <span className="font-semibold text-green-600">15 ca</span>
              </div>
              <div className="pt-2 border-t" style={{ borderColor: '#9e8e7b' }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tổng bệnh nhân:</span>
                  <span className="font-semibold" style={{ color: '#61474C' }}>156</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="theme-card">
        <CardHeader>
          <CardTitle className="flex items-center" style={{ color: '#61474C' }}>
            <Activity className="mr-2 h-5 w-5" />
            Hoạt động gần đây
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: '2 giờ trước', action: 'Cập nhật hồ sơ BN001 - Kết quả IVF cycle 2' },
              { time: '4 giờ trước', action: 'Thêm lịch hẹn cho BN005 - Tư vấn điều trị' },
              { time: '1 ngày trước', action: 'Hoàn tất điều trị BN003 - IUI thành công' },
              { time: '2 ngày trước', action: 'Xem kết quả xét nghiệm BN007 - Hormone profile' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-2 rounded border-l-4" style={{ borderLeftColor: '#9e8e7b' }}>
                <Clock className="h-4 w-4 mt-0.5" style={{ color: '#61474C' }} />
                <div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                  <div className="text-sm">{activity.action}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
