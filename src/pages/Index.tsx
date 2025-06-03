
import React from 'react';
import RoleNavigation from '@/components/RoleNavigation';

interface IndexProps {
  onBackToDashboard?: () => void;
}

const Index: React.FC<IndexProps> = ({ onBackToDashboard }) => {
  // If this is being used as a patient record view, we might want different content
  // For now, we'll show the role navigation
  return <RoleNavigation />;
};

export default Index;
