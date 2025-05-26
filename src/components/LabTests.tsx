
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface LabTest {
  id: string;
  name: string;
  checked: boolean;
}

interface LabTestsProps {
  title: string;
  tests: LabTest[];
}

const LabTests: React.FC<LabTestsProps> = ({ title, tests: initialTests }) => {
  const [tests, setTests] = useState<LabTest[]>(initialTests);
  const [newTest, setNewTest] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);

  const handleTestChange = (testId: string, checked: boolean) => {
    setTests(prev => prev.map(test => 
      test.id === testId ? { ...test, checked } : test
    ));
  };

  const handleAddTest = () => {
    if (newTest.trim()) {
      const newTestItem: LabTest = {
        id: `custom-${Date.now()}`,
        name: newTest.trim(),
        checked: false
      };
      setTests(prev => [...prev, newTestItem]);
      setNewTest('');
      setShowAddInput(false);
    }
  };

  return (
    <Card className="p-6 bg-white border border-[color:var(--card-border)]">
      <h3 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)]">
        {title} - Chỉ định xét nghiệm
      </h3>
      <div className="space-y-3">
        {tests.map((test) => (
          <div key={test.id} className="flex items-center space-x-3">
            <Checkbox
              id={test.id}
              checked={test.checked}
              onCheckedChange={(checked) => handleTestChange(test.id, !!checked)}
              className="data-[state=checked]:bg-[color:var(--deep-taupe)] data-[state=checked]:border-[color:var(--deep-taupe)]"
            />
            <label 
              htmlFor={test.id} 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {test.name}
            </label>
          </div>
        ))}
        
        {showAddInput ? (
          <div className="flex items-center space-x-2 mt-4">
            <Input
              value={newTest}
              onChange={(e) => setNewTest(e.target.value)}
              placeholder="Nhập tên xét nghiệm mới..."
              className="flex-1 border-[color:var(--card-border)] focus:border-[color:var(--deep-taupe)]"
              onKeyPress={(e) => e.key === 'Enter' && handleAddTest()}
            />
            <Button
              onClick={handleAddTest}
              size="sm"
              className="bg-[color:var(--button-primary-bg)] hover:bg-[color:var(--button-hover-bg)] text-[color:var(--button-primary-text)]"
            >
              Thêm
            </Button>
            <Button
              onClick={() => {setShowAddInput(false); setNewTest('');}}
              variant="outline"
              size="sm"
            >
              Hủy
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setShowAddInput(true)}
            variant="outline"
            size="sm"
            className="mt-4 border-[color:var(--card-border)] text-[color:var(--text-secondary)] hover:bg-[color:var(--hover-accent)]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Thêm
          </Button>
        )}
      </div>
    </Card>
  );
};

export default LabTests;
