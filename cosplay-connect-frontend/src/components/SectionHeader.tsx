// components/SectionHeader.tsx
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon: Icon, title, subtitle }: SectionHeaderProps) => (
  <div className="space-y-2">
    <h3 className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
      <Icon className="w-5 h-5 text-indigo-500" />
      {title}
    </h3>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

export default SectionHeader;