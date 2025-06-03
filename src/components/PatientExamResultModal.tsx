
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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

interface PatientExamResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  visit: ExamVisit | null;
}

interface TestResult {
  testName: string;
  parameter: string;
  value: string | number;
  unit: string;
  reference: string;
  isNormal: boolean;
  doctorNote?: string;
}

const getTestResultsByVisit = (visitId: string): TestResult[] => {
  const testResultsMap: { [key: string]: TestResult[] } = {
    '1': [
      {
        testName: 'Xét nghiệm máu toàn bộ (CBC)',
        parameter: 'Số lượng hồng cầu',
        value: 4.5,
        unit: 'T/L',
        reference: '4.0 - 4.9 T/L',
        isNormal: true,
        doctorNote: 'Kết quả bình thường, không có dấu hiệu thiếu máu'
      },
      {
        testName: 'Xét nghiệm tuyến giáp (TSH)',
        parameter: 'TSH',
        value: 2.1,
        unit: 'mU/L',
        reference: '0.4-4.0 mU/L',
        isNormal: true,
        doctorNote: 'Chức năng tuyến giáp ổn định'
      }
    ],
    '2': [
      {
        testName: 'Đánh giá dự trữ buồng trứng (AMH)',
        parameter: 'Chỉ số AMH',
        value: 3.2,
        unit: 'ng/ml',
        reference: '2.0 - 6.8 ng/ml',
        isNormal: true,
        doctorNote: 'Dự trữ buồng trứng tốt, phù hợp cho IVF'
      },
      {
        testName: 'Xét nghiệm nội tiết Estrogen',
        parameter: 'Estradiol',
        value: 45,
        unit: 'pg/ml',
        reference: '15 - 70 pg/ml',
        isNormal: true,
        doctorNote: 'Mức độ hormone nữ bình thường'
      },
      {
        testName: 'Xét nghiệm tinh dịch đồ',
        parameter: 'Nồng độ tinh trùng',
        value: 25,
        unit: 'triệu/ml',
        reference: '≥ 16 triệu/ml',
        isNormal: true,
        doctorNote: 'Chất lượng tinh trùng tốt'
      }
    ],
    '3': [
      {
        testName: 'Theo dõi nang noãn',
        parameter: 'Số lượng nang noãn',
        value: 8,
        unit: 'nang',
        reference: '6-12 nang',
        isNormal: true,
        doctorNote: 'Phản ứng tốt với thuốc kích thích'
      },
      {
        testName: 'Xét nghiệm Estradiol',
        parameter: 'E2',
        value: 1250,
        unit: 'pg/ml',
        reference: '1000-3000 pg/ml',
        isNormal: true,
        doctorNote: 'Mức hormone phù hợp với giai đoạn kích thích'
      }
    ],
    '5': [
      {
        testName: 'Kết quả chọc hút trứng',
        parameter: 'Số lượng trứng thu được',
        value: 7,
        unit: 'trứng',
        reference: '5-15 trứng',
        isNormal: true,
        doctorNote: 'Thu được số lượng trứng tốt'
      },
      {
        testName: 'Thụ tinh trong ống nghiệm',
        parameter: 'Tỉ lệ thụ tinh',
        value: '6/7',
        unit: '',
        reference: '≥ 70%',
        isNormal: true,
        doctorNote: 'Tỉ lệ thụ tinh cao (85.7%)'
      }
    ],
    '6': [
      {
        testName: 'Đánh giá phôi',
        parameter: 'Chất lượng phôi',
        value: 'Grade A',
        unit: '',
        reference: 'Grade A-B',
        isNormal: true,
        doctorNote: 'Phôi phát triển tốt, chất lượng cao'
      },
      {
        testName: 'Xét nghiệm β-hCG',
        parameter: 'β-hCG',
        value: 15,
        unit: 'mIU/ml',
        reference: '< 25 mIU/ml',
        isNormal: true,
        doctorNote: 'Chưa có dấu hiệu thai, cần theo dõi tiếp'
      }
    ]
  };

  return testResultsMap[visitId] || [];
};

const PatientExamResultModal: React.FC<PatientExamResultModalProps> = ({
  isOpen,
  onClose,
  visit
}) => {
  if (!visit) return null;

  const testResults = getTestResultsByVisit(visit.id);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Generate overall assessment based on results
  const getOverallAssessment = () => {
    const allNormal = testResults.every(result => result.isNormal);
    if (allNormal) {
      switch (visit.stage) {
        case 'Chuyên khoa':
          return {
            forWife: 'Tình trạng sức khỏe tổng quát tốt, các chỉ số nội tiết bình thường. Phù hợp để tiến hành IVF.',
            forHusband: 'Chất lượng tinh trùng đạt tiêu chuẩn, không có vấn đề về khả năng sinh sản.',
            overall: 'Cả hai vợ chồng đều có tình trạng sức khỏe tốt. Khuyến nghị tiếp tục theo kế hoạch điều trị IVF như đã định.',
            recommendation: 'Bắt đầu chu kỳ kích thích buồng trứng vào chu kỳ kinh nguyệt tiếp theo.'
          };
        case 'Can thiệp':
          return {
            forWife: 'Phản ứng tốt với thuốc kích thích, nang noãn phát triển đều. Sẵn sàng cho bước tiếp theo.',
            forHusband: 'Tinh trùng có chất lượng tốt, sẵn sàng cho thụ tinh.',
            overall: 'Quá trình kích thích buồng trứng diễn ra thuận lợi. Có thể tiến hành chọc hút trứng theo kế hoạch.',
            recommendation: 'Tiếp tục theo dõi sát, chuẩn bị cho ngày chọc hút trứng.'
          };
        case 'Hậu Can Thiệp':
          return {
            forWife: 'Tình trạng sau chuyển phôi ổn định, nội mạc tử cung thuận lợi.',
            forHusband: 'Hỗ trợ tốt trong quá trình điều trị.',
            overall: 'Quá trình chuyển phôi thành công. Cần theo dõi để xác định kết quả thai kỳ.',
            recommendation: 'Tiếp tục dùng thuốc hỗ trợ, tái khám sau 2 tuần để kiểm tra β-hCG.'
          };
        default:
          return {
            forWife: 'Kết quả xét nghiệm bình thường.',
            forHusband: 'Kết quả xét nghiệm bình thường.',
            overall: 'Tất cả các chỉ số đều trong giới hạn bình thường.',
            recommendation: 'Tiếp tục theo dõi theo kế hoạch điều trị.'
          };
      }
    }
    return {
      forWife: 'Cần theo dõi thêm một số chỉ số.',
      forHusband: 'Kết quả trong giới hạn chấp nhận được.',
      overall: 'Có một số chỉ số cần chú ý, nhưng không ảnh hưởng đến kế hoạch điều trị.',
      recommendation: 'Tái khám theo lịch hẹn để đánh giá tiến triển.'
    };
  };

  const assessment = getOverallAssessment();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#4D3C2D]">
            Kết quả xét nghiệm - {formatDate(visit.date)}
          </DialogTitle>
          <div className="flex items-center space-x-2 mt-2">
            <Badge className="bg-[#4D3C2D] text-white text-xs">
              {visit.method}
            </Badge>
            <Badge className="bg-[#D9CAC2] text-[#4D3C2D] text-xs">
              {visit.stage}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Bác sĩ điều trị: {visit.doctorName}
          </p>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Test Results */}
          <div>
            <h3 className="text-lg font-semibold text-[#4D3C2D] mb-4">
              Chi tiết kết quả xét nghiệm
            </h3>
            
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <Card key={index} className="p-4 bg-[#EAE4E1] border border-[#D9CAC2]">
                  <div className="mb-3">
                    <h4 className="font-medium text-[#4D3C2D] text-sm">
                      {result.testName}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-xs font-medium text-[#4D3C2D] mb-1">Thông số</p>
                      <p className="text-sm">{result.parameter}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-[#4D3C2D] mb-1">Kết quả</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold">
                          {typeof result.value === 'number' ? result.value.toFixed(1) : result.value}
                        </span>
                        {result.unit && <span className="text-xs text-gray-600">{result.unit}</span>}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-[#4D3C2D] mb-1">Giá trị tham chiếu</p>
                      <p className="text-xs text-gray-700">{result.reference}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-[#4D3C2D] mb-1">Đánh giá</p>
                      <Badge 
                        className={`${
                          result.isNormal 
                            ? 'bg-green-100 text-green-800 border-green-200' 
                            : 'bg-red-100 text-red-800 border-red-200'
                        } text-xs`}
                      >
                        {result.isNormal ? 'Bình thường' : 'Bất thường'}
                      </Badge>
                    </div>
                  </div>
                  
                  {result.doctorNote && (
                    <div className="mt-3 pt-3 border-t border-[#D9CAC2]">
                      <p className="text-xs font-medium text-[#4D3C2D] mb-1">Ghi chú từ bác sĩ</p>
                      <p className="text-xs text-gray-700">{result.doctorNote}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-[#D9CAC2]" />

          {/* Overall Assessment */}
          <div>
            <h3 className="text-lg font-semibold text-[#4D3C2D] mb-4">
              Chẩn đoán và đề xuất từ bác sĩ
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-blue-50 border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Chẩn đoán cho vợ</h4>
                <p className="text-sm text-blue-700">{assessment.forWife}</p>
              </Card>
              
              <Card className="p-4 bg-green-50 border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Chẩn đoán cho chồng</h4>
                <p className="text-sm text-green-700">{assessment.forHusband}</p>
              </Card>
            </div>
            
            <Card className="p-4 bg-[#EAE4E1] border border-[#D9CAC2] mt-4">
              <h4 className="font-medium text-[#4D3C2D] mb-2">Chẩn đoán chung</h4>
              <p className="text-sm text-[#6b5a4a] mb-3">{assessment.overall}</p>
              
              <h4 className="font-medium text-[#4D3C2D] mb-2">Đề xuất điều trị</h4>
              <p className="text-sm text-[#6b5a4a]">{assessment.recommendation}</p>
            </Card>
          </div>

          <div className="mt-6 pt-4 border-t border-[#D9CAC2]">
            <p className="text-xs text-gray-600">
              <strong>Lưu ý:</strong> Kết quả này chỉ mang tính chất tham khảo. 
              Vui lòng tham khảo ý kiến bác sĩ chuyên khoa để có hướng điều trị phù hợp nhất.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PatientExamResultModal;
