
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
  Activity,
  Clock,
  CheckCircle
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

      {/* Quick Stats - Hàng 1 */}
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

      {/* Hoạt động gần đây - Thay thế "Thông báo quan trọng" */}
      <Card className="theme-card">
        <CardHeader>
          <CardTitle className="flex items-center" style={{ color: '#4D3C2D' }}>
            <Clock className="mr-2 h-5 w-5" />
            Hoạt động gần đây
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: 'appointment', title: 'Khám định kỳ hoàn thành', patient: 'BN001 - Nguyễn Thị A', time: '10 phút trước', status: 'completed' },
              { type: 'treatment', title: 'Bắt đầu chu kỳ IVF mới', patient: 'BN005 - Hoàng Thị E', time: '25 phút trước', status: 'in-progress' },
              { type: 'test', title: 'Kết quả xét nghiệm đã có', patient: 'BN003 - Lê Thị C', time: '45 phút trước', status: 'completed' },
              { type: 'consultation', title: 'Tư vấn trước điều trị', patient: 'BN007 - Phạm Văn G', time: '1 giờ trước', status: 'completed' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: '#D9CAC2' }}>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {activity.type === 'appointment' && <Calendar className="h-5 w-5" style={{ color: '#4D3C2D' }} />}
                    {activity.type === 'treatment' && <Heart className="h-5 w-5 text-red-500" />}
                    {activity.type === 'test' && <TestTube className="h-5 w-5 text-blue-500" />}
                    {activity.type === 'consultation' && <FileText className="h-5 w-5" style={{ color: '#D9CAC2' }} />}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: '#4D3C2D' }}>{activity.title}</div>
                    <div className="text-sm text-gray-500">{activity.patient}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {activity.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {activity.status === 'in-progress' && <Activity className="h-4 w-4 text-blue-500" />}
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]">
                <Activity className="mr-2 h-4 w-4" />
                Xem tất cả hoạt động
              </Button>
              <Button variant="outline" className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]">
                <Heart className="mr-2 h-4 w-4" />
                Theo dõi điều trị
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
