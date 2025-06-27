
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
  CheckCircle,
  AlertTriangle,
  Info,
  Bell
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const treatmentData = [
  {
    name: 'IVF',
    successRate: 68,
    activeCases: 23,
  },
  {
    name: 'IUI',
    successRate: 45,
    activeCases: 18,
  }
];

const pieData = [
  { name: 'IVF', value: 23, fill: '#4D3C2D' },
  { name: 'IUI', value: 18, fill: '#D9CAC2' },
];

const chartConfig = {
  successRate: {
    label: "Tỷ lệ thành công (%)",
  },
  activeCases: {
    label: "Số ca đang điều trị",
  },
};

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
            <CardTitle className="text-sm font-medium text-gray-600">Thông báo quan trọng</CardTitle>
            <Bell className="h-4 w-4" style={{ color: '#4D3C2D' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#4D3C2D' }}>4</div>
            <div className="flex items-center space-x-1 mt-2">
              <Badge variant="destructive" className="text-xs">
                <AlertTriangle className="h-3 w-3 mr-1" />
                2 Khẩn cấp
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Info className="h-3 w-3 mr-1" />
                2 Thông tin
              </Badge>
            </div>
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

      {/* Thống kê chuyên sâu với biểu đồ - Hàng 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="theme-card">
          <CardHeader>
            <CardTitle className="flex items-center" style={{ color: '#4D3C2D' }}>
              <TrendingUp className="mr-2 h-5 w-5" />
              Tỷ lệ thành công theo phác đồ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D9CAC2" opacity={0.3} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#4D3C2D', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#4D3C2D', fontSize: 12 }}
                    label={{ value: 'Tỷ lệ (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#4D3C2D' } }}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    cursor={{ fill: '#D9CAC2', opacity: 0.1 }}
                  />
                  <Bar 
                    dataKey="successRate" 
                    fill="#4D3C2D" 
                    radius={[4, 4, 0, 0]}
                    name="Tỷ lệ thành công"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="theme-card">
          <CardHeader>
            <CardTitle className="flex items-center" style={{ color: '#4D3C2D' }}>
              <Activity className="mr-2 h-5 w-5" />
              Phân bố ca điều trị
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#4D3C2D' }}></div>
                  <span className="text-sm">IVF</span>
                </div>
                <span className="text-sm font-medium">23 ca (68%)</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#D9CAC2' }}></div>
                  <span className="text-sm">IUI</span>
                </div>
                <span className="text-sm font-medium">18 ca (45%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hoạt động gần đây - Hàng 3 */}
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
      </div>
    </div>
  );
};
