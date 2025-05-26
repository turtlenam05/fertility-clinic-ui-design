
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Calendar } from 'lucide-react';

const InterventionWife: React.FC = () => {
  const [followUps, setFollowUps] = useState<any[]>([]);
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);

  const addFollowUp = () => {
    setFollowUps([...followUps, {
      id: Date.now(),
      date: '',
      follicleCount: '',
      follicleSize: '',
      endometrialThickness: ''
    }]);
    setShowFollowUpForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Phác đồ kích thích buồng trứng */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Phác đồ kích thích buồng trứng
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Loại thuốc</Label>
            <Input placeholder="Nhập loại thuốc..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Liều</Label>
            <Input placeholder="Nhập liều thuốc..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Số ngày</Label>
            <Input placeholder="Nhập số ngày..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Ngày bắt đầu</Label>
            <Input type="date" className="border-[color:var(--card-border)]" />
          </div>
        </div>
      </Card>

      {/* Theo dõi nang noãn */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Theo dõi nang noãn
        </h3>
        
        {followUps.map((followUp, index) => (
          <div key={followUp.id} className="mb-4 p-4 border rounded-lg border-[color:var(--card-border)]">
            <h4 className="font-medium mb-3">Lần theo dõi {index + 1}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Ngày siêu âm</Label>
                <Input type="date" className="border-[color:var(--card-border)]" />
              </div>
              <div className="space-y-2">
                <Label>Số lượng nang</Label>
                <Input placeholder="Nhập số lượng..." className="border-[color:var(--card-border)]" />
              </div>
              <div className="space-y-2">
                <Label>Kích thước nang</Label>
                <Input placeholder="Nhập kích thước..." className="border-[color:var(--card-border)]" />
              </div>
              <div className="space-y-2">
                <Label>Độ dày niêm mạc</Label>
                <Input placeholder="Nhập độ dày..." className="border-[color:var(--card-border)]" />
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={addFollowUp}
          variant="outline"
          className="border-[color:var(--card-border)] text-[color:var(--text-secondary)]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Thêm lần theo dõi
        </Button>
      </Card>

      {/* Ngày tiêm rụng trứng */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Ngày tiêm rụng trứng
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Thuốc</Label>
            <Input placeholder="Nhập loại thuốc..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Thời điểm tiêm</Label>
            <Input placeholder="Nhập thời điểm..." className="border-[color:var(--card-border)]" />
          </div>
        </div>
      </Card>

      {/* Ngày chọc hút trứng */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Ngày chọc hút trứng (IVF)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Số trứng hút được</Label>
            <Input placeholder="Nhập số trứng..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Số trứng trưởng thành</Label>
            <Input placeholder="Nhập số trứng..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Số trứng trữ đông</Label>
            <Input placeholder="Nhập số trứng..." className="border-[color:var(--card-border)]" />
          </div>
        </div>
      </Card>

      {/* Đáp ứng thuốc */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Đáp ứng thuốc
        </h3>
        <Select>
          <SelectTrigger className="border-[color:var(--card-border)]">
            <SelectValue placeholder="Chọn mức độ đáp ứng" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="good">Tốt</SelectItem>
            <SelectItem value="average">Trung bình</SelectItem>
            <SelectItem value="poor">Kém</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      {/* Tạo phôi */}
      <Card className="p-6 bg-white border border-[color:var(--card-border)]">
        <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
          Tạo phôi (IVF)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Số trứng được thụ tinh</Label>
            <Input placeholder="Nhập số trứng..." className="border-[color:var(--card-border)]" />
          </div>
          <div className="space-y-2">
            <Label>Tỷ lệ thành công (%)</Label>
            <Input placeholder="Nhập tỷ lệ..." className="border-[color:var(--card-border)]" />
          </div>
        </div>
      </Card>

      <Button
        variant="outline"
        className="border-[color:var(--card-border)] text-[color:var(--text-secondary)]"
      >
        <Plus className="w-4 h-4 mr-2" />
        Thêm
      </Button>
    </div>
  );
};

export default InterventionWife;
