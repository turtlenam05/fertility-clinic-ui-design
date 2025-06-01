
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, TrendingUp, AlertTriangle, Clock, FileText, MessageSquare, Plus } from 'lucide-react';

export const DashboardContent: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const todayAppointments = [
    { id: 1, patientName: 'Nguyễn Thị A', patientId: 'BN001', time: '08:30', purpose: 'Tái khám', status: 'confirmed' },
    { id: 2, patientName: 'Trần Văn B', patientId: 'BN002', time: '10:00', purpose: 'Khám lần đầu', status: 'pending' },
    { id: 3, patientName: 'Lê Thị C', patientId: 'BN003', time: '14:30', purpose: 'Chọc hút trứng', status: 'confirmed' },
  ];

  const recentResults = [
    { patientId: 'BN004', testType: 'β-hCG', result: 'Dương tính', date: '2024-01-15' },
    { patientId: 'BN005', testType: 'Siêu âm', result: 'Có thai', date: '2024-01-15' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4 mt-2">
            <p className="text-gray-600">BS. Nguyễn Văn An - Chuyên khoa: Hiếm Muộn</p>
            <Badge variant="outline">{currentDate}</Badge>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Tạo phiếu điều trị mới
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bệnh nhân đang điều trị</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 từ tuần trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lịch hẹn hôm nay</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 chờ xác nhận</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ thành công tháng này</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+5% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cảnh báo</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">Ca quá hạn tái khám</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Lịch hẹn hôm nay
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-blue-600">{appointment.time}</span>
                      <span className="font-medium">{appointment.patientName}</span>
                      <Badge variant="outline" className="text-xs">{appointment.patientId}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{appointment.purpose}</p>
                  </div>
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className={appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Thống kê nhanh</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">IUI thành công tháng này:</span>
              <span className="font-bold text-green-600">12/18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">IVF thành công tháng này:</span>
              <span className="font-bold text-green-600">8/15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Chuyên khoa:</span>
              <span className="font-bold">15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Can thiệp:</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Hậu can thiệp:</span>
              <span className="font-bold">8</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Test Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Kết quả xét nghiệm mới
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{result.patientId}</Badge>
                      <span className="font-medium">{result.testType}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{result.date}</p>
                  </div>
                  <Badge 
                    variant={result.result.includes('Dương tính') || result.result.includes('Có thai') ? 'default' : 'secondary'}
                    className={result.result.includes('Dương tính') || result.result.includes('Có thai') ? 'bg-green-100 text-green-800' : ''}
                  >
                    {result.result}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Truy cập nhanh
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Tìm kiếm hồ sơ bệnh nhân
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Xem lịch tuần này
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Báo cáo thống kê
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Tin nhắn nội bộ
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
