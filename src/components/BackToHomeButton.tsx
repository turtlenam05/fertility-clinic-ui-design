
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => navigate('/')}
      className="border-[#D9CAC2] text-[#4D3C2D] hover:bg-[#D9CAC2]"
    >
      <Home className="w-4 h-4 mr-2" />
      Về trang chủ
    </Button>
  );
};

export default BackToHomeButton;
