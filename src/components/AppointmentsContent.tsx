
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Filter, FileText } from 'lucide-react';

interface AppointmentsContentProps {
  onPatientSelect?: (patientId: string) => void;
}

export const AppointmentsContent: React.FC<AppointmentsContentProps> = ({ onPatientSelect }) => {
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('day');
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'pending' | 'completed'>('all');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const appointments = [
    {
      id: 1,
      patientId: 'BN001',
      patientName: 'Nguyễn Thị A',
      date: '2024-01-16',
      time: '08:30',
      purpose: 'Khám tái khám',
      status: 'confirmed',
      notes: 'Kiểm tra kết quả xét nghiệm'
    },
    {
      id: 2,
      patientId: 'BN002',
      patientName: 'Trần Văn B',
      date: '2024-01-16',
      time: '10:00',
      purpose: 'Khám lần đầu',
      status: 'pending',
      notes: 'Tư vấn phương pháp điều trị'
    },
    {
      id: 3,
      patientId: 'BN003',
      patientName: 'Lê Thị C',
      date: '2024-01-16',
      time: '14:30',
      purpose: 'Chọc hút trứng',
      status: 'confirmed',
      notes: 'IVF - chu kỳ thứ 2'
    },
    {
      id: 4,
      patientId: 'BN004',
      patientName: 'Phạm Thị D',
      date: '2024-01-16',
      time: '16:00',
      purpose: 'Bơm tinh trùng',
      status: 'completed',
      notes: 'IUI - hoàn tất'
    },
  ];

  const filteredAppointments = appointments.filter(appointment => {
    if (statusFilter === 'all') return true;
    return appointment.status === statusFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Đã xác nhận</Badge>;
      case 'pending':
        return <Badge variant="secondary">Chưa xác nhận</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Đã khám xong</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handlePatientClick = (patientId: string) => {
    if (onPatientSelect) {
      onPatientSelect(patientId);
    }
  };

  return (
    <div className="space-y-6 theme-gradient-bg min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: '#8a7275' }}>Lịch hẹn</h1>
          <p className="text-gray-600 mt-2">Quản lý lịch hẹn và cuộc hẹn</p>
        </div>
      </div>

      {/* Filters and View Controls */}
      <Card className="theme-card">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" style={{ color: '#8a7275' }} />
              <span className="text-sm font-medium" style={{ color: '#8a7275' }}>Xem theo:</span>
              <Select value={viewType} onValueChange={(value: any) => setViewType(value)}>
                <SelectTrigger className="w-32 border-[#c4b8a8] focus:ring-[#8a7275]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Ngày</SelectItem>
                  <SelectItem value="week">Tuần</SelectItem>
                  <SelectItem value="month">Tháng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium" style={{ color: '#8a7275' }}>Trạng thái:</span>
              <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
                <SelectTrigger className="w-40 border-[#c4b8a8] focus:ring-[#8a7275]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="confirmed">Đã xác nhận</SelectItem>
                  <SelectItem value="pending">Chưa xác nhận</SelectItem>
                  <SelectItem value="completed">Đã khám xong</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="outline" 
              onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
              className="border-[#c4b8a8] text-[#8a7275] hover:bg-[#c4b8a8]"
            >
              Hôm nay
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calendar View */}
      <Card className="theme-card">
        <CardHeader>
          <CardTitle style={{ color: '#8a7275' }}>
            Lịch hẹn - {viewType === 'day' ? 'Hôm nay' : viewType === 'week' ? 'Tuần này' : 'Tháng này'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md theme-card"
                onClick={() => handlePatientClick(appointment.patientId)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold" style={{ color: '#8a7275' }}>{appointment.time}</div>
                    <div className="text-xs text-gray-500">{appointment.date}</div>
                  </div>
                  <div className="border-l pl-4" style={{ borderColor: '#c4b8a8' }}>
                    <div className="font-medium">{appointment.patientName}</div>
                    <div className="text-sm text-gray-600">{appointment.patientId}</div>
                    <div className="text-sm" style={{ color: '#8a7275' }}>{appointment.purpose}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(appointment.status)}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#c4b8a8] text-[#8a7275] hover:bg-[#c4b8a8]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePatientClick(appointment.patientId);
                    }}
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Xem hồ sơ
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500">Không có lịch hẹn nào phù hợp với bộ lọc.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
