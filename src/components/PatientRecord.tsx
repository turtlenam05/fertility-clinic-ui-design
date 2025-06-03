
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Eye, FileText, User } from 'lucide-react';
import PatientExamResultModal from './PatientExamResultModal';

interface ExamVisit {
  id: string;
  date: string;
  method: 'IUI' | 'IVF';
  stage: 'Chuyên khoa' | 'Can thiệp' | 'Hậu Can Thiệp';
  doctorName: string;
  hasTestResults: boolean;
  status: 'Hoàn thành' | 'Đang tiến hành';
  summary: string;
}

const mockExamHistory: ExamVisit[] = [
  {
    id: '1',
    date: '2024-01-15',
    method: 'IVF',
    stage: 'Chuyên khoa',
    doctorName: 'BS. Nguyễn Thanh Nam',
    hasTestResults: true,
    status: 'Hoàn thành',
    summary: 'Khám sơ bộ, tư vấn phương pháp điều trị'
  },
  {
    id: '2',
    date: '2024-01-22',
    method: 'IVF',
    stage: 'Chuyên khoa',
    doctorName: 'BS. Nguyễn Thanh Nam',
    hasTestResults: true,
    status: 'Hoàn thành',
    summary: 'Xét nghiệm toàn diện, đánh giá tình trạng sức khỏe'
  },
  {
    id: '3',
    date: '2024-02-05',
    method: 'IVF',
    stage: 'Can thiệp',
    doctorName: 'BS. Lê Minh Tuấn',
    hasTestResults: true,
    status: 'Hoàn thành',
    summary: 'Bắt đầu chu kỳ kích thích buồng trứng'
  },
  {
    id: '4',
    date: '2024-02-12',
    method: 'IVF',
    stage: 'Can thiệp',
    doctorName: 'BS. Lê Minh Tuấn',
    hasTestResults: false,
    status: 'Hoàn thành',
    summary: 'Theo dõi phát triển noãn, điều chỉnh liều thuốc'
  },
  {
    id: '5',
    date: '2024-02-18',
    method: 'IVF',
    stage: 'Can thiệp',
    doctorName: 'BS. Lê Minh Tuấn',
    hasTestResults: true,
    status: 'Hoàn thành',
    summary: 'Chọc hút trứng, thụ tinh trong ống nghiệm'
  },
  {
    id: '6',
    date: '2024-02-23',
    method: 'IVF',
    stage: 'Hậu Can Thiệp',
    doctorName: 'BS. Trần Văn Hùng',
    hasTestResults: true,
    status: 'Hoàn thành',
    summary: 'Chuyển phôi, theo dõi sau chuyển phôi'
  },
  {
    id: '7',
    date: '2024-03-05',
    method: 'IVF',
    stage: 'Hậu Can Thiệp',
    doctorName: 'BS. Trần Văn Hùng',
    hasTestResults: false,
    status: 'Đang tiến hành',
    summary: 'Kiểm tra kết quả, theo dõi thai kỳ'
  }
];

const PatientRecord: React.FC = () => {
  const [selectedVisit, setSelectedVisit] = useState<ExamVisit | null>(null);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Chuyên khoa': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Can thiệp': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Hậu Can Thiệp': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'IUI': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'IVF': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hoàn thành': return 'bg-green-100 text-green-800 border-green-200';
      case 'Đang tiến hành': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleViewResults = (visit: ExamVisit) => {
    if (visit.hasTestResults) {
      setSelectedVisit(visit);
    }
  };

  return (
    <div className="p-6 bg-[#EAE4E1] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#4D3C2D] mb-2">
            Hồ sơ khám bệnh
          </h1>
          <p className="text-[#6b5a4a]">
            Theo dõi quá trình điều trị và kết quả khám bệnh
          </p>
        </div>

        {/* Patient Info Summary */}
        <Card className="p-6 mb-6 bg-white border border-[#D9CAC2]">
          <div className="flex items-center space-x-4">
            <User className="w-12 h-12 p-2 bg-[#EAE4E1] rounded-full text-[#4D3C2D]" />
            <div>
              <h2 className="text-xl font-semibold text-[#4D3C2D]">Nguyễn Thị Hoa & Trần Văn Minh</h2>
              <p className="text-[#6b5a4a]">Mã bệnh nhân: BN001</p>
              <p className="text-sm text-[#6b5a4a]">Phương pháp điều trị hiện tại: IVF</p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#4D3C2D] mb-4">
            Lịch sử khám bệnh
          </h3>
          
          {mockExamHistory.map((visit, index) => (
            <Card key={visit.id} className="p-6 bg-white border border-[#D9CAC2] relative">
              {/* Timeline connector */}
              {index < mockExamHistory.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-8 bg-[#D9CAC2]"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Timeline dot */}
                <div className={`w-4 h-4 rounded-full mt-2 ${
                  visit.status === 'Hoàn thành' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-[#4D3C2D]" />
                      <span className="font-semibold text-[#4D3C2D]">
                        {formatDate(visit.date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getMethodColor(visit.method)} text-xs`}>
                        {visit.method}
                      </Badge>
                      <Badge className={`${getStageColor(visit.stage)} text-xs`}>
                        {visit.stage}
                      </Badge>
                      <Badge className={`${getStatusColor(visit.status)} text-xs`}>
                        {visit.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#4D3C2D] mb-1">Bác sĩ điều trị</p>
                      <p className="text-sm text-[#6b5a4a]">{visit.doctorName}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-[#4D3C2D] mb-1">Tóm tắt</p>
                      <p className="text-sm text-[#6b5a4a]">{visit.summary}</p>
                    </div>
                  </div>
                  
                  {visit.hasTestResults && (
                    <div className="mt-4 pt-4 border-t border-[#D9CAC2]">
                      <Button
                        onClick={() => handleViewResults(visit)}
                        size="sm"
                        className="bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Xem kết quả xét nghiệm
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Test Results Modal */}
      <PatientExamResultModal
        isOpen={selectedVisit !== null}
        onClose={() => setSelectedVisit(null)}
        visit={selectedVisit}
      />
    </div>
  );
};

export default PatientRecord;
