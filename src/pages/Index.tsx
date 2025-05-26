
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PatientInfo from '@/components/PatientInfo';
import GeneralInfo from '@/components/GeneralInfo';
import LabTests from '@/components/LabTests';
import AppointmentCalendar from '@/components/AppointmentCalendar';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeSubTab, setActiveSubTab] = useState('wife');

  // Mock patient data
  const patientData = {
    name: 'Nguyễn Thị Lan Anh',
    patientId: 'BN001234',
    gender: 'Nữ',
    birthYear: '1990',
    city: 'Hà Nội',
    email: 'lananh.nguyen@email.com',
    phone: '0987654321'
  };

  // Lab tests data for wife
  const wifeLabTests = [
    { id: 'cbc', name: 'Xét nghiệm máu toàn bộ (CBC)', checked: false },
    { id: 'amh', name: 'Đánh giá dự trữ buồng trứng (AMH)', checked: false },
    { id: 'thyroid', name: 'Xét nghiệm tuyến giáp (TSH, T3, FT4)', checked: false },
    { id: 'esr', name: 'Xét nghiệm tỉ lệ hồng cầu lắng (ESR)', checked: false },
    { id: 'chlamydia', name: 'Xét nghiệm Chlamydia', checked: false },
    { id: 'vdrl', name: 'Xét nghiệm VDRL', checked: false },
    { id: 'prolactin', name: 'Xét nghiệm nội tiết Prolactin', checked: false },
    { id: 'estrogen', name: 'Xét nghiệm nội tiết Estrogen', checked: false },
    { id: 'lh', name: 'Xét nghiệm nội tiết LH', checked: false },
    { id: 'fsh', name: 'Xét nghiệm nội tiết FSH', checked: false },
  ];

  // Lab tests data for husband
  const husbandLabTests = [
    { id: 'semen', name: 'Xét nghiệm tinh dịch đồ', checked: false },
    { id: 'hormone', name: 'Xét nghiệm nội tiết tố', checked: false },
    { id: 'genetic', name: 'Xét nghiệm di truyền', checked: false },
    { id: 'immune', name: 'Xét nghiệm miễn dịch', checked: false },
    { id: 'dna', name: 'Độ phân mảnh DNA tinh trùng (Halosperm Test)', checked: false },
  ];

  const handleSaveRecord = () => {
    toast({
      title: "Đã lưu hồ sơ thành công",
      description: `Hồ sơ bệnh nhân ${patientData.name} đã được cập nhật.`,
    });
  };

  const renderSpecialtySubTabs = () => (
    <div className="space-y-6">
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
        <TabsList className="grid w-full grid-cols-3 bg-[color:var(--secondary-background)]">
          <TabsTrigger 
            value="wife"
            className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white"
          >
            Vợ
          </TabsTrigger>
          <TabsTrigger 
            value="husband"
            className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white"
          >
            Chồng
          </TabsTrigger>
          <TabsTrigger 
            value="appointment"
            className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white"
          >
            Hẹn tái khám
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wife" className="space-y-6">
          <GeneralInfo title="Vợ" includeVaccines={true} />
          <LabTests title="Vợ" tests={wifeLabTests} />
        </TabsContent>

        <TabsContent value="husband" className="space-y-6">
          <GeneralInfo title="Chồng" includeVaccines={false} />
          <LabTests title="Chồng" tests={husbandLabTests} />
        </TabsContent>

        <TabsContent value="appointment">
          <AppointmentCalendar />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-6">
        <Button
          onClick={handleSaveRecord}
          className="bg-[color:var(--button-primary-bg)] hover:bg-[color:var(--button-hover-bg)] text-[color:var(--button-primary-text)] px-8 py-2"
        >
          Lưu hồ sơ
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[color:var(--primary-background)] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Patient Information Header */}
        <PatientInfo patient={patientData} />

        {/* Main Tabs */}
        <Tabs defaultValue="specialty" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[color:var(--secondary-background)] mb-6">
            <TabsTrigger 
              value="specialty"
              className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white text-lg py-3"
            >
              Chuyên Khoa
            </TabsTrigger>
            <TabsTrigger 
              value="intervention"
              className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white text-lg py-3"
            >
              Can thiệp
            </TabsTrigger>
            <TabsTrigger 
              value="post-intervention"
              className="data-[state=active]:bg-[color:var(--deep-taupe)] data-[state=active]:text-white text-lg py-3"
            >
              Hậu can thiệp
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specialty">
            {renderSpecialtySubTabs()}
          </TabsContent>

          <TabsContent value="intervention">
            <Card className="p-8 bg-white border border-[color:var(--card-border)] text-center">
              <h3 className="text-xl font-semibold text-[color:var(--text-accent)] mb-4">
                Can thiệp
              </h3>
              <p className="text-[color:var(--text-secondary)]">
                Nội dung tab Can thiệp sẽ được phát triển trong phiên bản tiếp theo.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="post-intervention">
            <Card className="p-8 bg-white border border-[color:var(--card-border)] text-center">
              <h3 className="text-xl font-semibold text-[color:var(--text-accent)] mb-4">
                Hậu can thiệp
              </h3>
              <p className="text-[color:var(--text-secondary)]">
                Nội dung tab Hậu can thiệp sẽ được phát triển trong phiên bản tiếp theo.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
