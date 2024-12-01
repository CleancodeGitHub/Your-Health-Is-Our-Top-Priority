'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  if (!Icon) return null;
  
  return (
    <div className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}