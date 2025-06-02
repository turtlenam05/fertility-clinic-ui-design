
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Eye, Send, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TestResultModal from './TestResultModal';

interface TestItem {
  id: string;
  name: string;
  status: 'Lấy mẫu' | 'Phân tích' | 'Trả kết quả';
}

interface Patient {
  id: string;
  name: string;
  patientId: string;
  gender: string;
  birthYear: string;
  city: string;
  email: string;
  phone: string;
  doctorName: string;
  doctorId: string;
  tests: TestItem[];
}

const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Nguyễn Thị Hoa',
    patientId: 'BN001',
    gender: 'Nữ',
    birthYear: '1985',
    city: 'Hà Nội',
    email: 'hoa.nguyen@email.com',
    phone: '0901234567',
    doctorName: 'BS. Nguyễn Thanh Nam',
    doctorId: 'BS001',
    tests: [
      { id: 't1', name: 'Xét nghiệm máu toàn bộ (CBC)', status: 'Trả kết quả' },
      { id: 't2', name: 'Đánh giá dự trữ buồng trứng (AMH)', status: 'Trả kết quả' },
      { id: 't3', name: 'Xét nghiệm tuyến giáp (TSH, T3, FT4)', status: 'Phân tích' },
      { id: 't4', name: 'Xét nghiệm nội tiết Prolactin', status: 'Trả kết quả' }
    ]
  },
  {
    id: '2',
    name: 'Trần Văn Minh',
    patientId: 'BN002',
    gender: 'Nam',
    birthYear: '1982',
    city: 'TP.HCM',
    email: 'minh.tran@email.com',
    phone: '0907654321',
    doctorName: 'BS. Nguyễn Thanh Nam',
    doctorId: 'BS001',
    tests: [
      { id: 't5', name: 'Xét nghiệm tinh dịch đồ', status: 'Trả kết quả' },
      { id: 't6', name: 'Xét nghiệm nội tiết FSH', status: 'Trả kết quả' },
      { id: 't7', name: 'Độ phân mảnh DNA tinh trùng (Halosperm Test)', status: 'Trả kết quả' },
      { id: 't8', name: 'Xét nghiệm VDRL', status: 'Trả kết quả' },
      { id: 't9', name: 'Xét nghiệm Chlamydia', status: 'Lấy mẫu' }
    ]
  },
  {
    id: '3',
    name: 'Lê Thị Mai',
    patientId: 'BN003',
    gender: 'Nữ',
    birthYear: '1990',
    city: 'Đà Nẵng',
    email: 'mai.le@email.com',
    phone: '0912345678',
    doctorName: 'BS. Nguyễn Thanh Nam',
    doctorId: 'BS001',
    tests: [
      { id: 't10', name: 'Xét nghiệm tỉ lệ hồng cầu lắng (ESR)', status: 'Phân tích' },
      { id: 't11', name: 'Xét nghiệm nội tiết Estrogen', status: 'Trả kết quả' },
      { id: 't12', name: 'Xét nghiệm nội tiết LH', status: 'Trả kết quả' },
      { id: 't13', name: 'Xét nghiệm miễn dịch', status: 'Lấy mẫu' }
    ]
  },
  {
    id: '4',
    name: 'Phạm Thị Lan',
    patientId: 'BN004',
    gender: 'Nữ',
    birthYear: '1988',
    city: 'Cần Thơ',
    email: 'lan.pham@email.com',
    phone: '0913456789',
    doctorName: 'BS. Lê Minh Tuấn',
    doctorId: 'BS002',
    tests: [
      { id: 't14', name: 'Xét nghiệm máu toàn bộ (CBC)', status: 'Trả kết quả' },
      { id: 't15', name: 'Đánh giá dự trữ buồng trứng (AMH)', status: 'Trả kết quả' },
      { id: 't16', name: 'Xét nghiệm nội tiết Prolactin', status: 'Trả kết quả' },
      { id: 't17', name: 'Xét nghiệm nội tiết Estrogen', status: 'Trả kết quả' }
    ]
  },
  {
    id: '5',
    name: 'Hoàng Văn Đức',
    patientId: 'BN005',
    gender: 'Nam',
    birthYear: '1975',
    city: 'Hải Phòng',
    email: 'duc.hoang@email.com',
    phone: '0908765432',
    doctorName: 'BS. Lê Minh Tuấn',
    doctorId: 'BS002',
    tests: [
      { id: 't18', name: 'Xét nghiệm tinh dịch đồ', status: 'Trả kết quả' },
      { id: 't19', name: 'Xét nghiệm nội tiết FSH', status: 'Trả kết quả' },
      { id: 't20', name: 'Xét nghiệm VDRL', status: 'Trả kết quả' }
    ]
  },
  {
    id: '6',
    name: 'Vũ Thị Ngọc',
    patientId: 'BN006',
    gender: 'Nữ',
    birthYear: '1992',
    city: 'Nha Trang',
    email: 'ngoc.vu@email.com',
    phone: '0917654321',
    doctorName: 'BS. Trần Văn Hùng',
    doctorId: 'BS003',
    tests: [
      { id: 't21', name: 'Xét nghiệm tuyến giáp (TSH, T3, FT4)', status: 'Trả kết quả' },
      { id: 't22', name: 'Xét nghiệm tỉ lệ hồng cầu lắng (ESR)', status: 'Trả kết quả' },
      { id: 't23', name: 'Xét nghiệm nội tiết LH', status: 'Trả kết quả' },
      { id: 't24', name: 'Xét nghiệm Chlamydia', status: 'Trả kết quả' },
      { id: 't25', name: 'Xét nghiệm miễn dịch', status: 'Trả kết quả' }
    ]
  }
];

const ReceptionistTestResults: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<{ testId: string; testName: string; patientName: string } | null>(null);
  const [showOnlyReady, setShowOnlyReady] = useState(false);
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Lấy mẫu': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Phân tích': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Trả kết quả': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const canSendResults = (tests: TestItem[]) => {
    return tests.every(test => test.status === 'Trả kết quả');
  };

  const handleViewResult = (testId: string, testName: string, patientName: string, status: string) => {
    if (status === 'Trả kết quả') {
      setSelectedTest({ testId, testName, patientName });
    }
  };

  const handleSendResults = (patientId: string, doctorName: string) => {
    console.log(`Sending results for patient: ${patientId}`);
    
    toast({
      title: "Gửi kết quả thành công",
      description: `Kết quả đã được chuyển tới bác sĩ ${doctorName}`,
      duration: 3000,
    });
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'Lấy mẫu': return 'Y tá đang lấy mẫu';
      case 'Phân tích': return 'Bác sĩ đang phân tích mẫu';
      default: return '';
    }
  };

  // Filter patients based on the toggle
  const filteredPatients = showOnlyReady 
    ? mockPatients.filter(patient => canSendResults(patient.tests))
    : mockPatients;

  return (
    <div className="p-6 bg-[#EAE4E1] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#4D3C2D]">
            Quản lý kết quả xét nghiệm
          </h1>
          
          <div className="flex items-center space-x-3">
            <Filter className="w-5 h-5 text-[#4D3C2D]" />
            <span className="text-sm font-medium text-[#4D3C2D]">
              Chỉ hiển thị kết quả sẵn sàng gửi
            </span>
            <Switch
              checked={showOnlyReady}
              onCheckedChange={setShowOnlyReady}
              className="data-[state=checked]:bg-[#4D3C2D]"
            />
          </div>
        </div>
        
        {filteredPatients.length === 0 && showOnlyReady && (
          <div className="text-center py-8">
            <p className="text-[#4D3C2D] text-lg">
              Hiện tại không có bệnh nhân nào sẵn sàng để gửi kết quả
            </p>
          </div>
        )}
        
        <div className="space-y-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="p-6 bg-white border border-[#D9CAC2] shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Patient Info */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-[#4D3C2D] mb-3">
                    Thông tin bệnh nhân
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Họ và tên:</span> {patient.name}</div>
                    <div><span className="font-medium">Mã BN:</span> {patient.patientId}</div>
                    <div><span className="font-medium">Giới tính:</span> {patient.gender}</div>
                    <div><span className="font-medium">Năm sinh:</span> {patient.birthYear}</div>
                    <div><span className="font-medium">Thành phố:</span> {patient.city}</div>
                    <div><span className="font-medium">Email:</span> {patient.email}</div>
                    <div><span className="font-medium">SĐT:</span> {patient.phone}</div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[#D9CAC2]">
                    <h4 className="font-medium text-[#4D3C2D] mb-2">Bác sĩ chỉ định</h4>
                    <div className="text-sm">
                      <div>{patient.doctorName}</div>
                      <div className="text-gray-600">{patient.doctorId}</div>
                    </div>
                  </div>
                </div>

                {/* Test Results */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-[#4D3C2D] mb-3">
                    Danh sách xét nghiệm
                  </h3>
                  
                  <div className="space-y-3">
                    {patient.tests.map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-3 bg-[#EAE4E1] rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-[#4D3C2D] text-sm">{test.name}</div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Badge 
                            className={`${getStatusColor(test.status)} font-medium text-xs px-3 py-1`}
                          >
                            {test.status}
                          </Badge>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewResult(test.id, test.name, patient.name, test.status)}
                            className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2] text-xs px-3 py-1 h-7"
                            disabled={test.status !== 'Trả kết quả'}
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Xem kết quả
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#D9CAC2] flex justify-end">
                    <Button
                      onClick={() => handleSendResults(patient.id, patient.doctorName)}
                      disabled={!canSendResults(patient.tests)}
                      className={`${
                        canSendResults(patient.tests)
                          ? 'bg-[#4D3C2D] hover:bg-[#3a2a1f] text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Gửi kết quả
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <TestResultModal
        isOpen={selectedTest !== null}
        onClose={() => setSelectedTest(null)}
        testName={selectedTest?.testName || ''}
        patientName={selectedTest?.patientName || ''}
        testId={selectedTest?.testId || ''}
      />
    </div>
  );
};

export default ReceptionistTestResults;
