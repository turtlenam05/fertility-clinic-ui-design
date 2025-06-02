
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface TestResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  testName: string;
  patientName: string;
  testId: string;
}

const getTestResults = (testName: string) => {
  // Generate random results based on test type and reference values
  const randomInRange = (min: number, max: number, decimals = 1) => 
    Number((Math.random() * (max - min) + min).toFixed(decimals));
  
  const randomBinary = () => Math.random() > 0.7 ? 'Dương tính' : 'Âm tính';
  const randomStatus = () => {
    const statuses = ['Kém', 'Trung bình', 'Khá', 'Tốt'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  switch (testName) {
    case 'Xét nghiệm máu toàn bộ (CBC)':
      const gender = Math.random() > 0.5 ? 'Nam' : 'Nữ';
      return [
        {
          parameter: 'Số lượng hồng cầu',
          value: gender === 'Nam' ? randomInRange(3.8, 5.8) : randomInRange(3.5, 5.2),
          unit: 'T/L',
          reference: gender === 'Nam' ? '4.2 - 5.4 T/L' : '4.0 - 4.9 T/L',
          isNormal: true
        },
        {
          parameter: 'Huyết sắc tố',
          value: gender === 'Nam' ? randomInRange(120, 170) : randomInRange(115, 150),
          unit: 'g/l',
          reference: gender === 'Nam' ? '130 - 160 g/l' : '125 - 142 g/l',
          isNormal: true
        },
        {
          parameter: 'Hematocrit',
          value: gender === 'Nam' ? randomInRange(0.38, 0.50) : randomInRange(0.34, 0.45),
          unit: 'L/L',
          reference: gender === 'Nam' ? '0.42-0.47 L/L' : '0.37-0.42 L/L',
          isNormal: Math.random() > 0.3
        },
        {
          parameter: 'Số lượng tiểu cầu',
          value: randomInRange(130, 480),
          unit: 'G/L',
          reference: '150 - 450 G/L',
          isNormal: Math.random() > 0.2
        }
      ];

    case 'Đánh giá dự trữ buồng trứng (AMH)':
      const amhValue = randomInRange(0.2, 12.0);
      let interpretation = '';
      if (amhValue < 0.5) interpretation = 'Cực thấp - Khả năng dự trữ rất thấp';
      else if (amhValue < 1.5) interpretation = 'Thấp - Khả năng dự trữ thấp';
      else if (amhValue <= 6.8) interpretation = 'Bình thường';
      else interpretation = 'Cao - Cảnh báo buồng trứng đa nang';
      
      return [
        {
          parameter: 'Chỉ số AMH',
          value: amhValue,
          unit: 'ng/ml',
          reference: '2.0 - 6.8 ng/ml',
          isNormal: amhValue >= 2.0 && amhValue <= 6.8,
          interpretation
        }
      ];

    case 'Xét nghiệm tuyến giáp (TSH, T3, FT4)':
      return [
        {
          parameter: 'TSH',
          value: randomInRange(0.2, 6.0),
          unit: 'mU/L',
          reference: '0.4-4.0 mU/L',
          isNormal: Math.random() > 0.3
        },
        {
          parameter: 'T4',
          value: randomInRange(45, 160),
          unit: 'nmol/L',
          reference: '60-140 nmol/L',
          isNormal: Math.random() > 0.2
        },
        {
          parameter: 'FT4',
          value: randomInRange(8, 30),
          unit: 'pmol/L',
          reference: '10-26 pmol/L',
          isNormal: Math.random() > 0.25
        }
      ];

    case 'Xét nghiệm tỉ lệ hồng cầu lắng (ESR)':
      const age = Math.random() > 0.5 ? 'young' : 'old';
      const genderESR = Math.random() > 0.5 ? 'Nam' : 'Nữ';
      let refRange = '';
      if (genderESR === 'Nam') {
        refRange = age === 'young' ? '< 15 mm/hr' : '< 20 mm/hr';
      } else {
        refRange = age === 'young' ? '< 20 mm/hr' : '< 30 mm/hr';
      }
      
      return [
        {
          parameter: 'ESR',
          value: randomInRange(5, 40),
          unit: 'mm/hr',
          reference: refRange,
          isNormal: Math.random() > 0.3
        }
      ];

    case 'Xét nghiệm Chlamydia':
      return [
        {
          parameter: 'Chlamydia',
          value: randomBinary(),
          unit: '',
          reference: 'Âm tính',
          isNormal: Math.random() > 0.15
        }
      ];

    case 'Xét nghiệm VDRL':
      return [
        {
          parameter: 'VDRL',
          value: randomBinary(),
          unit: '',
          reference: 'Âm tính',
          isNormal: Math.random() > 0.1
        }
      ];

    case 'Xét nghiệm nội tiết Prolactin':
      const genderPro = Math.random() > 0.5 ? 'Nam' : 'Nữ';
      return [
        {
          parameter: 'Prolactin',
          value: genderPro === 'Nam' ? randomInRange(80, 500) : randomInRange(100, 700),
          unit: 'µU/mL',
          reference: genderPro === 'Nam' ? '98 - 456 µU/mL' : '127 - 637 µU/mL',
          isNormal: Math.random() > 0.25
        }
      ];

    case 'Xét nghiệm nội tiết Estrogen':
      return [
        {
          parameter: 'Testosterone',
          value: randomInRange(10, 80),
          unit: 'mg/dL',
          reference: '15 - 70 mg/dL',
          isNormal: Math.random() > 0.3
        }
      ];

    case 'Xét nghiệm nội tiết LH':
      return [
        {
          parameter: 'LH',
          value: randomInRange(0.5, 30),
          unit: 'IU/L',
          reference: '0.8 - 26 IU/L',
          isNormal: Math.random() > 0.2
        }
      ];

    case 'Xét nghiệm nội tiết FSH':
      return [
        {
          parameter: 'FSH',
          value: randomInRange(1.0, 12),
          unit: 'IU/L',
          reference: '1.4 - 9.6 IU/L',
          isNormal: Math.random() > 0.25
        }
      ];

    case 'Xét nghiệm tinh dịch đồ':
      return [
        {
          parameter: 'Thể tích tinh dịch',
          value: randomInRange(1.0, 6.0),
          unit: 'ml',
          reference: '≥ 1.4ml',
          isNormal: Math.random() > 0.2
        },
        {
          parameter: 'Tổng số lượng tinh trùng',
          value: randomInRange(20, 80),
          unit: 'triệu',
          reference: '≥ 39 triệu',
          isNormal: Math.random() > 0.3
        },
        {
          parameter: 'Nồng độ tinh trùng',
          value: randomInRange(10, 50),
          unit: 'triệu/ml',
          reference: '≥ 16 triệu/ml',
          isNormal: Math.random() > 0.25
        },
        {
          parameter: 'Chuyển động tiến tới',
          value: randomInRange(20, 60),
          unit: '%',
          reference: '≥ 30%',
          isNormal: Math.random() > 0.3
        }
      ];

    case 'Độ phân mảnh DNA tinh trùng (Halosperm Test)':
      const dfiValue = randomInRange(5, 45);
      let dfiInterpretation = '';
      if (dfiValue < 15) dfiInterpretation = 'Bình thường';
      else if (dfiValue < 30) dfiInterpretation = 'Đứt gãy trung bình';
      else dfiInterpretation = 'Đứt gãy nhiều';
      
      return [
        {
          parameter: 'DFI (DNA Fragmentation Index)',
          value: dfiValue,
          unit: '%',
          reference: '< 15% (Bình thường)',
          isNormal: dfiValue < 15,
          interpretation: dfiInterpretation
        }
      ];

    case 'Xét nghiệm miễn dịch':
      return [
        {
          parameter: 'Tình trạng miễn dịch',
          value: randomStatus(),
          unit: '',
          reference: 'Tốt',
          isNormal: Math.random() > 0.4
        }
      ];

    default:
      return [
        {
          parameter: 'Kết quả',
          value: 'Bình thường',
          unit: '',
          reference: 'Bình thường',
          isNormal: true
        }
      ];
  }
};

const TestResultModal: React.FC<TestResultModalProps> = ({
  isOpen,
  onClose,
  testName,
  patientName,
  testId
}) => {
  const results = getTestResults(testName);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#4D3C2D]">
            Kết quả xét nghiệm - {patientName}
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-1">{testName}</p>
        </DialogHeader>

        <div className="mt-6">
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="border border-[#D9CAC2] rounded-lg p-4 bg-[#EAE4E1]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <p className="text-sm font-medium text-[#4D3C2D]">Thông số</p>
                    <p className="text-lg">{result.parameter}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-[#4D3C2D]">Kết quả</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold">
                        {typeof result.value === 'number' ? result.value.toFixed(1) : result.value}
                      </span>
                      {result.unit && <span className="text-sm text-gray-600">{result.unit}</span>}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-[#4D3C2D]">Giá trị tham chiếu</p>
                    <p className="text-sm text-gray-700">{result.reference}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-[#4D3C2D] mb-1">Đánh giá</p>
                    <Badge 
                      className={`${
                        result.isNormal 
                          ? 'bg-green-100 text-green-800 border-green-200' 
                          : 'bg-red-100 text-red-800 border-red-200'
                      } text-xs`}
                    >
                      {result.isNormal ? 'Bình thường' : 'Bất thường'}
                    </Badge>
                    {result.interpretation && (
                      <p className="text-xs text-gray-600 mt-1">{result.interpretation}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#D9CAC2]">
          <p className="text-sm text-gray-600">
            <strong>Lưu ý:</strong> Kết quả xét nghiệm cần được bác sĩ chuyên khoa đánh giá và tư vấn cụ thể.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestResultModal;
